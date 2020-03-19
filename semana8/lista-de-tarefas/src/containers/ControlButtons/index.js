import React from 'react';
import { connect } from "react-redux";

// import action: buttons
import { filterTasks, markAllTasks, deleteAllMarkedTasks } from '../../actions';

import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const ButtonMarkAllComplete = styled(Button)`
  margin: 5px;
`

const ButtonFilter = styled(Button)`
  margin: 5px;
`

const ButtonDeleteTasks = styled(Button)`
  margin: 5px;
`

const ControlButtons = (props) => {
  return (
    <div>
      <ButtonMarkAllComplete onClick={props.markAllAsComplete}
      variant="contained" color="primary">Marcar todas como completas</ButtonMarkAllComplete>

      <ButtonFilter onClick={() => props.setFilter('All')}
      variant="contained">Todas</ButtonFilter>

      <ButtonFilter onClick={() => props.setFilter('Pending')}
      variant="contained">Pendentes</ButtonFilter>

      <ButtonFilter onClick={() => props.setFilter('Complete')}
      variant="contained">Completas</ButtonFilter>

      <ButtonDeleteTasks onClick={props.deleteTaskComplete}
      variant="contained" color="secondary">Remover completas</ButtonDeleteTasks>
    </div>
  )
}

const mapDispachToProps = dispatch => {
  return {
    markAllAsComplete: () => dispatch(markAllTasks()),
    setFilter:  filter => dispatch(filterTasks(filter)),
    deleteTaskComplete: () => dispatch(deleteAllMarkedTasks())
  }
}

export default connect(null, mapDispachToProps)(ControlButtons);