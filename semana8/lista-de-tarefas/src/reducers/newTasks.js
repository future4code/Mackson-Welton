const initialState = {
  tasks: []
}

const newTasks = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_NEW_TASK":
      return { tasks: [...state.tasks, action.payload.text]};
    default:
      return state
  }
}

export default newTasks;