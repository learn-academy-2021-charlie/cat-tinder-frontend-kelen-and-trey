import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext'
import { Button, Form, Label, Input, FormGroup } from 'reactstrap'
import { Redirect } from 'react-router-dom'

const CatEdit = ({classes, match}) => {
  const appContext = useContext(AppContext)
  var cat = {}, catIndex
  if(appContext){
    cat = appContext.state.cats.find(cat => cat.id === +match.params.id)
    catIndex = appContext.state.cats.findIndex(cat => cat.id === +match.params.id)
  }
  const [editedCat, setEditedCat] = useState(cat)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    let form = editedCat
    form[e.target.name] = e.target.value
    setEditedCat(form)
  }

  const submitEdit = () => {
    appContext.handleNewCat(editedCat, catIndex)
    setSubmitted(true)
  }

  return(
    <>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input name="name" id="nameNew" defaultValue={editedCat.name} data-testid='name-input' onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input type="number" name="age" defaultValue={editedCat.age} data-testid='age-input' id="ageNew" onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input name="enjoys" id="enjoysNew" defaultValue={editedCat.enjoys} data-testid='enjoys-input' onChange={handleChange}/>
        </FormGroup>
        <Button onClick={submitEdit} data-testid='submit-button'>Submit</Button>
      </Form>
      {submitted && <Redirect to="/catindex"/>}
    </>
  )
}

export default CatEdit
