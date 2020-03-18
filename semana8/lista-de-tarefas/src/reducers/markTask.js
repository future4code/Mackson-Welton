const initialState = {
  markTask: false,
  markAllTasks: false
}

const markTask = (state = initialState, action) => {
  switch(action.type) {
    case "MARK_TASK":
      return { ...state, markTask: action.payload.mark };
    case "MARK_ALL_TASKS":
      return { ...state, markAllTasks: action.payload.markAll }
    default:
      return state;
  }
}

export default markTask;