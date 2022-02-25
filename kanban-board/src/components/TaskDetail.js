import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import { TaskService } from '../services/TaskService';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { board } from '../routes/routes';
import { Link } from 'react-router-dom';
import { Loading } from './Loading';

export const TaskDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState(null);

  useEffect(() => {
    async function fetchTask() {
      try {
        const response = await TaskService.getById(id);
        const task = await response.json();
        setTask(task);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    fetchTask();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Box sx={{ m: 3 }}>
      <Button
        sx={{ background: '#FFF' }}
        variant="outlined"
        size="small"
        color="secondary"
        component={Link}
        to={board()}
      >
        <ArrowBackIcon /> Return to board
      </Button>
      <Box
        sx={{
          background: '#FFF',
          border: '2px solid #2C423F',
          m: 8,
          p: 4,
          textAlign: 'center',
        }}
      >
        <h1>{task.title}</h1>
        <p>More information will be available soon...</p>
      </Box>
    </Box>
  );
};
