const initialState = {
  tasks: []
}

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_TASK':
      state.tasks.push(action.payload.data)
      return state;
    case 'TASKS':
      return { ...state, tasks: action.payload.data };
    default:
      return state;
  }
}

export default tasksReducer;