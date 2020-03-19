export const newTask = text => {
  return {
    type: 'ADD_NEW_TASK',
    payload: {
        text
    }
  }
}

export const markTask = id => {
  return {
    type: 'MARK_TASK',
    payload: {
      id,
    }
  }
}

export const markAllTasks = condition => {
  return {
    type: 'MARK_ALL_TASKS',
    payload: {
      markAll: condition
    }
  }
}

export const filterTasks = filter => {
  return {
    type: 'FILTER_TASKS',
    payload: {
      filter
    }
  }
}

export const deleteTask = id => {
  return {
    type: 'DELETE_TASK',
    payload: {
      id
    }
  }
}

export const deleteAllMarkedTasks = () => {
  return {
    type: 'DELETE_ALL_MARKED_TASKS',
  }
}