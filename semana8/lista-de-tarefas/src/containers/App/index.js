import React from 'react';
import { connect } from 'react-redux';

import { markTask, deleteTask } from '../../actions';

import NewItem from '../NewItem/index';
import ControlButtons from '../ControlButtons/index';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import ButtonDelete from '@material-ui/core/Button';

import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const Wrapper = styled(Paper)`
  width: 900px;
  margin: auto;
  text-align: center;
`

class App extends React.Component {
  render() {
    return (
      <Wrapper elevation={1} >
        <h1>4Task</h1>
        <NewItem />
        <List>
          {this.props.tasks.filter((item) => {
            const filter = this.props.filter

            if(filter === 'All') {
              return true;
            }
            if(filter === 'Pending') {
              return item.complete === false;
            }
            if(filter === 'Complete') {
              return item.complete === true;
            }
            
            return true

          }).map((item, index) => {
            return (
              <ListItem key={index} role={undefined} dense button onClick={() => this.props.changeMark(item.id)}>
                <Checkbox
                  checked={item.complete}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary={`${item.text}`} />
                <ListItemSecondaryAction>
                  <ButtonDelete onClick={() => this.props.delete(item.id)}>Deletar</ButtonDelete>
                </ListItemSecondaryAction>
              </ListItem>
            )
          }
          )}
        </List >
        <ControlButtons />
      </Wrapper >
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks,
    filter: state.tasks.filter
  }
}

const mapDispachToProps = dispatch => {
  return {
    changeMark: id => dispatch(markTask(id)),
    delete: id => dispatch(deleteTask(id))
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);