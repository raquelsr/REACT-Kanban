import { board } from '../routes/routes';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { Error } from './Error';
import { Link } from 'react-router-dom';
import { Loading } from './Loading';
import { TaskService } from '../services/TaskService';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { toast, ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { useFetch } from '../hooks/useFetch';

export const TaskDetail = () => {
  const { id } = useParams();
  const { isLoading, data, error } = useFetch([TaskService.getById], id);
  const task = data?.[0];

  useEffect(() => {
    function showToast() {
      if (typeof window !== 'undefined') {
        injectStyle();
      }
      toast('🖇 URL copied to Clipboard, ready to share!', {
        position: 'bottom-center',
        autoClose: 1500,
        hideProgressBar: true,
      });
    }
    if (!error) {
      showToast();
    }
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
      {data && (
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
