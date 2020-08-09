import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './ui.css';
import logo from '../../svg/crow.svg';

const Header = () => {
    return (
        <div>
            <Container fluid className="primary-color white-text">
                <Row>
                    <Col sm={1}>
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col />
                    <Col md="auto">
                        <h3 className="title">Resume</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;