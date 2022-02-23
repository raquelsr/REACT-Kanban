import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import DeleteIcon from '@mui/icons-material/Delete';

export const Task = ({ task }) => {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      placeholder="Insert text.."
      value={task.title}
      margin="dense"
      sx={{ background: 'white' }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <DeleteIcon></DeleteIcon>
          </InputAdornment>
        ),
      }}
    />
  );
};
