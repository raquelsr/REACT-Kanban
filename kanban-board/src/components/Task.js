import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import DeleteIcon from '@mui/icons-material/Delete';
import { Draggable } from 'react-beautiful-dnd';
import { Box } from '@mui/system';
import { Button, IconButton } from '@mui/material';

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
              border: '1px solid #2C423F',
              borderRadius: 2,
            }}
            style={{ margin: '15px' }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0 6px 0 12px',
              }}
            >
              <p>{task.title}</p>
              <IconButton
                color="primary"
                size="small"
                sx={{ mr: 0, pr: 0 }}
                edge="end"
              >
                <DeleteIcon></DeleteIcon>
              </IconButton>
            </div>
          </Box>
        </div>
      )}
    </Draggable>
  );
};
