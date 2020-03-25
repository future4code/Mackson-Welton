import React from 'react';
import { connect } from "react-redux";

// import action: buttons
import { filterTasks, toggleAllTodo, toggleAllTodoView, deleteDoneTodos } from '../../actions';

import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const WrapperButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const ControlButtons = (props) => {

  const markAllTask = () => {

    props.toggleAllTodoView()

    props.taskIds.map(item => {
      props.toggleAllTodo(item.id)
      return false;
    })
  }

  return (
    <WrapperButtons>
      <Button onClick={() => markAllTask()}
        variant="contained" color="primary">Marcar todas como completas</Button>

      <Button onClick={() => props.setFilter('All')}
        variant="contained">Todas</Button>

      <Button onClick={() => props.setFilter('Pending')}
        variant="contained">Pendentes</Button>

      <Button onClick={() => props.setFilter('Done')}
        variant="contained">Completas</Button>

      <Button onClick={props.deleteTaskComplete}
        variant="contained" color="secondary">Remover completas</Button>
    </WrapperButtons>
  )
}

const mapDispachToProps = dispatch => {
  return {
    toggleAllTodo: (id) => dispatch(toggleAllTodo(id)),
    toggleAllTodoView: () => dispatch(toggleAllTodoView()),
    setFilter: filter => dispatch(filterTasks(filter)),
    deleteTaskComplete: () => dispatch(deleteDoneTodos())
  }
}

export default connect(null, mapDispachToProps)(ControlButtons);