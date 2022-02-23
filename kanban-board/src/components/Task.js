import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import DeleteIcon from '@mui/icons-material/Delete';

export const Task = ({ task }) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder="Insert text.."
        value={task.title}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <DeleteIcon></DeleteIcon>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
