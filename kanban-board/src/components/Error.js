import { Box } from '@mui/system';

export const Error = ({ error }) => {
  return (
    <Box
      sx={{
        background: '#FFF',
        border: '2px solid red',
        m: 8,
        p: 4,
        textAlign: 'center',
      }}
    >
      <p>Oops! Something went wrong.</p>
    </Box>
  );
};
