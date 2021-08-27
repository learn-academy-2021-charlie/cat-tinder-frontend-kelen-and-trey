import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'

const CatShow = ({history, classes, match}) => {
  const appContext = useContext(AppContext)
  var cat = {}
  if(appContext) cat = appContext.state.cats.find(cat => cat.id === +match.params.id)

  const deleteCat = () => {
    appContext.handleDeleteCat(cat.id)
    history.push('/catindex')
  }

  return(
    <>
      <h2>CatShow component</h2>
      {cat && <div key={cat.id}>
        <h2>{cat.name} is {cat.age} years old.</h2>
        <h3>Enjoys {cat.enjoys}.</h3>
        <NavLink to={`/catedit/${cat.id}`}>Edit this cat</NavLink>
        <br></br>
        <Button onClick={() => deleteCat()}>Delete this cat</Button>
      </div>
      }
    </>
  )
}

export default CatShow
