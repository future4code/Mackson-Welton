import React from 'react';
import { connect } from 'react-redux';

import { fetchTodo, toggleTodo, deleteTodo } from '../../actions';

import NewItem from '../NewItem/index';
import ControlButtons from '../ControlButtons/index';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import ButtonDelete from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const Wrapper = styled(Paper)`
  max-width: 900px;
  margin: auto;
  text-align: center;
`

class App extends React.Component {

  componentDidMount() {
    this.props.fetchTodo()
  }

  render() {
    return (
      <Wrapper elevation={1} >
        <h1>4Task</h1>
        <NewItem />
        <List>
          {this.props.tasks.filter(item => {
            switch (this.props.filter.filter) {
              case 'All':
                return item;

              case 'Pending':
                return item.done === false;

              case 'Done':
                return item.done === true;

              default:
                return item;
            }
          }).map((item, index) => {
            return (
              <ListItem key={index} role={undefined} dense button onClick={() => this.props.changeMark(item.id)}>
                <Checkbox
                  checked={item.done}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary={`${item.text}`} />
                <ListItemSecondaryAction>
                  <ButtonDelete onClick={() => this.props.delete(item.id)}>Deletar<DeleteIcon/></ButtonDelete>
                </ListItemSecondaryAction>
              </ListItem>
            )
          }
          )}
        </List >
        <ControlButtons taskIds={this.props.tasks} />
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    filter: state.filter
  }
}

const mapDispachToProps = dispatch => {
  return {
    fetchTodo: () => dispatch(fetchTodo()),
    changeMark: id => dispatch(toggleTodo(id)),
    delete: id => dispatch(deleteTodo(id))
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);