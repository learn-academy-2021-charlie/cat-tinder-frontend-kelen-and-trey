import {render, screen} from '@testing-library/react'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'
import React from 'react' 
// Imports Enzyme testing and deconstructs Shallow into our test file. 
import Enzyme, { shallow } from 'enzyme' 
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16' 
 // Imports in the component we are going to be testing.  
import App from './App';
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import { MemoryRouter } from "react-router-dom"
Enzyme.configure({ adapter: new Adapter() })





describe('app does the rendering', () => {
  // it('renders header', () => { 
  //   const renderedApp = shallow(<App/>)
  //   // console.log(renderedApp.find('Header').debug())
  //   const renderedHeader = renderedApp.find('Header')
  //   expect(renderedApp.find('Header').length).toEqual(1);  
  // })
  // no work
  it('it provides a route/ to the home component', () => { 
    const renderedApp = shallow(<App/>)
    // console.log(renderedApp.find('Header').debug())
    const renderedHomeRoute = renderedApp.find('[path="/"]')
    console.log(renderedHomeRoute.props())
    expect(renderedHomeRoute.props().component).toEqual(Home);  
  })
  it('it provides a route/catindex to the CatIndex component', () => { 
    const renderedApp = shallow(<App/>)
    const renderedCatIndexRoute = renderedApp.find('[path="/catindex"]')
    expect(renderedCatIndexRoute.props().component).toEqual(CatIndex);  
  })
  it('it provides a route/catshow/:id to the CatShow component', () => { 
    const renderedApp = shallow(<App/>)
    // console.log(renderedApp.find('Header').debug())
    const renderedCatShowRoute = renderedApp.find('[path="/catshow/:id"]')
    expect(renderedCatShowRoute.props().component).toEqual(CatShow);  
  })
  it('it provides a route/catnew to the CatNew component', () => { 
    const renderedApp = shallow(<App/>)
    const renderedCatNewRoute = renderedApp.find('[path="/catnew"]')
    expect(renderedCatNewRoute.props().component).toEqual(CatNew);  
  })
  it('it provides a route/catedit/:id to the CatEdit component', () => { 
    const renderedApp = shallow(<App/>)
    const renderedCatEditRoute = renderedApp.find('[path="/catedit/:id"]')
    expect(renderedCatEditRoute.props().component).toEqual(CatEdit);  
  })
  it('it provides a route/notfound to the NotFound component', () => { 
    const history = createMemoryHistory()
    history.push("some jibberish")
    render(
      <Router history={history}>
        <App/>
      </Router>
    )
    expect(screen.getByText(/404/i)).toBeInTheDocument();  
  })
  
});









// describe('Renders header and footer', () => {
//   it('renders header', () => { 
//     const renderedApp = shallow(<App/>)
//     // console.log(renderedApp.find('Header').debug())
//     const renderedHeader = renderedApp.find('Header')

//     expect(renderedApp.find('Header').length).toEqual(1);  
//   })

// });