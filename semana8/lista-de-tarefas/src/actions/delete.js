export const deleteTask = id => {
  return {
    type: 'DELETE_TASK',
    payload: {
      id: id
    }
  }
}

export const deleteAllMaekedTasks = () => {
  return {
    type: 'DELETE_ALL_MARKED_TASKS',
  }
}