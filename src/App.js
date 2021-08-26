import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Home from './pages/Home.js'
import CatIndex from './pages/CatIndex.js'
import CatShow from './pages/CatShow.js'
import CatNew from './pages/CatNew.js'
import CatEdit from './pages/CatEdit.js'
import NotFound from './pages/NotFound.js'
import cats from './mockCats'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import AppContext from './context/AppContext'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      cats,
    }
  }

  handleSubmit = newCat => {
    this.setState({
      cats: [...this.state.cats, newCat]
    })
  }

  render(){
    return (
      <>
        <Router>
          <AppContext.Provider value={this.state}>
            <Header/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/catindex' component={CatIndex}/>
              {/* <Route path='/catshow/:id' render={(props) => { */}
              {/*   if(props){ */}
              {/*     let id = props.match.params.id */}
              {/*     let cat = cats.find(cat => cat.id === +id) */}
              {/*     return( */}
              {/*       <CatShow cat={cat}/> */}
              {/*     ) */}
              {/*   } else { */}
              {/*     return <NotFound />} */}
              {/* }}/> */}
              <Route path='/catshow/:id' component={CatShow}/>
              <Route path='/catnew' render={() => {
                return(
                  <CatNew handleSubmit={this.handleSubmit}/>
                )
              }}/>
              <Route path='/catedit/:id' component={CatEdit}/>
              <Route component={NotFound}/>
            </Switch>
            <Footer/>
          </AppContext.Provider>
        </Router>
      </>
    )
  }
}

export default App;
