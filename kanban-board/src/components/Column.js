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
              background: '#E5E7E9',
              px: 3,
              py: 1,
              borderRadius: 3,
              border: '1px solid black',
              '& h3': {
                textTransform: 'uppercase',
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
