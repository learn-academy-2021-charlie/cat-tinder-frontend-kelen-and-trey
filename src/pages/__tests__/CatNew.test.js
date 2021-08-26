import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatNew from '../CatNew'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

describe('new cat form', () => {
  let renderedCatNew, mockSubmit, catNewComponent, submitButton, enjoysInput, ageInput, nameInput
  beforeEach(() => {
    mockSubmit = jest.fn()
    renderedCatNew = shallow(<CatNew handleSubmit={mockSubmit}/> )
    catNewComponent = render(
      <Router history={createMemoryHistory()}>
        <CatNew handleSubmit={mockSubmit}/>
      </Router>
    )
    submitButton = catNewComponent.getByTestId('submit-button')
    enjoysInput = catNewComponent.getByTestId('enjoys-input')
    ageInput = catNewComponent.getByTestId('age-input')
    nameInput = catNewComponent.getByTestId('name-input')
  })
  it('updates the name when given a name event', () => {
    expect(renderedCatNew).toMatchSnapshot()
    const mockEvent = {
      target: {
        name: 'name',
        value: 'freedom',
      }
    }
    fireEvent.change(nameInput, mockEvent)
    expect(nameInput.value).toBe('freedom')
  })
  it('updates the age when given an age event', () => {
    expect(renderedCatNew).toMatchSnapshot()
    const mockEvent = {
      target: {
        name: 'age',
        value: '10',
      }
    }
    fireEvent.change(ageInput, mockEvent)
    expect(ageInput.value).toBe('10')
  })
  it('updates the enjoys value when given an enjoys event', () => {
    expect(renderedCatNew).toMatchSnapshot()
    const mockEvent = {
      target: {
        name: 'enjoys',
        value: 'lying down',
      }
    }
    fireEvent.change(enjoysInput, mockEvent)
    expect(enjoysInput.value).toBe('lying down')
  })
  it("should call submit with the correct params", () => {
    const nameEvent = {
      target: {
        name: 'name',
        value: 'freedom',
      }
    }
    const ageEvent = {
      target: {
        name: 'age',
        value: '10',
      }
    }
    const enjoysEvent = {
      target: {
        name: 'enjoys',
        value: 'lying down',
      }
    }
    fireEvent.change(nameInput, nameEvent)
    fireEvent.change(ageInput, ageEvent)
    fireEvent.change(enjoysInput, enjoysEvent)
    fireEvent.click(submitButton)
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
})
