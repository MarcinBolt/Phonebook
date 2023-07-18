import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  });
  return <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'transparent',
      }}
    ><h2>404 Page Not Found</h2></Container>;
};
export default NotFound;
