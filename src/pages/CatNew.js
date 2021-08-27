import React, { useState, useContext } from 'react'
import { Button, Form, Label, Input, FormGroup } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import AppContext from '../context/AppContext'

const CatNew = props => {
  const appContext = useContext(AppContext)
  const [cat, setCat] = useState({
    name: '',
    age: '',
    enjoys: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    let form = cat
    form[e.target.name] = e.target.value
    setCat(form)
  }

  const submitCat = () => {
    appContext.handleNewCat(cat)
    setSubmitted(true)
  }

  return(
    <>
      <h2>CatNew Form Component</h2>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input name="name" id="nameNew" data-testid='name-input' onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input type="number" name="age" data-testid='age-input' id="ageNew" onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input name="enjoys" id="enjoysNew" data-testid='enjoys-input' onChange={handleChange}/>
        </FormGroup>
        <Button onClick={submitCat} data-testid='submit-button'>Submit</Button>
      </Form>
      {submitted && <Redirect to="/catindex"/>}
    </>
  )
}

export default CatNew
