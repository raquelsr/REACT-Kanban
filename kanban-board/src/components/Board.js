import { Box } from '@mui/system';
import { Column } from './Column';
import { ColumnService } from '../services/ColumnService';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { Error } from './Error';
import { HttpService } from '../services/HttpService';
import { InputContainer, INPUT_TYPE } from './InputContainer';
import { Loading } from './Loading';
import { TaskService } from '../services/TaskService';
import { useFetch } from '../hooks/useFetch';

export const Board = () => {
  const { isLoading, data, updateData, error } = useFetch([
    ColumnService.getAll,
    TaskService.getAll,
  ]);

  const columnList = data?.[0];
  const taskList = data?.[1];

  const setColumnList = (newColumnList) => {
    const object = [...data];
    object[0] = newColumnList;
    updateData(object);
  };

  const addNewColumn = async (title) => {
    const newColumn = await HttpService.executeRequest(ColumnService.post, {
      id: new Date().getTime().toString(),
      title,
      taskIdList: [],
    });
    setColumnList(columnList.concat(newColumn));
  };

  const addNewTask = async (title, columnId) => {
    const newTask = await HttpService.executeRequest(TaskService.post, {
      id: new Date().getTime().toString(),
      title,
    });
    const column = columnList.find((column) => column.id === columnId);
    const newTaskIdList = column.taskIdList.concat(newTask.id);
    const updatedColumn = await HttpService.executeRequest(
      ColumnService.patch,
      column.id,
      {
        taskIdList: newTaskIdList,
      }
    );
    const columnIndex = columnList.findIndex(
      (column) => column.id === updatedColumn.id
    );
    const newColumnList = [...columnList];
    newColumnList.splice(columnIndex, 1, updatedColumn);
    updateData([newColumnList, taskList.concat(newTask)]);
  };

  const handleOnClickAddButton = async (title, type, columnId) => {
    if (title && title != '') {
      type === INPUT_TYPE.COLUMN
        ? addNewColumn(title)
        : addNewTask(title, columnId);
    }
  };

  const onDragColumn = async ({ destination, source, draggableId }) => {
    const column = columnList.find((column) => column.id === draggableId);
    const newColumnList = [...columnList];
    newColumnList.splice(source.index, 1);
    newColumnList.splice(destination.index, 0, column);
    setColumnList(newColumnList);
  };

  const onDragTask = async ({ destination, source, draggableId }) => {
    const startColumn = columnList.find(
      (column) => column.id === source.droppableId
    );
    const finishColumn = columnList.find(
      (column) => column.id === destination.droppableId
    );
    const task = startColumn.taskIdList.find((task) => task === draggableId);
    const newTaskList = [...startColumn.taskIdList];
    newTaskList.splice(source.index, 1);

    if (startColumn === finishColumn) {
      newTaskList.splice(destination.index, 0, task);

      await HttpService.executeRequest(ColumnService.patch, startColumn.id, {
        taskIdList: newTaskList,
      });
    } else {
      await HttpService.executeRequest(ColumnService.patch, startColumn.id, {
        taskIdList: newTaskList,
      });
      const newTaskListFinish = [...finishColumn.taskIdList];
      newTaskListFinish.splice(destination.index, 0, task);
      await HttpService.executeRequest(ColumnService.patch, finishColumn.id, {
        taskIdList: newTaskListFinish,
      });
    }

    const newColumnList = await HttpService.executeRequest(
      ColumnService.getAll
    );
    setColumnList(newColumnList);
  };

  const onDragEnd = (result) => {
    const { destination, source, type } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    type === INPUT_TYPE.COLUMN ? onDragColumn(result) : onDragTask(result);
  };

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
      {error && <Error />}
      {isLoading && <Loading />}
      {data && (
        <>
          <Box sx={{ width: '100%', display: 'grid', placeContent: 'center' }}>
            <InputContainer
              sx={{ width: '50px' }}
              type={INPUT_TYPE.COLUMN}
              handleOnClickAddButton={handleOnClickAddButton}
            ></InputContainer>
          </Box>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable
              droppableId="all-columns"
              direction="horizontal"
              type={INPUT_TYPE.COLUMN}
            >
              {(provided) => (
                <Box
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: '20px',
                  }}
                >
                  {columnList.map((column, index) => (
                    <Column
                      key={column.id}
                      column={column}
                      taskList={taskList}
                      index={index}
                      handleOnClickAddButton={handleOnClickAddButton}
                    />
                  ))}

                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          </DragDropContext>
        </>
      )}
    </Box>
  );
};
