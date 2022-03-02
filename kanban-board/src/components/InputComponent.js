import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import React, { useState, useRef } from 'react';

export const InputComponent = ({
  setIsOpen,
  handleOnClickAddButton,
  type,
  columnId,
}) => {
  const [title, setTitle] = useState('');
  const textInput = useRef(null);

  const handleOnChangeTextField = (e) => {
    setTitle(e.target.value);
  };

  const clearAndCloseComponent = () => {
    textInput.current.value = '';
    setIsOpen(false);
  };

  const handleOnClickCancelButton = () => {
    setTitle('');
    clearAndCloseComponent();
  };

  const onClickAddButton = () => {
    clearAndCloseComponent();
    handleOnClickAddButton(title, type, columnId);
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
        inputRef={textInput}
        autoFocus
        onChange={handleOnChangeTextField}
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
          onClick={onClickAddButton}
        >
          Add
        </Button>
        <Button
          variant="outlined"
          sx={{ background: '#FFF', width: '70px' }}
          size="small"
          onClick={handleOnClickCancelButton}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};
