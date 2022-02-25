import { Box } from '@mui/system';

export const Error = ({ error }) => {
  return (
    <Box
      sx={{
        background: '#FFF',
        border: '2px solid #D32F2f',
        m: 8,
        p: 4,
        textAlign: 'center',
        '& p': {
          fontSize: '22px',
          fontWeight: 200,
        },
      }}
    >
      <p> :( Oops! Something went wrong.</p>
    </Box>
  );
};
