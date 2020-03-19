const initialState = {}

const profiles = (state = initialState, action) => {
  switch(action.type) {
    case 'PROFILE_DATA':
      return action.payload;

    default:
      return state
  }
}

export default profiles
