import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import NNWidget from './NNWidget';

function Homepage() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <NNWidget />
                </Col>
            </Row>
        </Container>
    )
}

export default Homepage;