import { Button } from '@mui/material';
import { InputComponent } from './InputComponent';
import Collapse from '@mui/material/Collapse';
import React, { useState } from 'react';

export const InputContainer = ({ columnId, add, type }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Collapse in={isOpen}>
        <InputComponent
          setIsOpen={setIsOpen}
          add={add}
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
          {type === 'task' ? 'Add task' : 'Add column'}
        </Button>
      </Collapse>
    </>
  );
};
