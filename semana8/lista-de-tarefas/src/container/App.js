import React from 'react';

import ControlButtons from '../components/ControlButtons';
import Input from '../components/Input';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Task from '../components/Task';

const styles = theme => ({
  root: {
    maxWidth: '900px',
    margin: 'auto',
    textAlign: 'center',
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const App = props => {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <h1>4Task</h1>
        <Input/>
        <Task/>
        <ControlButtons/>
      </Paper>
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);