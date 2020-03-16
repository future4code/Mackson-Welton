import React from 'react';

import TextField from '@material-ui/core/TextField';

const Input = () => {
  return (
    <div>
      <TextField
        id="filled-full-width"
        label="Nova Tarefa"
        style={{ margin: 8 }}
        placeholder="Digite uma nova tarefa"
        fullWidth
        margin="normal"
        variant="filled"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  )
}


export default Input;