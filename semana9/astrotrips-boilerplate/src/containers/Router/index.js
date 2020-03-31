import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import ListTripsPage from '../ListTripsPage';
import TripDetailsPage from '../TripDetailsPage';
import CreateTripPage from '../CreateTripPage';
import ApplyToTripPage from '../ApplyToTripPage';



export const routes = {
  home: '/',
  login: '/login',
  listTrips: '/list-trips',
  tripDetailsPage: '/trip-details',
  createTrip: '/create-trip',
  applyToTrip: '/apply-to-trip'
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.listTrips} component={ListTripsPage} />
        <Route exact path={routes.tripDetailsPage} component={TripDetailsPage} />
        <Route exact path={routes.createTrip} component={CreateTripPage} />
        <Route exact path={routes.applyToTrip} component={ApplyToTripPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
