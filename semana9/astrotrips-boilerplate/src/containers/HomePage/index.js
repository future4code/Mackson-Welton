import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';

import styled from 'styled-components';
import MenuBar from '../MenuBar';
import Button from '@material-ui/core/Button';

const WrapperHome = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function HomePage(props) {
  return (
    <div>
      <MenuBar />
      {window.localStorage.getItem('token') === null ?
        <WrapperHome>
          <h1>
            Faça sua inscrição para próxima viagem espacial.
          </h1>
          <Button color='primary' variant="contained" onClick={props.goToApplytoTripPage}>Inscreva-se</Button>
        </WrapperHome>
        :
        <WrapperHome>
          <h1>
            Seja bem-vindo ao Painel Administrativo
          </h1>
          <Button color='primary' variant="contained" onClick={props.goToListTripsPage}>Visualizar Lista de Viagens</Button>
        </WrapperHome>}
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    goToApplytoTripPage: () => dispatch(push(routes.applyToTrip)),
    goToListTripsPage: () => dispatch(push(routes.listTrips))
  }
}

export default connect(null, mapDispatchToProps)(HomePage);