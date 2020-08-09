import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './ui.css';
import logo from '../../svg/crow.svg';

const Header = () => {
    return (
        <div>
            <Container fluid className="primary-color">
                <Row>
                    <Col sm={1}>
                        <a href="/"><img src={logo} alt="logo"/></a>
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

export default Header;