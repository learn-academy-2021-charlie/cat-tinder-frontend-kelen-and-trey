import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'

class Header extends Component{
  render(){
    return(
      <>
        <Container>
          <Row>
            <Col>
              <Button color='info' onClick={() => this.props.history.push('/')}>
                Home
              </Button>
            </Col>
            <Col>
              <Button color='info' onClick={() => this.props.history.push('/catindex')}>
                Index
              </Button>
            </Col>
            <Col>
              <Button color='info' onClick={() => this.props.history.push('/catnew')}>
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
