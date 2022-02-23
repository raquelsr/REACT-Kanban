import React, { useState } from 'react';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

export const InputCard = ({ setOpen, listId, type }) => {
  const [title, setTitle] = useState('');

  const addMoreCard = (e) => alert('Add more card');
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBtnConfirm = () => {
    if (type === 'card') {
      addMoreCard(title, listId);
    } else {
      addMoreCard(title);
    }
    setOpen(false);
    setTitle('');
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
        id="outlined-basic"
        variant="outlined"
        onChange={handleOnChange}
        placeholder="Enter text..."
        color="success"
        autoFocus
        sx={{ background: 'white' }}
      />
      <ButtonGroup
        size="small"
        disableElevation
        variant="contained"
        aria-label="outlined primary button group"
        sx={{ justifyContent: 'center' }}
      >
        <Button onClick={handleBtnConfirm}>Add</Button>
        <Button
          onClick={() => {
            setTitle('');
            setOpen(false);
          }}
        >
          Cancel
        </Button>
      </ButtonGroup>
    </Box>
  );
};
