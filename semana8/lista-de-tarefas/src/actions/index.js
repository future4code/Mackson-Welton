import axios from 'axios';

// Actions

export const newTask = (id, done, text) => {
  return {
    type: 'ADD_NEW_TASK',
    payload: {
      id,
      done,
      text
    }
  }
}

export const taskList = todoList => {
  return {
    type: 'TASK_LIST',
    payload: {
      todoList
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

export const toggleAllTodoView = () => {
  return {
    type: 'MARK_ALL_TASKS'
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

// API

// Recebe todos os dados da API
export const fetchTodo = () => async (dispatch, getState) => {

  try {

    const response = await axios.get(
      'https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:mackson/todos'
    );

    dispatch(
      taskList(response.data.todos)
    );

  } catch (error) {
    console.log(error.message)
  }
}

// Adiciona novo item a lista
export const addNewTask = text => async (dispatch, getState) => {

  try {
    const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:mackson/todos',
      {
        text
      }
    );

    dispatch(
      newTask(
        response.data.todo.id,
        response.data.todo.done,
        response.data.todo.text
      )
    );
  } catch (error) {
    console.log(error.message)
  }
}

// Marca como feito

export const toggleTodo = id => async (dispatch, getState) => {

  try {

    await axios.put(
      `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:mackson/todos/${id}/toggle`
    );

    dispatch(markTask(id));

  } catch (error) {
    console.log(error.message)
  }
}

export const toggleAllTodo = id => async (dispatch, getState) => {

  try {

    await axios.put(
      `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:mackson/todos/${id}/toggle`
    );

  } catch (error) {
    console.log(error.message)
  }
}

// Deletar

export const deleteTodo = id => async (dispatch, getState) => {

  try {

    await axios.delete(
      `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:mackson/todos/${id}`
    );

    dispatch(deleteTask(id));

  } catch (error) {
    console.log(error.message)
  }
}

export const deleteDoneTodos = () => async (dispatch, getState) => {

  try {

    await axios.delete(
      `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:mackson/todos/delete-done`
    );

    dispatch(deleteAllMarkedTasks());

  } catch (error) {
    console.log(error.message)
  }
}