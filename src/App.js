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

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      cats,
    }
  }
  render(){
    return (
      <>
        <Router>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/catindex' render={() => {
              return(
              <CatIndex cats={this.state.cats}/>
              )
              }}/>
            <Route path='/catshow/:id' render={(props) => {
              let id = props.match.params.id
              let cat = cats.find(cat => cat.id === +id)
              return(
                <CatShow cat={cat}/>
              )
              }}/>
            <Route path='/catnew' component={CatNew}/>
            <Route path='/catedit/:id' component={CatEdit}/>
            <Route component={NotFound}/>
          </Switch>
          <Footer/>
        </Router>
      </>
    )
  }
}

export default App;
