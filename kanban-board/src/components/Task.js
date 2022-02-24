import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import DeleteIcon from '@mui/icons-material/Delete';
import { Draggable } from 'react-beautiful-dnd';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

export const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Box
            sx={{
              background: 'white',
              border: '2px solid blue',
              borderRadius: 2,
            }}
            style={{ margin: '15px' }}
          >
            <div style={{ display: 'flex' }}>
              <p>{task.title}</p>
              <Button>
                <DeleteIcon></DeleteIcon>
              </Button>
            </div>
          </Box>
        </div>
      )}
    </Draggable>
  );
};
