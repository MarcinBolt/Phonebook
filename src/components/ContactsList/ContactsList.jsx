import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter, selectIsLoading } from '../../redux/selectors';
import PropTypes from 'prop-types';
import css from './ContactsList.module.css';
import { deleteContact } from '../../redux/contacts/operations';
import { ContactsListItem } from './ContactListItem/ContactListItem';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  const getFilteredContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };
  const sortedContacts = getFilteredContacts().sort((a, b) => a.name.localeCompare(b.name));

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const list = sortedContacts.map(contact => (
    <ContactsListItem
      key={contact.id}
      contact={contact}
      id={contact.id}
      name={contact.name}
      number={contact.number}
      onContactRemove={handleDeleteContact}
      filter={filter}
    />
  ));

  return (
    <>
      {contacts.length > 0 && <ul className={css.contactsList}>{list}</ul>}
      {isLoading || contacts.length === 0 && <h4 className={css.empty}>You did not add any Contact yet...</h4>}
      </>
  );
};

ContactsList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
