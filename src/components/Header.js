import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'

class Header extends Component{
  render(){
    return(
      <>
        <Container>
          <Row>
            <Col>
              <Button color='info' >
                Home
              </Button>
            </Col>
            <Col>
              <Button color='info' >
                Index
              </Button>
            </Col>
            <Col>
              <Button color='info' >
                Add a New Cat
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    )
  }

}

export default Header
