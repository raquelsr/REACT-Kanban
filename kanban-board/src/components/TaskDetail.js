import { board } from '../routes/routes';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { Error } from './Error';
import { Link } from 'react-router-dom';
import { Loading } from './Loading';
import { TaskService } from '../services/TaskService';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { toast, ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

export const TaskDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [task, setTask] = useState(null);

  useEffect(() => {
    function showToast() {
      if (typeof window !== 'undefined') {
        injectStyle();
      }
      toast('🖇 URL copied to Clipboard, ready to share!', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
    async function fetchTask() {
      try {
        const response = await TaskService.getById(id);
        const task = await response.json();
        if (!response.ok) throw Error('Could not fetch data.');
        setTask(task);
        setIsLoading(false);
        setError(null);
      } catch (e) {
        setIsLoading(false);
        setError(e.message);
        console.error(e);
      }
    }
    showToast();
    fetchTask();
  }, []);

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
      {error && <Error />}
      {isLoading && <Loading />}
      {task && (
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
      )}
      <ToastContainer />
    </Box>
  );
};
