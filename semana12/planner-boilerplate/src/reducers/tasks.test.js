import tasksReducer from './tasks';
import { setTaskToReducer, getTasksToReducer } from './../actions';

const mockStore = {
  tasks: []
};

describe('Taks Reducer', () => {
  test('NEW_TASKS', () => {
    const mockTask = { id: 321, day: 'Terça', text: 'Comprar sabão' };
    const mockedAction = setTaskToReducer(mockTask);
    const newStore = tasksReducer(mockStore, mockedAction);

    const tasksLength = newStore.tasks.length - 1;
    expect(newStore.tasks).toHaveLength(1);
    expect(newStore.tasks[tasksLength].id).toBe(mockTask.id);
    expect(newStore.tasks[tasksLength].day).toBe(mockTask.day);
    expect(newStore.tasks[tasksLength].text).toBe(mockTask.text);
  })

  test('TASKS', () => {
    const mockTasks = {
      data: [
        { id: 321, day: 'Terça', text: 'Comprar sabão' },
        { id: 123, day: 'Quarta', text: 'Ir ao salão de beleza' }
      ]
    }
    const mockedAction = getTasksToReducer(mockTasks.data);
    const newStore = tasksReducer(mockStore, mockedAction);
    expect(newStore.tasks).toMatchObject(mockTasks.data)
  })
})