import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import './ui.css'
import logo from '../../svg/crow.svg'

const Header = () => {
  return (
    <div>
      <Container fluid className="header primary-color">
        <Row>
          <Col sm={1}>
            <a href="/"><Image src={logo} alt="logo" height="75"/></a>
          </Col>
          <Col className="vertically-center-contents align-left">
            <a href="/" className="unstyled-link"><h1>Roy Jackman</h1></a>
          </Col>
          <Col />
          <Col md="auto" className="center-text">
            <Button block href="/" variant="outline-dark">Home</Button>
          </Col>
          <Col md="auto" className="center-text">
            <Button block href="/resume" variant="outline-dark">Resume</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header
