import React from 'react';
import { useSpring, animated} from 'react-spring';
import {Container, Col, Row} from 'react-bootstrap';

const calc = (x, y, title) => {
    const card = document.getElementById(title);
    return [-(y - card.offsetHeight) / 20, (x - card.offsetWidth) / 40, 1.1];
} 
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function resumeItem(title, description, startDate, endDate, logo) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [props, set] = useSpring(() => ({ xys: [0,0,1], config: { mass: 5, tension: 350, friction: 40} }));
    console.log(this);
    return (
        <li className="list-unstyled">
            <animated.div 
                id={title}
                className="card"
                onMouseMove={({clientX: x, clientY: y}) => set({ xys: calc(x, y, title)})}
                onMouseLeave={() => set({ xys: [0,0,1]})}
                style={{
                    backgroundColor: '#f8e297',
                    transform: props.xys.interpolate(trans)
                }}>
                    <Container>
                        <Row xs>
                            <Col md={2}>{logo}</Col>
                            <Col md="auto"><h3 className="title">{title}</h3></Col>
                            <Col />
                            <Col md="auto"><h5>
                                {new Intl.DateTimeFormat("en-GB", {
                                    year: "numeric",
                                    month: "long"
                                }).format(startDate)} - 
                                {new Intl.DateTimeFormat("en-GB", {
                                    year: "numeric",
                                    month: "long"
                                }).format(endDate)}
                            </h5></Col>
                        </Row>
                        <br/>
                        <Row md="auto">
                            <Col><p>{description}</p></Col>
                        </Row>
                    </Container>
            </animated.div>
        </li>
    )
}

export default resumeItem;