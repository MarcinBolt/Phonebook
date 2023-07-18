import { Container } from '@mui/material';
import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Container
      sx={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '85vh',
        backgroundColor: 'transparent',
        zIndex: 100,
      }}
    >
      <Oval
        visible={true}
        height={50}
        width={50}
        color="#217AFF"
        wrapperStyle={{}}
        wrapperClass=""
        ariaLabel="oval-loading"
        secondaryColor="#217AFF"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </Container>
  );
};
