import React from 'react'
// import Enzyme, { shallow } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
import { screen, render } from '@testing-library/react'
import CatIndex from '../CatIndex'
import cats from '../../mockCats'
import AppContext from '../../context/AppContext'

// Enzyme.configure({ adapter: new Adapter() })

describe('when CatIndex renders', () => {
  const component = (
    <AppContext.Provider value={{cats}}>
      <CatIndex/>
    </AppContext.Provider>
  )
  it('has a div for each cat object', async () => {
    render(component)
    const renderedCatCards = await screen.findAllByTestId('cat-profile')
    expect(renderedCatCards.length).toEqual(cats.length)
  })
})
