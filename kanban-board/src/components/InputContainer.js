import { Button } from '@mui/material';
import { InputComponent } from './InputComponent';
import Collapse from '@mui/material/Collapse';
import React, { useState } from 'react';

export const INPUT_TYPE = Object.freeze({
  TASK: 'TASK',
  COLUMN: 'COLUMN',
});

export const InputContainer = ({ columnId, handleOnClickAddButton, type }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Collapse in={isOpen}>
        <InputComponent
          setIsOpen={setIsOpen}
          handleOnClickAddButton={handleOnClickAddButton}
          type={type}
          columnId={columnId}
        />
      </Collapse>
      <Collapse in={!isOpen}>
        <Button
          size="small"
          variant="contained"
          onClick={() => setIsOpen(!isOpen)}
        >
          {type === INPUT_TYPE.TASK ? 'Add task' : 'Add column'}
        </Button>
      </Collapse>
    </>
  );
};
