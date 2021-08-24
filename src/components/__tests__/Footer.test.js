import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from '../Footer'

Enzyme.configure({ adapter: new Adapter() })

describe('when footer renders', () => {
  it('has a Toast', () => {
    const renderedFooter = shallow(<Footer/>)
    const renderedToast = renderedFooter.find('Toast')
    expect(renderedToast.length).toEqual(1)
  })
})
