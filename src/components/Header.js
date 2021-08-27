import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import {  Container, Button } from '@material-ui/core'

const useStyles = theme => ({
  headerContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    
    flexDirection: 'row',
    background: 'linear-gradient(180deg, rgba(9,0,163,1) 0%, rgba(59,89,152,1) 35%, rgba(144,202,249,1) 100%)'
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
              <NavLink to='/' style={{ textDecoration: 'none' }}>
                <Button color='primary' data-testid='navbutton' variant='contained'>
                  Home
                </Button>
              </NavLink>
            </Col>
            <Col>
              <NavLink to='/catindex' style={{ textDecoration: 'none' }}>
                <Button color='primary' data-testid='navbutton' variant='contained'>
                  Index
                </Button>
              </NavLink>
            </Col>
            <Col>
              <NavLink to='/catnew' style={{ textDecoration: 'none' }}>
                <Button color='primary' data-testid='navbutton' variant='contained'>
                  NewCat
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
