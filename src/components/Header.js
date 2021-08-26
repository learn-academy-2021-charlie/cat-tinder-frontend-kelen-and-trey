import React, { Component } from 'react'
import { Button, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import {  Container } from '@material-ui/core'

const useStyles = theme => ({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#5bc2eb',
  }
})
class Header extends Component{
  render(){
    const { classes } = this.props
    return(
      <>
        <Container data-testid='header-container' className={classes.headerContainer}>
          <Row>
            <Col>
              <NavLink to='/'>
                <Button color='info' data-testid='navbutton'>
                  Home
                </Button>
              </NavLink>
            </Col>
            <Col>
              <NavLink to='/catindex'>
                <Button color='info' data-testid='navbutton'>
                  Index
                </Button>
              </NavLink>
            </Col>
            <Col>
              <NavLink to='/catnew'>
                <Button color='info' data-testid='navbutton'>
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

export default withStyles(useStyles)(Header)
