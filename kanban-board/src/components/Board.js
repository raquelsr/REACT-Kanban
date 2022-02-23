import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import { Column } from './Column';
import { DragDropContext } from 'react-beautiful-dnd';

const API_URL = 'http://localhost:3001';

export const Board = () => {
  const [loading, setLoading] = useState(true);
  const [columnList, setColumnList] = useState([]);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      Promise.all([fetch(`${API_URL}/columns`), fetch(`${API_URL}/tasks`)])
        .then((responses) =>
          Promise.all(responses.map((response) => response.json())).then(
            (data) => {
              setColumnList(data[0]);
              setTaskList(data[1]);
              setLoading(false);
            }
          )
        )

        .catch((e) => console.log(e));
    }
    fetchData();
  }, []);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = columnList.find(
      (column) => column.id === source.droppableId
    );
    const task = column.taskIdList.find((task) => task === draggableId);
    const newTaskList = Array.from(column.taskIdList);
    newTaskList.splice(source.index, 1);
    newTaskList.splice(destination.index, 0, task);

    const newColumn = {
      ...column,
      taskIdList: newTaskList,
    };

    const index = columnList.findIndex((column) => column.id === newColumn.id);
    const newColumnList = Array.from(columnList);
    newColumnList.splice(index, 1);
    newColumnList.splice(index, 0, newColumn);

    setColumnList(newColumnList);
    // Update API
  };

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
      <DragDropContext onDragEnd={onDragEnd}>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          {columnList.map((column) => (
            <Column key={column.id} column={column} taskList={taskList} />
          ))}
        </Box>
      </DragDropContext>
    </Box>
  );
};
