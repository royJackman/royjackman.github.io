import React from 'react';
import {Container, Col, Row, Image} from 'react-bootstrap';
import ResumeItem from './ResumeItem';
import ResumeList, {CHRON} from './ResumeList';

function Resume() {
    return (
        <Container>
            <Row>
                <Col />
                <Col md={13}>
                    {new ResumeList(CHRON)}
                </Col>
                <Col />
            </Row>
        </Container>
    )
}

export default Resume;