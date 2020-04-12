import React from 'react';
import { shallow, mount } from 'enzyme';
import { Planner } from './index';
import { act } from 'react-dom/test-utils';

const mockTasks = [
  { id: 321, day: 'Terça', text: 'Comprar sabão' },
  { id: 123, day: 'Quarta', text: 'Ir ao salão de beleza' }
]

describe('Planner', () => {
  const mockTasks = [
    { id: 321, day: 'Terça', text: 'Comprar sabão' },
    { id: 123, day: 'Quarta', text: 'Ir ao salão de beleza' }
  ]

  const mockGetTasks = jest.fn();

  test('Get Taks', () => {

    let component;
    act(() => {
      component = mount(<Planner tasks={mockTasks} getTasks={mockGetTasks} />);
    });
    expect(mockGetTasks).toHaveBeenCalled();
  })

  test('Create New Task', () => {
    let mockState = { text: '', day: '' };

    const mockCreateNewTask = jest.fn();

    const mockSubmitForm = jest.fn(() => {
      mockCreateNewTask(mockState)
    })

    const mockChangeInput = jest.fn((event => {
      const { name, value } = event.target;
      mockState = {...mockState, [name]: value}
    }));

    let component;
    act(() => {
      component = mount(<Planner
        tasks={mockTasks}
        handleChangeInput={mockChangeInput}
        getTasks={mockGetTasks}
        submitForm={mockSubmitForm}
        createNewTask={mockCreateNewTask}
      />);
    });

    const text = component.find('TextField[name="text"]');
    const day = component.find('TextField[name="day"]');
    text.instance().value = 'Tarefa 1';
    day.instance().value = 'Domingo';

    expect(text.instance().value).toBe('Tarefa 1');
    expect(day.instance().value).toBe('Domingo');

    let event = {
        target: {
          name: text.prop('name'),
          value: text.instance().value,
        }
      }


    component.find('TextField[name="text"]').simulate('change', mockChangeInput(event))

    event = {
      target: {
        name: day.prop('name'),
        value: day.instance().value
      }
    }

    component.find('TextField[name="day"]').simulate('change', mockChangeInput(event))

    expect(mockChangeInput).toHaveBeenCalledTimes(2);

    const buttonSubmit = component.find('Button');
    expect(buttonSubmit).toHaveLength(1);

    buttonSubmit.simulate('click', mockSubmitForm());

    expect(mockCreateNewTask).toHaveBeenCalledWith({text: 'Tarefa 1', day: 'Domingo'});

  })
})