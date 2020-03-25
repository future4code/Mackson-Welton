import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import ListTripsPage from '../ListTripsPage';
import CreateTripPage from '../CreateTripPage';



export const routes = {
  root: '/',
  login: '/login',
  listTrips: '/list-trips',
  createTrip: '/create-trip'
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.listTrips} component={ListTripsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
