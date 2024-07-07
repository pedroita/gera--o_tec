import React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({ text }) {
  const handleClick = () => {
    alert('Enviado com sucesso!');
  };

  return (
    <Button variant="contained" onClick={handleClick} style={{ margin: '0.5rem' }}>
      {text}
    </Button>
  );
}