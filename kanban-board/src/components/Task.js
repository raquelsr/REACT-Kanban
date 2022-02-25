import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Draggable } from 'react-beautiful-dnd';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from 'react-router-dom';
import { taskDetail } from '../routes/routes';

export const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Box
            sx={{
              background: '#FFF',
              border: `${
                snapshot.isDragging ? '3px solid #2C423F' : '1px solid #2C423F'
              }`,
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
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${window.location.origin}${taskDetail()}/${task.id}`
                  );
                }}
                component={Link}
                to={`${taskDetail()}/${task.id}`}
              >
                <ShareIcon />
              </IconButton>
              <IconButton
                color="primary"
                size="small"
                sx={{ mr: 0, pr: 0 }}
                edge="end"
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </Box>
        </div>
      )}
    </Draggable>
  );
};
