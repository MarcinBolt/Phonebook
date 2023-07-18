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
          display: { xs: 'grid', sm: 'flex' },
          justifyContent: 'center',
          alignItems: 'flex-start',
          margin: '30px auto',
          padding: '0 auto',
          minHeight: '50vh',
          gridGap: '25px',
        }}
      >
        <AddContactForm />
        <ContactsList />
      </Container>
    </>
  );
};
export default Contacts;
