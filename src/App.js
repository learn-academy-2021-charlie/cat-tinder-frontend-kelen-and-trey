import './App.css';
import React, { Component } from 'react'
import AppContext from './context/AppContext'
import AppRouter from './components/AppRouter'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      cats: [],
    }
  }

  handleDeleteCat = id => {
    fetch(`http://localhost:3000/cats/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.getCats()
    })
    .catch(err => console.log(err))
  }

  handleNewCat = (newCat) => {
    'id' in newCat
     ? fetch(`http://localhost:3000/cats/${newCat.id}`, {
          body:JSON.stringify(newCat),
          headers: {
            "Content-Type": "application/json"
          },
          method: "PATCH"
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
         .catch(err => {console.log(err)})
     : fetch("http://localhost:3000/cats", {
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
         .catch(err => {console.log(err)})
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
    const contextValue = {
      state: this.state,
      handleDeleteCat: this.handleDeleteCat,
      handleSubmit: this.handleSubmit,
      handleNewCat: this.handleNewCat
    }

    return (
      <>
        <AppContext.Provider value={contextValue}>
          <AppRouter/>
        </AppContext.Provider>
      </>
    )
  }
}

export default App;
