import { useParams } from 'react-router-dom';

export const TaskDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
};
