import React from 'react';

import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const Img = styled.img`
  width: 75px;
  height: 75px;
`
const StyledButton = styled(Button)`
  background: green;
  border: black;
`
function MenuBar(props) {

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Img src={require('../../img/futurex.png')} />
          <StyledButton>Home</StyledButton>
          <StyledButton>Inscreva-se</StyledButton>
          <StyledButton>Login</StyledButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuBar;