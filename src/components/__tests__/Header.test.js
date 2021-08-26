import React from 'react'
// import Enzyme, { shallow } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
import Header from '../Header'
import { screen, render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

// Enzyme.configure({ adapter: new Adapter() })

describe('when the Header renders', () => {
  const component = (
    <Router history={createMemoryHistory()}>
      <Header/>
    </Router>
  )
  it('displays buttons', async () => {
    render(component)
    const button = await screen.findAllByTestId('navbutton')
    expect(button.length).toEqual(3)
  })
})
