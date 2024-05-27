import { Container } from '@mui/material';
import { AddContactForm } from '../components/AddContactForm/AddContactForm';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { selectError, selectIsLoading } from '../redux/selectors';
import { Loader } from '../components/Loader/Loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      {isLoading && !error && <Loader />}

      <Container
        sx={{
          display: { sm: 'grid', md: 'flex' },
          justifyContent: 'center',
          alignItems: 'flex-start',
          margin: '30px auto',
          padding: '0 10px',
          minHeight: '50vh',
          gridGap: '25px',
          gap: '30px',
          width: { sm: '90%', md: '100%' },
        }}
      >
        <AddContactForm />
        <ContactsList />
      </Container>
    </>
  );
};
export default Contacts;
