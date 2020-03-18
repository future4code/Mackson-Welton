export const newTask = text => {
  return {
    type: 'ADD_NEW_TASK',
    payload: {
      text: text
    }
  }
}