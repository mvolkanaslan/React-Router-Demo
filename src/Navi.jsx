import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Navi extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Router Demo</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='link' to="/home">Home</Link>
            <Link className='link' to="/about">About</Link>
            <Link className='link' to="/contact">Contact</Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}
