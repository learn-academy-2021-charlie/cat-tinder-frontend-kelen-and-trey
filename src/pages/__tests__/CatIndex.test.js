import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from '../CatIndex'
import cats from '../../mockCats'

Enzyme.configure({ adapter: new Adapter() })

describe('when CatIndex renders', () => {
  it('has a div for each cat object', () => {
    const renderedCatIndex = shallow(<CatIndex cats={cats}/>)
    const renderedH3s = renderedCatIndex.find('h3')
    expect(renderedH3s.length).toEqual(cats.length)
  })
})
