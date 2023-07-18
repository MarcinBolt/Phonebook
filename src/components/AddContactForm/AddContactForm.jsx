import { Button } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/selectors';
import capitalizeEachWord from '../../utils/capitalizeEachWord';
import css from './AddContactForm.module.css';
import { useState } from 'react';
import notification from '../../utils/notification';

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [nameValue, setNameValue] = useState('');
  const [numberValue, setNumberValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const formDOM = e.currentTarget;
    const newContactName = capitalizeEachWord(formDOM.elements.name.value);
    const newContactNumber = formDOM.elements.number.value;

    contacts.find(c => c.name.toLowerCase() === newContactName.toLowerCase())
      ? notification.notifyContactExist(newContactName)
      : dispatch(
          addContact({
            name: newContactName,
            number: newContactNumber,
          })
        );

    setNameValue('');
    setNumberValue('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.contactForm}>
        <label className={css.title}>Add New Contact:</label>
        <TextField
          className={css.textFieldName}
          id="outlined-basic"
          size="small"
          onChange={e => setNameValue(e.target.value)}
          autoComplete="off"
          type="text"
          name="name"
          value={nameValue}
          label="Enter Name"
          variant="outlined"
          pattern="^[а-źА-Ź]+(([' -][а-źА-Ź ])?[а-źА-Ź]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <TextField
          className={css.textFieldNumber}
          size="small"
          id="outlined-basic"
          onChange={e => setNumberValue(e.target.value)}
          autoComplete="off"
          type="tel"
          name="number"
          value={numberValue}
          label="Enter Number"
          variant="outlined"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button
          className={css.button}
          sx={{ textTransform: 'none' }}
          variant="contained"
          type="submit"
          startIcon={<PersonAddAlt1Icon />}
        >
          Add Contact
        </Button>
      </form>
    </>
  );
};
