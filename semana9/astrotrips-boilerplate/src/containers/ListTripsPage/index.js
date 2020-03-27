import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { fetchListTrips, fetchTripDetails } from '../../actions';
import { push } from 'connected-react-router';
import { routes } from '../Router';

import MenuBar from '../MenuBar';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const WrapperListTrips = styled.div`
  width: 100%;
  display: grid;
  place-content: center;
  justify-content: center;
  padding-top: 20px;
`

const WrapperList = styled(Paper)`
  max-width: 700px;
  min-width: 400px;
  padding: 2px;
  text-align: center;
`

class ListTripsPage extends React.Component {

  componentDidMount() {
    window.localStorage.getItem('token') === null ?
      this.props.goToHome() : this.props.getTrips();
  }

  render() {
    return (
      <div>
        <MenuBar />
        <WrapperListTrips>
          <WrapperList elevation={1}>
            {
              this.props.trips === undefined ? 'Carregando...'
                :
                <List>
                  <Button
                    onClick={this.props.goToCreateTrip}
                    variant="contained"
                    color="primary">
                    Criar nova viagem
                </Button>
                  {this.props.trips.map(trip => {
                    return (
                      <ListItem key={trip.id} button onClick={() => this.props.getTripDetail(trip.id)}>
                        <ListItemIcon>
                          <FlightTakeoff />
                        </ListItemIcon>
                        <ListItemText
                          primary={`${trip.planet}: ${trip.name} - ${trip.date}`}
                          secondary={trip.description}
                        />
                      </ListItem>
                    )
                  })}
                </List>
            }
          </WrapperList>
        </WrapperListTrips>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  trips: state.trips.trips
})


const mapDispatchToProps = dispatch => {
  return {
    getTrips: () => dispatch(fetchListTrips()),
    getTripDetail: id => dispatch(fetchTripDetails(id)),
    goToHome: () => dispatch(push(routes.home)),
    goToCreateTrip: () => dispatch(push(routes.createTrip))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage);