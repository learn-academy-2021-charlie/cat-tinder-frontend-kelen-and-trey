import {render, screen} from '@testing-library/react'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import { Route } from 'react-router-dom'
import AppRouter from './components/AppRouter'
Enzyme.configure({ adapter: new Adapter() })

describe('when the app renders', () => {
  const headerComponent = (
    <Router history={createMemoryHistory()}>
      <Header/>
    </Router>
  )
  let pathMap = {}
  beforeAll(() => {
    const routes = shallow(<AppRouter/>)
    pathMap = routes.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props()
      pathMap[routeProps.path] = routeProps.component
      return pathMap
    }, {})
    console.log(pathMap)
  })
  it('renders header', async () => {
    render(headerComponent)
    const headerContainer = await screen.findAllByTestId('header-container')
    expect(headerContainer.length).toEqual(1)
  })
  it('provides a route/ to the home component', () => {
    const renderedApp = shallow(<AppRouter/>)
    const renderedHomeRoute = renderedApp.find('[path="/"]')
    expect(renderedHomeRoute.props().component).toEqual(Home);
  })
  it('provides a route/catindex to the CatIndex component', () => {
    expect(pathMap['/catindex']).toBe(CatIndex)
  })
  it('provides a route/catshow/:id to the CatShow component', () => {
    expect(pathMap['/catshow/:id']).toBe(CatShow)
  })
  it('provides a route/catnew to the CatNew component', () => {
    expect(pathMap['/catnew']).toBe(CatNew)
  })
  it('provides a route/catedit/:id to the CatEdit component', () => {
    const renderedApp = shallow(<AppRouter/>)
    const renderedCatEditRoute = renderedApp.find('[path="/catedit/:id"]')
    expect(renderedCatEditRoute.props().component).toEqual(CatEdit);
  })
  it('provides a route/notfound to the NotFound component', () => {
    expect(pathMap['undefined']).toBe(NotFound)
  })
});









