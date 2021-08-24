import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import cats from '../../mockCats'
import CatShow from '../CatShow'

Enzyme.configure({ adapter: new Adapter() })

describe('when CatShow renders', () => {
  it('has two h2s when given props', () => {
    const renderedCatShow = shallow(<CatShow cat={cats[1]}/>)
    const renderedH2s = renderedCatShow.find('h2')
    expect(renderedH2s.length).toEqual(2)
  })
})
