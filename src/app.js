import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { ButtonGroup } from '@material-ui/core';

export default function App() {
  return (
    <div>
      <ButtonGroup variant="contained">
        <Button startIcon={<SaveIcon />} color="primary">
          save
        </Button>
        <Button color="secondary" startIcon={<DeleteIcon />}>
          delete
        </Button>
      </ButtonGroup>
    </div>
  );
}
