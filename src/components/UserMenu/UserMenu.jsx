import { Box, Typography } from '@mui/material';
// import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserEmail, selectUserName } from '../../redux/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  return (
    <Box className={css.box}>
      <Typography className={css.name} sx={{ display: { xs: 'none', md: 'flex' } }}>
        Welcome, {userName}!
      </Typography>
      <Typography className={css.email} sx={{ display: { xs: 'none', md: 'flex' } }}>
        {userEmail}
      </Typography>
    </Box>
  );
};

export default UserMenu;
