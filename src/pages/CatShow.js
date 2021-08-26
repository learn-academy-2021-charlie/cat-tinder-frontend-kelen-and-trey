import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

const CatShow = ({classes, match}) => {
  const appContext = useContext(AppContext)
  var cat = {}
  if(appContext) cat = appContext.cats.find(cat => cat.id === +match.params.id)
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

export default CatShow
