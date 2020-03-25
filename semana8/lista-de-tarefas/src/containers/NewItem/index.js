import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// import action: add new to-do item
import { addNewTask } from '../../actions';


import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


const Input = styled(TextField)`
  width: 600px;
`

const Wrapper = styled(Paper)`
  display: flex;
  justify-content: center;
  align-items: center;
`

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
      <Wrapper>
        <Input
          value={this.state.inputText}
          onChange={this.handleChangeText}
          id="filled-full-width"
          label="Nova Tarefa"
          style={{ margin: 8 }}
          placeholder="Digite uma nova tarefa"
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button onClick={() => this.props.submitNewTask(this.state.inputValue)}
          variant="contained">Gravar</Button>
      </Wrapper>
    )
  }
}

const mapDispachToProps = dispatch => {
  return {
    submitNewTask: (text) => dispatch(addNewTask(text))
  }
}


export default connect(null, mapDispachToProps)(NewItem);