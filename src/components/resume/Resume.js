import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';

import crow from '../../svg/crow.svg';
import resumeItem from './resumeItem';

function Resume() {
    return (
        <Container>
            <Row>
                <Col />
                <Col md={8}>
                    <ul>
                        {new resumeItem(
                            "banan", 
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium orci nulla, ut dictum mi vulputate sed. Suspendisse potenti. Aenean at erat vitae magna facilisis efficitur. Phasellus maximus accumsan lorem, malesuada elementum nisl fermentum semper. Etiam sed consectetur nibh. Proin commodo commodo auctor. Sed in nibh finibus, interdum nisl vitae, lobortis metus. Sed congue imperdiet quam, quis tempor diam fermentum a. Vestibulum elementum lacus eget molestie lacinia. Nam ac dui sit amet magna varius convallis. Vivamus eu libero quis lectus rutrum maximus ut non eros. Nullam porta arcu ac mattis euismod. Nulla imperdiet neque in libero aliquam, sit amet pellentesque purus malesuada. Morbi in blandit libero. Vestibulum pellentesque leo at leo sodales laoreet.\n\nSed nisi metus, molestie nec condimentum a, pellentesque tincidunt nunc. Donec vitae purus vestibulum, bibendum libero blandit, facilisis augue. Maecenas ac ante vitae lacus aliquet tempus. Nam scelerisque libero eu massa blandit finibus. In efficitur fringilla purus vel porttitor. Phasellus libero ex, maximus vel arcu quis, egestas sagittis eros. Aenean elementum, sem quis molestie rhoncus, tellus tortor commodo nisi, non condimentum augue urna eu nunc. Morbi sodales magna quis nunc feugiat, a consequat ex pretium.", 
                            new Date(2020, 4), 
                            new Date(2020, 6),
                            <img src={crow} alt="Applause logo"/>
                        )}
                    </ul>
                </Col>
                <Col />
            </Row>
        </Container>
    )
}

export default Resume;