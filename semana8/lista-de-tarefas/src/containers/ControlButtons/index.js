import React from 'react';
import { connect } from "react-redux";

// import action: buttons
import { deleteAllMarkedTasks } from "../../actions/delete";
import { allTasks, pendingTasks, completeTasks } from '../../actions/filterTasks';
import { markAllTasks } from '../../actions/markTasks';

import Button from '@material-ui/core/Button';

const ControlButtons = (props) => {

  return (
    <div>
      <Button onClick={() => props.markAllAsComplete(true)}
      variant="contained" color="primary">Marcar todas como completas</Button>

      <Button onClick={() => props.showAll(true)}
      variant="contained" href="#contained-buttons">Todas</Button>

      <Button onClick={() => props.filterAllPending(true)}
      variant="contained" href="#contained-buttons">Pendentes</Button>

      <Button onClick={() => props.filterAllComplete(true)}
      variant="contained" href="#contained-buttons">Completas</Button>

      <Button onClick={() => props.deleteTaskComplete(true)}
      variant="contained" color="secondary">Remover completas</Button>
    </div>
  )
}

const mapDispachToProps = dispatch => {
  return {
    markAllAsComplete: condition => dispatch(markAllTasks(condition)),
    showAll: condition => dispatch(allTasks(condition)),
    filterAllPending: condition => dispatch(pendingTasks(condition)),
    filterAllComplete: condition => dispatch(completeTasks(condition)),
    deleteTaskComplete: condition => dispatch(deleteAllMarkedTasks(condition))
  }
}

export default connect(null, mapDispachToProps)(ControlButtons);