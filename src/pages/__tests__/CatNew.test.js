import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import cats from '../../mockCats'
import CatNew from '../CatNew'

Enzyme.configure({ adapter: new Adapter() })

describe('new cat form', () => {
  let renderedCatNew, mockSubmit
  beforeEach(() => {
    mockSubmit = jest.fn()
    renderedCatNew = shallow(<CatNew handleSubmit={mockSubmit}/> )
  })
  it('updates the name when given a name event', () => {
    expect(renderedCatNew).toMatchSnapshot()
    const mockEvent = {
      target: {
        name: 'name',
        value: 'freedom',
      }
    }

    const expected = {
      cat: {
        name: 'freedom',
        age: '',
        enjoys: '',
      },
      submitted: false,
    }

    renderedCatNew.instance().handleChange(mockEvent)
    expect(renderedCatNew.state()).toEqual(expected)
  })
  it('updates the age when given an age event', () => {
    expect(renderedCatNew).toMatchSnapshot()
    const mockEvent = {
      target: {
        name: 'age',
        value: '10',
      }
    }

    const expected = {
      cat: {
        name: '',
        age: '10',
        enjoys: '',
      },
      submitted: false,
    }

    renderedCatNew.instance().handleChange(mockEvent)
    expect(renderedCatNew.state()).toEqual(expected)
  })
  it('updates the enjoys value when given an enjoys event', () => {
    expect(renderedCatNew).toMatchSnapshot()
    const mockEvent = {
      target: {
        name: 'enjoys',
        value: 'lying down',
      }
    }

    const expected = {
      cat: {
        name: '',
        age: '',
        enjoys: 'lying down',
      },
      submitted: false,
    }

    renderedCatNew.instance().handleChange(mockEvent)
    expect(renderedCatNew.state()).toEqual(expected)
  })
  it("should call submit with the correct params", () => {
    renderedCatNew.setState({
      cat: {
        name: 'test name',
        age: '10',
        enjoys: 'test enjoys',
      },
      submitted: true
    });
    const expected = {
      name: 'test name',
      age: '10',
      enjoys: 'test enjoys',
    };
    const mockPreventDefault = jest.fn();
    const mockEvent = {
      preventDefault: mockPreventDefault
    };
    renderedCatNew.instance().handleSubmit(mockEvent);
    expect(mockSubmit).toHaveBeenCalledWith(expected);
  });
})
