import React from 'react';
import { connect } from 'react-redux';

import NewItem from '../NewItem/index';
import ControlButtons from '../ControlButtons/index'

import Paper from '@material-ui/core/Paper';

const App = props => {
  return (
    <div>
      <Paper elevation={1}>
        <h1>4Task</h1>
        <NewItem/>
        <ControlButtons/>
      </Paper>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    list: state.newTasks.tasks
  }
}

export default connect(mapStateToProps)(App);