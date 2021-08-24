import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from '../NotFound'

Enzyme.configure({ adapter: new Adapter() })

describe('when footer renders', () => {
  it('has an h2', () => {
    const renderedNotFound = shallow(<NotFound/>)
    const renderedH2 = renderedNotFound.find('h2')
    expect(renderedH2.length).toEqual(1)
  })
})
