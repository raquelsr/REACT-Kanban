import { Task } from './Task';

export const Column = ({ column }) => {
  return (
    <>
      <h3>{column.title}</h3>
      {column.taskList.map((task) => (
        <div key={task.id}>
          <Task task={task} />
        </div>
      ))}
    </>
  );
};
