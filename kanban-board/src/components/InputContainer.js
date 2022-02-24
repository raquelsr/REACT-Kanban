import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import { InputCard } from './InputCard';
import { Button } from '@mui/material';

export const InputContainer = ({ columnId, type, add }) => {
  const [open, setOpen] = useState(false);

  const change = (e) => {
    alert('chagne');
  };

  return (
    <div className="input-container">
      <Collapse in={open}>
        <InputCard
          setOpen={setOpen}
          columnId={columnId}
          type={type}
          onChange={change}
          add={add}
        />
      </Collapse>
      <Collapse in={!open}>
        <Button size="small" variant="contained" onClick={() => setOpen(!open)}>
          {type === 'task' ? '+ Add task' : '+ Add column'}
        </Button>
      </Collapse>
    </div>
  );
};
