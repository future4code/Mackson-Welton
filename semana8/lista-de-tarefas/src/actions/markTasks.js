export const markTask = id => {
  return {
    type: 'MARK_TASK',
    payload: {
      id: id
    }
  }
}

export const markAllTasks = () => {
  return {
    type: 'MARK_ALL_TASKS',
  }
}