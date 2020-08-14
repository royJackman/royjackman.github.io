import React, {useState} from 'react';
import {Container, Col, Row, Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';
import ResumeList, {CHRON, EDU, WORK} from './ResumeList';
import {useSpring, animated} from 'react-spring';
import delay from 'delay';

function Resume() {
    const [order, setOrder] = useState(CHRON);
    const [props, set] = useSpring(() => ({ opacity: 1}));
    const trans = async (order) => {
        set({opacity: 0});
        await delay(300);
        setOrder(order);
        set({opacity: 1});
    };

    return (
        <Container>
            <Row>
                <Col />
                <Col md="auto">
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button onClick={() => trans(CHRON)}>Chronological</Button>
                            <Button onClick={() => trans(WORK)}>Work First</Button>
                            <Button onClick={() => trans(EDU)}>School First</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Col>
                <Col />
            </Row>
            <Row>
                <Col />
                <Col id="resume-list" md={13}>
                    <animated.div style={props}>
                        {new ResumeList(order)}
                    </animated.div>
                </Col>
                <Col />
            </Row>
        </Container>
    )
}

export default Resume;