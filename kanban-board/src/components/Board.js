import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import { Column } from './Column';

const API_URL = 'http://localhost:3001';

export const Board = () => {
  const [loading, setLoading] = useState(true);
  const [columnList, setColumnList] = useState([]);

  useEffect(() => {
    async function fetchColumns() {
      try {
        const response = await fetch(`${API_URL}/columns`);
        const columnList = await response.json();
        setColumnList(columnList);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    fetchColumns();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        textAlign: 'center',
        '& h1': {
          color: 'green',
        },
      }}
    >
      <h1>Kanban Board</h1>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        {columnList.map((column) => (
          <div key={column.id}>
            <Column column={column} />
          </div>
        ))}
      </Box>
    </Box>
  );
};
