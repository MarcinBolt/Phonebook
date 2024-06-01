import { useCallback, useEffect, useState } from 'react';
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
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);

  const validateEmail = useCallback(value => {
    const trimmedValue = value.trim();
    const isValid = trimmedValue && /^[A-Z0-9._%+-]+@[A-Z0-9]{1,}\.[A-Z]{2,}$/i.test(trimmedValue);
    setEmailError(
      isValid
        ? ''
        : 'Email must be at least one letters between @ sign and dot, and at least two letters after dot',
    );
  }, []);

  const validateForm = useCallback(() => {
    const canSubmit = username !== '' && !emailError && !passwordError && password.length >= 7;
    setCanSubmit(canSubmit);
  }, [username, emailError, passwordError, password]);

  const validateUsername = useCallback(
    value => {
      const trimmedValue = value.trim();
      setUsername(trimmedValue);
      validateForm();
    },
    [validateForm],
  );

  const validatePassword = useCallback(
    value => {
      const trimmedValue = value.trim();
      setPassword(trimmedValue);
      if (trimmedValue.length < 7) {
        setPasswordError('Password must be at least 7 characters');
      } else {
        setPasswordError('');
      }
      validateForm();
    },
    [validateForm],
  );

  const handleEmailChange = useCallback(
    ev => {
      const trimmedValue = ev.target.value.trim();
      setEmail(trimmedValue);
      validateEmail(trimmedValue);
      validateForm();
    },
    [validateEmail, validateForm],
  );

  const handleUsernameChange = useCallback(
    ev => {
      const trimmedValue = ev.target.value.trim();
      validateUsername(trimmedValue);
    },
    [validateUsername],
  );

  const handlePasswordChange = useCallback(
    ev => {
      const trimmedValue = ev.target.value.trim();
      validatePassword(trimmedValue);
    },
    [validatePassword],
  );

  const handleSubmit = useCallback(
    ev => {
      ev.preventDefault();
      if (canSubmit) {
        dispatch(
          register({
            name: username,
            email,
            password,
          }),
        );

        ev.currentTarget.reset();
      }
    },
    [dispatch, username, email, password, canSubmit],
  );

  useEffect(() => {
    validateForm();
  }, [validateForm]);

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
                Register
              </Typography>
              <Box component="form" validate="true" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      sx={{ color: 'primary.main' }}
                      autoComplete="given-name"
                      name="username"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      autoFocus
                      value={username}
                      onChange={handleUsernameChange}
                      error={!username}
                      helperText={username ? '' : 'Username is required'}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="E-mail Address"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={handleEmailChange}
                      error={!!emailError}
                      helperText={emailError}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="off"
                      value={password}
                      onChange={handlePasswordChange}
                      error={!!passwordError}
                      helperText={passwordError}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={!canSubmit}
                >
                  Register
                </Button>
                <Grid container>
                  <Grid item>
                    <Link href="#/login" variant="body2">
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
