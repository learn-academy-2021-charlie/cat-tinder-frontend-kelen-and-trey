// import {render, screen} from '@testing-library/react'
// import {createMemoryHistory} from 'history'
// import {Router} from 'react-router-dom'
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App';
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import cats from './mockCats'
import NotFound from './pages/NotFound'
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom'
// import { render } from '@testing-library/react'
// import AppContext from './context/AppContext'
Enzyme.configure({ adapter: new Adapter() })





describe('app does the rendering', () => {
  it('renders header', () => {
    const renderedApp = shallow(<App/>)
    // console.log(renderedApp.find('Header').debug())
    const renderedHeader = renderedApp.find('Header')
    expect(renderedHeader.length).toEqual(1);
  })
  it('provides a route/ to the home component', () => {
    const renderedApp = shallow(<App/>)
    const renderedHomeRoute = renderedApp.find('[path="/"]')
    // console.log(renderedHomeRoute.props())
    expect(renderedHomeRoute.props().component).toEqual(Home);
  })
  it('provides a route/catindex to the CatIndex component', () => {
    // const component = (
    //   <AppContext.Provider value={{cats}}>
    //     <CatIndex/>
    //   </AppContext.Provider>
    // )
    const renderedApp = shallow(<App/>)
    const renderedCatIndexRoute = renderedApp.find('[path="/catindex"]')
    expect(renderedCatIndexRoute.props().component).toEqual(<CatIndex/>);
  })
  it('provides a route/catshow/:id to the CatShow component', () => {
    const renderedApp = shallow(<App/>)
    const renderedCatShowRoute = renderedApp.find('[path="/catshow/:id"]')
    expect(renderedCatShowRoute.props().render()).toEqual(<NotFound />);
  })
  it('provides a route/catnew to the CatNew component', () => {
    const renderedApp = shallow(<App/>)
    const renderedCatNewRoute = renderedApp.find('[path="/catnew"]')
    expect(renderedCatNewRoute.props().render()).toEqual(<CatNew handleSubmit={expect.any(Function)}/>);
  })
  it('provides a route/catedit/:id to the CatEdit component', () => {
    const renderedApp = shallow(<App/>)
    const renderedCatEditRoute = renderedApp.find('[path="/catedit/:id"]')
    expect(renderedCatEditRoute.props().component).toEqual(CatEdit);
  })
  // it('provides a route/notfound to the NotFound component', () => {
  //   const component = mount(
  //     <MemoryRouter initialEntries={['/undefined']}>
  //       <App/>
  //     </MemoryRouter>
  //   )
  //   expect(component.find(NotFound)).toHaveLength(1)
  // })

});









