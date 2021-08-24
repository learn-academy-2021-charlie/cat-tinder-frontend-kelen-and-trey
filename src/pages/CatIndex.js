import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component{
  render(){
    const { cats } = this.props
    return(
      <>
        <h2>CatIndex component</h2>
        {cats && cats.map(cat => {
          return(
            <div key={cat.id}>
              <NavLink to={`/catShow/${cat.id}`}>Show {cat.name}'s details</NavLink>
              <h2>{cat.name} is {cat.age} years old.</h2>
              <h3>Enjoys {cat.enjoys}.</h3>
            </div>
          )
        }) }
      </>
    )
  }
}

export default CatIndex
