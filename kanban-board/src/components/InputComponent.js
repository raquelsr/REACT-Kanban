import React, { useState } from 'react';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

export const InputComponent = ({ setIsOpen, add, type, columnId }) => {
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        textAlign: 'center',
      }}
    >
      <TextField
        placeholder="Enter text..."
        color="primary"
        autoFocus
        onChange={handleOnChange}
        sx={{
          background: '#FFF',
          borderRadius: 2,
        }}
      />
      <Box
        sx={{
          justifyContent: 'space-between',
          textAlign: 'center',
          display: 'flex',
          mx: 2.5,
        }}
      >
        <Button
          size="small"
          variant="contained"
          sx={{ width: '70px' }}
          onClick={() => add(title, type, columnId)}
        >
          Add
        </Button>
        <Button
          variant="outlined"
          sx={{ background: '#FFF', width: '70px' }}
          size="small"
          onClick={() => {
            setTitle('');
            setIsOpen(false);
          }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};
