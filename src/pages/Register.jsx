import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import { Copyright } from '../components/Copyright/Copyright';

const theme = createTheme();

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(event.currentTarget);
    dispatch(
      register({
        name: data.get('userName'),
        email: data.get('email'),
        password: data.get('password'),
      })
    );

    form.reset();
  };

  return (
    <>
      <Container
        maxWidth="sx"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <h1>Welcome to Phonebook App</h1>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <HowToRegIcon />
              </Avatar>
              <Typography component="h3" variant="h5">
                Sign Up
              </Typography>
              <Box component="form" validate="true" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      sx={{ color: 'primary.main' }}
                      autoComplete="given-name"
                      name="userName"
                      required
                      fullWidth
                      id="userName"
                      label="Name"
                      title="Username must have at least 7 characters"
                      pattern=".{7,}"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      title="E-mail address must be at least 7 characters"
                      pattern=".{7,}"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      title="Password must be at least 7 characters"
                      pattern=".{7,}"
                      type="password"
                      id="password"
                      autoComplete="off"
                    />
                  </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Register
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/goit-react-hw-08-phonebook/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      </Container>
    </>
  );
};
export default SignUp;
