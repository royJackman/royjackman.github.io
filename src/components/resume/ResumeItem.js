import React, {useState} from 'react';
import { useSpring, animated} from 'react-spring';
import {Container, Col, Row, Image} from 'react-bootstrap';
import './resume.css';

const calc = (x, y, title, stable=false) => {
    if(stable) { return [0,0,1.02]; }
    const card = document.getElementById(title);
    const bounds = card.getBoundingClientRect();
    return [
        -5 * (y - bounds.y - (bounds.height/2))/bounds.height, 
        5 * (x - bounds.x - (bounds.width/2))/bounds.width, 
        1.02
    ];
} 
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function ResumeItem(itemId, title, position, bullets, startDate, endDate, logo, tools, itemColor) {
    const [props, set] = useSpring(() => ({ xys: [0,0,1], config: { mass: 5, tension: 350, friction: 40} }));
    const [stable, setStable] = useState(false);
    return (
        <li className="list-unstyled padding-15">
            <animated.div 
                id={itemId}
                className="card padding-15"
                onMouseMove={({clientX: x, clientY: y}) => set({ xys: calc(x, y, itemId, stable)})}
                onMouseUp={({clientX: x, clientY: y}) => {
                    set({ xys: calc(x, y, itemId, !stable)});
                    setStable(!stable);
                }}
                onMouseLeave={() => {
                    set({ xys: [0,0,1] });
                    setStable(false);
                }}
                style={{
                    backgroundColor: itemColor,
                    transform: props.xys.interpolate(trans)
                }}>
                    <Container>
                        <Row xs>
                            <Col md={3} className="vertically-center-contents">{logo}</Col>
                            <Col fluid>
                                <Col><h3 className="title">{title}</h3></Col>
                                <Col>
                                    <Col md="auto"><h5>{position}</h5></Col>
                                    <Col md="auto"><h5>
                                        {new Intl.DateTimeFormat("en-GB", {
                                            year: "numeric",
                                            month: "short"
                                        }).format(startDate)} - 
                                        {new Intl.DateTimeFormat("en-GB", {
                                            year: "numeric",
                                            month: "short"
                                        }).format(endDate)}
                                    </h5></Col>
                                </Col>
                            </Col>
                        </Row>
                        <br/>
                        <Row md="auto">
                            <Col><ul>{bullets.map((b) => <li>{b}</li>)}</ul></Col>
                        </Row>
                        <Row fluid>
                            <Col />
                            <Row md="auto" className="padding-15">
                            {tools.map((t) => <div style={{padding: '10px'}}><Image src={t} height="50"/></div>)}
                            </Row>
                            <Col />
                        </Row>
                    </Container>
            </animated.div>
        </li>
    )
}

export default ResumeItem;
