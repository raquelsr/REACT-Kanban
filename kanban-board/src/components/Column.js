import { Task } from './Task';
import { Box } from '@mui/system';
import { InputContainer } from './InputContainer';

export const Column = ({ column }) => {
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
      {column.taskList.map((task) => (
        <div key={task.id}>
          <Task task={task} />
        </div>
      ))}
      <InputContainer />
    </Box>
  );
};
