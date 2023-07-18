import { Avatar, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import css from './ContactListItem.module.css';
import { setOpenedContactAction, showHideModalAction } from '../../../redux/modal/modalSlice';
import PropTypes from 'prop-types';

export const ContactsListItem = ({ contact, id, name, number, onContactRemove }) => {
  const dispatch = useDispatch();

  const stringAvatar = name => {
    const names = name.split(' ');
    const firstLetters = names.slice(0, 2).map(n => n[0]);
    return {
      sx: {
        bgcolor: '#51abff',
      },
      children: firstLetters.join(''),
    };
  };

  const handleEditContact = contact => {
    dispatch(showHideModalAction());
    dispatch(setOpenedContactAction(contact));
  };
  return (
    <Chip
      avatar={<Avatar {...stringAvatar(`${name}`)} />}
      key={id}
      className={css.item}
      label={`${name}: ${number}`}
      variant="outlined"
      onClick={() => handleEditContact(contact)}
      onDelete={() => onContactRemove(id)}
      deleteIcon={<DeleteIcon />}
    />
  );
};

ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  number: PropTypes.string,
  onContactRemove: PropTypes.func,
};
