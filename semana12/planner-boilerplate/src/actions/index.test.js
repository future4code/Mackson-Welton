import axios from 'axios';
import { getTasks, setTask } from './index';

jest.mock('axios');

describe('Planner Actions', () => {

  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  })

  test("Add New Task", async () => {

    const mockTasks = {
      data: {
        id: 555,
        day: 'Sexta',
        text: 'Tarefa de teste da Sexta'
      }
    }

    axios.post = jest.fn(() => {
      return mockTasks
    })

    const data = mockTasks.data;

    const expectedAction = {
      type: 'NEW_TASK',
      payload: {
        data
      }
    }

    await setTask()(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
  })

  test("Get Tasks", async () => {

    const mockTasks = {
      data: [
        {
          id: 123,
          day: 'Segunda',
          text: 'Tarefa de teste da Segunda'
        },
        {
          id: 321,
          day: 'Terça',
          text: 'Tarefa de teste da terça'
        }
      ]
    };

    axios.get = jest.fn(() => {
      return mockTasks
    })

    const data = mockTasks.data

    const expectedAction = {
      type: 'TASKS',
      payload: {
        data
      }
    }

    await getTasks()(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
  })
})
