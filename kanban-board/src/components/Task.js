import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import DeleteIcon from '@mui/icons-material/Delete';
import { Draggable } from 'react-beautiful-dnd';

export const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
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
        </div>
      )}
    </Draggable>
  );
};
