import React, { Component } from 'react'
import { Button, Form, Label, Input, FormGroup } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatNew extends Component{
  constructor(props){
    super(props)
    this.state = {
      cat: {
        name: '',
        age: '',
        enjoys: ''
      },
      submitted: false,
    }
  }

  handleChange = e => {
    let form = this.state.cat
    form[e.target.name] = e.target.value
    this.setState({cat: form})
  }

  handleSubmit = () => {
    this.props.handleSubmit(this.state.cat)
    this.setState({submitted:true})
  }

  render(){
    return(
      <>
        <h2>CatNew Form Component</h2>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input name="name" id="nameNew" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input type="number" name="age" id="ageNew" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input name="enjoys" id="enjoysNew" onChange={this.handleChange}/>
          </FormGroup>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
        {this.state.submitted && <Redirect to="/catindex"/>}
      </>
    )
  }
}

export default CatNew
