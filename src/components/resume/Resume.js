import React, {useState} from 'react';
import {Container, Col, Row, Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';
import ResumeList, {CHRON, EDU, WORK} from './ResumeList';

function Resume() {
    const [order, setOrder] = useState(CHRON);
    return (
        <Container>
            <Row>
                <Col />
                <Col md="auto">
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button onClick={() => setOrder(CHRON)}>Chronological</Button>
                            <Button onClick={() => setOrder(WORK)}>Work First</Button>
                            <Button onClick={() => setOrder(EDU)}>School First</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Col>
                <Col />
            </Row>
            <Row>
                <Col />
                <Col id="resume-list" md={13}>
                    {new ResumeList(order)}
                </Col>
                <Col />
            </Row>
        </Container>
    )
}

export default Resume;