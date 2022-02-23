import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import { InputCard } from './InputCard';
import { Button } from '@mui/material';

export const InputContainer = ({ listId, type }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="input-container">
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <Button size="small" variant="contained" onClick={() => setOpen(!open)}>
          Add task
        </Button>
      </Collapse>
    </div>
  );
};
