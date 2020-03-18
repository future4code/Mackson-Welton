export const markTask = condition => {
  return {
    type: 'MARK_TASK',
    payload: {
      mark: condition
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