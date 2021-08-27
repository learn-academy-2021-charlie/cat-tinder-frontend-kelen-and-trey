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
import { getContrastRatio } from '@material-ui/core';


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      cats: [],
    }
  }

  handleSubmit = newCat => {
    this.setState({
      cats: [...this.state.cats, newCat]
    })
  }

  handleNewCat = (newCat) => {
    fetch("http://localhost:3000/cats", {
      body:JSON.stringify(newCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if (response.status === 422){
        alert("Warning Invalid Parameter for Cat")
      }
      return response.json();
    })
    .then(data => {
      this.getCats()
    })
    .catch(err => {console.log(err)});
  }

  getCats = () => {
    fetch("http://localhost:3000/cats")
    .then(response => {
      return response.json()
    }) 
    .then(data => {
      this.setState({cats:data})
    })
    .catch(error => {
      console.log("index errors: ", error)
    })
  }
  
  componentDidMount(){
    this.getCats()
  }

  render(){
    const contextValue = {state: this.state, handleSubmit: this.handleSubmit, handleNewCat: this.handleNewCat}
    return (
      <>
        <Router>
          <AppContext.Provider value={contextValue}>
            <Header/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/catindex' component={CatIndex}/>
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
