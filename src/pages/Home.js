import React, { useContext } from 'react'
import AppContext from '../context/AppContext.js'

const Home = () => {
  const appContext = useContext(AppContext)
  return(
    <>
      <h1>Home Page</h1>
      <h3>{appContext.app}</h3>
    </>
  )
}

export default Home
