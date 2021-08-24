import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component{
  render(){
    return(
      <>
        <Container>
          <Row>
            <Col>
              <NavLink to='/'>
                <Button color='info' >
                  Home
                </Button>
              </NavLink>
            </Col>
            <Col>
              <NavLink to='/catindex'>
                <Button color='info' >
                  Index
                </Button>
              </NavLink>
            </Col>
            <Col>
              <NavLink to='/catnew'>
                <Button color='info' >
                  Add a New Cat
                </Button>
              </NavLink>
            </Col>
          </Row>
        </Container>
      </>
    )
  }

}

export default Header
