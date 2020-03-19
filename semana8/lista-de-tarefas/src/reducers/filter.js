const initialState = {
  filter: 'All'
}

const filterTasks = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_TASKS":
      return {
        filter: action.payload.filter
      };
    default:
      return state;
  }
}

export default filterTasks;