import React, { Component } from 'react'

class CatShow extends Component{
  render(){
    const { cat } = this.props
    console.log(cat)
    return(
      <>
        <h2>CatShow component</h2>
        {cat && <div key={cat.id}>
          <h2>{cat.name} is {cat.age} years old.</h2>
          <h3>Enjoys {cat.enjoys}.</h3>
        </div>
        }
      </>
    )
  }
}

export default CatShow
