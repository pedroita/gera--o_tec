import React from 'react';
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

export default function MultilineTextFields({ label }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TextField
        id="outlined-multiline-static"
        label={label}
        multiline
        rows={4}
        variant="outlined"
        fullWidth // Ocupa a largura total disponível
        InputLabelProps={{ shrink: true }} // Mantém o rótulo do TextField visível
      />
    </Box>
  );
}
