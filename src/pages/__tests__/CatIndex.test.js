import React from 'react'
import { screen, render } from '@testing-library/react'
import CatIndex from '../CatIndex'
import cats from '../../mockCats'
import AppContext from '../../context/AppContext'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('when CatIndex renders', () => {
  const component = (
    <AppContext.Provider value={{cats}}>
      <Router history={createMemoryHistory()}>
        <CatIndex/>
      </Router>
    </AppContext.Provider>
  )
  it('has a div for each cat object', async () => {
    render(component)
    const renderedCatCards = await screen.findAllByTestId('cat-profile')
    expect(renderedCatCards.length).toEqual(cats.length)
  })
})
