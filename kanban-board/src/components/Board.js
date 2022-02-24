import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import { Column } from './Column';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';

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
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'column') {
      const column = columnList.find((column) => column.id === draggableId);
      const newColumnList = [...columnList]; //ES6
      newColumnList.splice(source.index, 1);
      newColumnList.splice(destination.index, 0, column);

      setColumnList(newColumnList);
    } else {
      const startColumn = columnList.find(
        (column) => column.id === source.droppableId
      );

      const finishColumn = columnList.find(
        (column) => column.id === destination.droppableId
      );

      if (startColumn === finishColumn) {
        const task = startColumn.taskIdList.find(
          (task) => task === draggableId
        );
        const newTaskList = Array.from(startColumn.taskIdList);
        newTaskList.splice(source.index, 1);
        newTaskList.splice(destination.index, 0, task);

        const newColumn = {
          ...startColumn,
          taskIdList: newTaskList,
        };

        const index = columnList.findIndex(
          (column) => column.id === newColumn.id
        );
        const newColumnList = Array.from(columnList);
        newColumnList.splice(index, 1);
        newColumnList.splice(index, 0, newColumn);

        setColumnList(newColumnList);
        // Update API
      } else {
        const task = startColumn.taskIdList.find(
          (task) => task === draggableId
        );
        const newTaskListStart = Array.from(startColumn.taskIdList);
        newTaskListStart.splice(source.index, 1);
        const newColumnStart = {
          ...startColumn,
          taskIdList: newTaskListStart,
        };

        const newTaskListFinish = Array.from(finishColumn.taskIdList);
        newTaskListFinish.splice(destination.index, 0, task);
        const newColumnFinish = {
          ...finishColumn,
          taskIdList: newTaskListFinish,
        };

        const indexStart = columnList.findIndex(
          (column) => column.id === newColumnStart.id
        );
        const indexFinish = columnList.findIndex(
          (column) => column.id === newColumnFinish.id
        );
        const newColumnList = Array.from(columnList);
        newColumnList.splice(indexStart, 1);
        newColumnList.splice(indexStart, 0, newColumnStart);
        newColumnList.splice(indexFinish, 1);
        newColumnList.splice(indexFinish, 0, newColumnFinish);

        setColumnList(newColumnList);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        textAlign: 'center',
        '& h1': {
          color: '#2C423F',
          fontSize: '3rem',
          textDecoration: 'underline',
          fontWeight: 500,
        },
      }}
    >
      <h1>Kanban Board</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                {columnList.map((column, index) => (
                  <Column
                    key={column.id}
                    column={column}
                    taskList={taskList}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </Box>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};
