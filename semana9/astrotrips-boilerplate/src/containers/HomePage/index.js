import React from 'react';
import { connect } from 'react-redux';
import { replace } from 'connected-react-router';
import { routes } from '../Router';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import MenuBar from '../../components/MenuBar';
import Button from '@material-ui/core/Button';

function HomePage(props) {
  return (
    <div>
      <MenuBar />
      <h1>
        Faça sua inscrição para próxima viagem espacial.
        </h1>
      <Button onClick={props.goToListTripsPage}>Inscreva-se</Button>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    goToListTripsPage: () => dispatch(replace(routes.listTrips))
  }
}

export default connect(null, mapDispatchToProps)(HomePage);