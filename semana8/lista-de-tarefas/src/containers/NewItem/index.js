import React from 'react';
import { connect } from 'react-redux';

// import action: add new to-do item
import { newTask } from '../../actions/newTask';


import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';


class NewItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: ''
    }
  }

  handleChangeText = event => {

    this.setState({
      inputValue: event.target.value
    })
  }

  render() {

    return (
      <div>
        <TextField
          value={this.state.inputText}
          onChange={this.handleChangeText}
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
        <Button onClick={() => this.props.submitNewTask(this.state.inputValue)}
          variant="contained" href="#contained-buttons">Todas</Button>
      </div>
    )
  }
}

const mapDispachToProps = dispatch => {
  return {
    submitNewTask: text => dispatch(newTask(text))
  }
}


export default connect(null, mapDispachToProps)(NewItem);