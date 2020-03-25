const initialState = {
  trips: undefined
}


const list = (state = initialState, action) => {
  switch(action.type) {
    case 'TRIPS':
      return state.trips = action.payload;

    default:
      return state;
  }
}

export default list;