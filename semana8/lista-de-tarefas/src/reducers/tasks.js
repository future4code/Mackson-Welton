const initialState =
  [
  ]

const newTasks = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_NEW_TASK":
      const newTask = {
        id: action.payload.id,
        done: action.payload.done,
        text: action.payload.text
      }
      return [newTask, ...state]

    case "TASK_LIST":
      return action.payload.todoList

    case "MARK_TASK":
      return state.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            done: !item.done
          }
        } else {
          return item
        }
      })
      
    case "MARK_ALL_TASKS":
      return state.map(item => {
          return {
            ...item,
            done: !item.done
          }
        })

    case "DELETE_TASK":
      return state.filter(item => {
        if (item.id === action.payload.id) {
          return false
        } else {
          return true
        }
      })

    case "DELETE_ALL_MARKED_TASKS":
      return state.filter(item => {
        if (item.done) {
          return false
        } else {
          return true
        }
      })

    default:
      return state
  }
}

export default newTasks;