const initialState = {
}

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case 'PROFILE_DATA':
      return action.payload;

    case 'MATCHES':
      const matches = action.payload.matches;
      return { ...state, matches };

    default:
      return state
  }
}

export default profiles
