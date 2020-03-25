import axios from 'axios';

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/mackson';

export const fetchListTrips = () => async (dispatch, getState) => {
  try {
  const result = await axios.get(`${baseUrl}/trips`);
  dispatch(ListAllTrips(
    result.data.trips
  ))
  } catch (err) {
    console.log(err.message)
  }
}


export const ListAllTrips = trips => ({
  type: 'TRIPS',
  payload: {
    trips
  }
})