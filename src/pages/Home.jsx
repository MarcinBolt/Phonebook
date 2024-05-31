import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';
import { Copyright } from '../components/Copyright/Copyright';
import { useState, useCallback } from 'react';

const theme = createTheme();

const Home = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);

  const validateEmail = useCallback(
    value => {
      const isValid = value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(value);
      setEmailError(isValid ? '' : 'Email is required and must be a valid email address');
      setCanSubmit(isValid && password);
    },
    [password]
  );

  const validatePassword = useCallback(
    value => {
      setPasswordError(value ? '' : 'Password is required');
      setCanSubmit(value && email);
    },
    [email]
  );

  const handleSubmit = useCallback(
    ev => {
      ev.preventDefault();
      if (canSubmit) {
        dispatch(
          logIn({
            email,
            password,
          })
        );
        ev.currentTarget.reset();
      }
    },
    [dispatch, email, password, canSubmit]
  );

  return (
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
              <ExitToAppIcon />
            </Avatar>
            <Typography component="h3" variant="h5">
              Sign In
            </Typography>
            <Box
              component="form"
              validate="true"
              onSubmit={handleSubmit}
              sx={{
                mt: 1,
              }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                error={!!emailError}
                helperText={emailError}
                id="email"
                label="E-mail Address"
                type="email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={ev => {
                  setEmail(ev.target.value);
                  validateEmail(ev.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                error={!!passwordError}
                helperText={passwordError}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={event => {
                  setPassword(event.target.value);
                  validatePassword(event.target.value);
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!canSubmit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="#/register" variant="body2">
                    Do not have an account yet? Register
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </Container>
  );
};
export default Home;
