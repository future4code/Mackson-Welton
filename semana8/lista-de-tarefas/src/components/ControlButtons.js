import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const ControlButtons = (props) => {
  const { classes } = props;

  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>Marcar todas como completas</Button>
      <Button variant="contained" href="#contained-buttons" className={classes.button}>Todas</Button>
      <Button variant="contained" href="#contained-buttons" className={classes.button}>Pendentes</Button>
      <Button variant="contained" href="#contained-buttons" className={classes.button}>Completas</Button>
      <Button variant="contained" color="secondary" className={classes.button}>Remover completas</Button>
    </div>
  )
}

Button.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlButtons);