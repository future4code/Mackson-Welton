import React from 'react';
import { shallow, mount } from 'enzyme';
import Day from './Day';

describe("Day", () => {
  test('Task Day', () => {
    const mockTasks = [
      {
        id: 123,
        text: 'Comprar Sabão',
        day: 'Domingo'
      },
      {
        id: 222,
        text: 'Comprar Perfume',
        day: 'Domingo'
      }
    ]
    
    const component = shallow(<Day day='Domingo' tasks={mockTasks} />)

    console.log(component.find('li').debug())

    expect(component.find('li')).toHaveLength(2)
  })
})