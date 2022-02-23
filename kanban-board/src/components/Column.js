import { Task } from './Task';
import { Box } from '@mui/system';
import { InputContainer } from './InputContainer';
import { Droppable } from 'react-beautiful-dnd';

export const Column = ({ column, taskList }) => {
  const taskValues = column.taskIdList.reduce((value, taskId) => {
    const task = taskList.find((task) => task.id === taskId);
    if (task) value.push(task);
    return value;
  }, []);

  const dataColumn = { ...column, tasks: taskValues };
  return (
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
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {dataColumn.tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <InputContainer />
    </Box>
  );
};
