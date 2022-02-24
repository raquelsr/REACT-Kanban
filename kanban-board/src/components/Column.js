import { Task } from './Task';
import { Box } from '@mui/system';
import { InputContainer } from './InputContainer';
import { Droppable, Draggable } from 'react-beautiful-dnd';

export const Column = ({ column, taskList, index }) => {
  const taskValues = column.taskIdList.reduce((value, taskId) => {
    const task = taskList.find((task) => task.id === taskId);
    if (task) value.push(task);
    return value;
  }, []);

  const dataColumn = { ...column, tasks: taskValues };
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Box
            sx={{
              background: '#ebecf0',
              px: 2,
              py: 1,
              borderRadius: 3,
              border: '1px solid #2C423F',
              '& h3': {
                textTransform: 'uppercase',
                color: '#2C423F',
                fontSize: '1.5rem',
                fontWeight: 900,
                mt: 1,
              },
            }}
          >
            <h3>{column.title}</h3>
            <Droppable droppableId={column.id} type="task">
              {(provided) => (
                <Box
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                    mb: 3,
                  }}
                >
                  {dataColumn.tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index} />
                  ))}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
            <InputContainer />
          </Box>
        </div>
      )}
    </Draggable>
  );
};
