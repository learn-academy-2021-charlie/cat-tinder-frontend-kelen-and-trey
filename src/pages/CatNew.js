import React, { useState } from 'react'
import { Button, Form, Label, Input, FormGroup } from 'reactstrap'
import { Redirect } from 'react-router-dom'

const CatNew = props => {
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
    props.handleSubmit(cat)
    setSubmitted(true)
  }

  return(
    <>
      <h2>CatNew Form Component</h2>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input name="name" id="nameNew" onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input type="number" name="age" id="ageNew" onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input name="enjoys" id="enjoysNew" onChange={handleChange}/>
        </FormGroup>
        <Button onClick={submitCat}>Submit</Button>
      </Form>
      {submitted && <Redirect to="/catindex"/>}
    </>
  )
}

export default CatNew
