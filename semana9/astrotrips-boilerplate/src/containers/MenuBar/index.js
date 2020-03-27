import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';

import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const StyledToobar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`

const Img = styled.img`
  width: 75px;
  height: 75px;
`
const StyledButton = styled.div`
  margin-right: 100px;
`
function MenuBar(props) {

  return (
    <div>
      <AppBar position='static'>
        <StyledToobar>
          <Img onClick={props.goToHome} src={require('../../img/futurex.png')} />
          <StyledButton>
            <Button onClick={props.goToHome}>Home</Button>
            <Button onClick={props.goToApplytoTripPage}>Inscreva-se</Button>
            <Button onClick={props.goToLogin}>Login</Button>
          </StyledButton>
        </StyledToobar>
      </AppBar>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    goToHome: () => dispatch(push(routes.home)),
    goToApplytoTripPage: () => dispatch(push(routes.applyToTrip)),
    goToLogin: () => dispatch(push(routes.login))
  }
}

export default connect(null, mapDispatchToProps)(MenuBar);