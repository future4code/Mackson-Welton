import React, { Component } from 'react';

import { connect } from 'react-redux';
import {login} from '../../actions';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import MenuBar from '../MenuBar';

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <MenuBar />
        <LoginWrapper>
          <TextField
            onChange={this.handleFieldChange}
            name='email'
            type='email'
            label='E-mail'
            value={email}
          />
          <TextField
            onChange={this.handleFieldChange}
            name='password'
            type='password'
            label='Password'
            value={password}
          />
          <Button onClick={() => this.props.toSubmitLogin(email, password)}>Login</Button>
        </LoginWrapper>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toSubmitLogin: (email, password) => dispatch(login(email, password))
  }
}
  

export default connect(null, mapDispatchToProps)(LoginPage);
