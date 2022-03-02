import { Box } from '@mui/system';
import { Draggable } from 'react-beautiful-dnd';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { taskDetail } from '../routes/routes';
import * as React from 'react';
import ShareIcon from '@mui/icons-material/Share';

export const Task = ({ task, index }) => {
  const handleOnClickShareButton = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}${taskDetail()}/${task.id}`
    );
  };

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
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton
                  color="primary"
                  size="small"
                  sx={{ mr: 0, pr: 0 }}
                  edge="end"
                  component={Link}
                  to={`${taskDetail()}/${task.id}`}
                  onClick={handleOnClickShareButton}
                >
                  <ShareIcon />
                </IconButton>
              </Box>
            </div>
          </Box>
        </div>
      )}
    </Draggable>
  );
};
