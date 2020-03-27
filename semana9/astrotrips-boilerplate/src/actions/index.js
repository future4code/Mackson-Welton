import axios from 'axios';
import { push } from 'connected-react-router';
import { routes } from '../containers/Router';

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/mackson';
const token = window.localStorage.getItem('token');

export const fetchListTrips = () => async dispatch => {
  try {

    const result = await axios.get(`${baseUrl}/trips`);

    dispatch(ListAllTrips(
      result.data.trips
    ));

  } catch (error) {
    console.error(error.message)
  }
}

export const ListAllTrips = trips => ({
  type: 'TRIPS',
  payload: {
    trips
  }
})

export const login = (email, password) => async dispatch => {
  try {

    const response = await axios.post(`${baseUrl}/login`, {
      email,
      password
    });

    window.localStorage.setItem('token', response.data.token);

    dispatch(push(routes.listTrips));

  } catch (error) {
    console.error("Senha ou e-mail estão errados: ", error.message)
  }
}

export const fetchTripDetails = id => async dispatch => {
  try {

    const response = await axios.get(`${baseUrl}/trip/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'auth': `${token}`
      }
    });

    dispatch(tripDetail(response.data.trip));
    dispatch(push(routes.tripDetailsPage));

  } catch (error) {
    console.error(error.message)
  }
}

export const tripDetail = tripDetail => ({
  type: 'TRIP_DETAIL',
  payload: {
    tripDetail
  }
})

export const createTrip = tripData => async dispatch => {
  try {
    await axios.post(`${baseUrl}/trips`, tripData, {
      headers: {
        'Content-Type': 'application/json',
        'auth': `${token}`
      }
    })

  } catch (error) {
    console.error(error.message)
  }
}

export const decideCandidate = (approve, tripId, candidateId) => async dispatch => {
  try {
    await axios.put(`${baseUrl}/trips/${tripId}/candidates/${candidateId}/decide`, {
      approve
    }, {
      headers: {
        'Content-Type': 'application/json',
        'auth': `${token}`
      }
    })
  } catch (error) {
    alert(error.message)
    console.error(error.message)
  }
}

export const applyToTrip = dataCandidate => async dispatch => {
  try {
    await axios.post(`${baseUrl}/trips/${dataCandidate.planet}/apply`, dataCandidate, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch(error) {
    console.error(error.message)
  }
}