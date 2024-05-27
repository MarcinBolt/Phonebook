import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalShown, selectOpenedContact } from '../../redux/selectors';
import {
  editOpenedContactAction,
  resetOpenedContactAction,
  showHideModalAction,
} from '../../redux/modal/modalSlice';
import { editContact } from '../../redux/contacts/operations';
import css from './EditContactModal.module.css';
import closeIcon from '../../assets/icons/close.svg';

const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  bgcolor: 'background.paper',
  border: '1px solid #555555',
  borderRadius: '6px',
  boxShadow: 24,
  p: 5,
};

//DOM element added in index.html ( <div id="modal-contact"></div> )
// const modalDOM = document.querySelector('#modal-contact');
const modalDOM = document.body;

export const EditContactModal = () => {
  const dispatch = useDispatch();
  const contact = useSelector(selectOpenedContact);
  const isModalShown = useSelector(selectIsModalShown);

  const handleClose = () => {
    dispatch(showHideModalAction());
    dispatch(resetOpenedContactAction());
  };
  const handleChange = e => {
    const payload = { name: e.target.name, value: e.target.value };
    dispatch(editOpenedContactAction(payload));
  };

  const handleEditedSubmit = e => {
    e.preventDefault();
    dispatch(editContact(contact));
    dispatch(showHideModalAction());
    dispatch(resetOpenedContactAction());
  };

  return createPortal(
    <div>
      <Modal
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        open={isModalShown}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleEditedSubmit} autoComplete="off">
          <IconButton
            style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              display: 'flex',
              width: '16px',
              height: '16px',
              border: '0',
              padding: '10px',
              transform: 'rotate(90deg)',
            }}
            onClick={handleClose}
          >
            <img src={closeIcon} alt="Close" viewBox="0 0 18 18" />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Contact
          </Typography>
          <TextField
            id="outlined-basic"
            type="text"
            label="Name"
            name="name"
            variant="outlined"
            value={contact.name}
            onChange={handleChange}
            required
          />
          <TextField
            id="outlined-basic"
            type="tel"
            label="number"
            name="number"
            variant="outlined"
            value={contact.number}
            onChange={handleChange}
            required
          />
          <Button variant="contained" type="submit" className={css.button}>
            <SaveIcon className={css.icon} />
            Save
          </Button>
          <Button
            color="primary"
            variant="outlined"
            type="button"
            className={css.button}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>,

    modalDOM
  );
};
