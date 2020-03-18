const initialState = {
  tasks: [],
  filter: 'All'
}

const newTasks = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_NEW_TASK":
      const text = action.payload.text;
      const id = Date.now();
      const complete = false
      return { 
        ...state,
        tasks: [{ text, id, complete }, ...state.tasks] 
      };

    case "MARK_TASK":
      const newTasksList = state.tasks.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            complete: !item.complete
          }
        } else {
          return item
        }
      })
      return { 
        ...state,
        tasks: newTasksList 
      };

    case "DELETE_TASK":
      const DeleteTask = state.tasks.filter(item => {
        if (item.id === action.payload.id) {
          return false
        } else {
          return true
        }
      })
      return { 
        ...state,
        tasks: DeleteTask 
      };

    case "MARK_ALL_TASKS":
      const TasksListComplete = state.tasks.map(item => {
        return {
          ...item,
          complete: !item.complete
        }
      })
      return { 
        ...state,
        tasks: TasksListComplete 
      };

    case "DELETE_ALL_MARKED_TASKS":
      const DeleteComplete = state.tasks.filter(item => {
        if (item.complete) {
          return false
        } else {
          return true
        }
      })
      return { 
        ...state,
        tasks: DeleteComplete 
      };
      case "FILTER_TASKS":
        return {
          ...state,
          filter: action.payload.filter
        };
    default:
      return state
  }
}

export default newTasks;