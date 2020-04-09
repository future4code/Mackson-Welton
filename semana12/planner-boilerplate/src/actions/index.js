import axios from 'axios';

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/generic/:planner-macksonwelton';

export const setTask = data => async dispatch => {
  try {
    const response = await axios.post(`${baseUrl}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    dispatch(setTaskToReducer(response.data))

  } catch (error) {
    console.error(error.message)
  }
}

export const setTaskToReducer = data => ({
  type: 'NEW_TASK',
  payload: {
    data
  }
})

export const getTasks = () => async dispatch => {
  try {
    const response = await axios.get(`${baseUrl}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    dispatch(tasksToReducer(response.data))

  } catch (error) {
    console.error(error.message)
  }
}

export const tasksToReducer = data => ({
  type: 'TASKS',
  payload: {
    data
  }
})