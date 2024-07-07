import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem 0',
  },
}));

const EmailField = ({ label }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    // Expressão regular para validar email
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setEmailError(!isValidEmail);
  };

  return (
    <Box className={classes.root}>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        value={email}
        onChange={handleEmailChange}
        error={emailError} // Define o estado de erro baseado na validação do email
        helperText={emailError ? 'Email inválido' : ''}
        fullWidth // Ocupa a largura total disponível
      />
    </Box>
  );
};

export default EmailField;
