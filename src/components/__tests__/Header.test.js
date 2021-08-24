import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../Header'

Enzyme.configure({ adapter: new Adapter() })

describe('when the Header renders', () => {
  it('displays buttons', () => {
    const renderedHeader = shallow(<Header/>)
    const button = renderedHeader.find('Button')
    expect(button.length).toEqual(3)
  })
})
