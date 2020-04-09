import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { connect } from "react-redux";

import Day from "../../component/Day";

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { setTask, getTasks } from "../../actions";

const WrapperPlanner = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;

`

const Form = styled.form`
  display: flex;
  width: 300px;
  flex-direction: column;
  margin: auto;
`

const ListDays = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  margin: 20px;
  gap: 10px;
`

const Planner = (props) => {
  const [input, setInput] = useState({ text: "", day: "" })

  const tasks = props.tasks;
  
  useEffect(() => {
    props.getTasks();
  })

  const handleChangeInput = event => {
    const { name, value } = event.target;

    setInput({
      ...input,
      [name]: value
    })
  }

  const submitForm = event => {
    event.preventDefault();
    props.createNewTask(input);
  }

  const days = [
    {
      value: 'Domingo',
      label: 'Domingo'
    },
    {
      value: 'Segunda',
      label: 'Segunda-feira',
    },
    {
      value: 'Terça',
      label: 'Terça-feira',
    },
    {
      value: 'Quarta',
      label: 'Quarta-feira',
    },
    {
      value: 'Quinta',
      label: 'Quinta-feira',
    },
    {
      value: 'Sexta',
      label: 'Sexta-feira'
    },
    {
      value: 'Sábado',
      label: 'Sábado'
    }
  ];

  return (
    <WrapperPlanner>
      <Form onSubmit={submitForm}>
        <TextField
          label="Tarefa"
          name="text"
          value={input.text}
          onChange={handleChangeInput}
          margin="normal"
          variant="outlined"
          multiline={true}
        />
        <TextField
          select
          name="day"
          label="Dia"
          value={input.day}
          onChange={handleChangeInput}
          margin="normal"
          variant="outlined"
        >
          {days.map(option => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            )
          })}
        </TextField>
        <Button variant="contained" type="submit">Cadastrar</Button>
      </Form>
      <ListDays>
        {tasks.length === 0 ? 'Carregando...' : days.map(data => {
          return <Day key={data.value} day={data.value} tasks={tasks} />
        })
        }
      </ListDays>

    </WrapperPlanner>
  )
}

const mapStateToProps = state => ({
  tasks: state.tasksReducer.tasks
});

const mapDispatchToProps = (dispatch) => {
  return {
    createNewTask: data => dispatch(setTask(data)),
    getTasks: () => dispatch(getTasks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
