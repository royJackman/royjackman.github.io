import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';
import './ui.css';

const Footer = () => {
    return (
        <div className="footer">
            <Container fluid className="primary-color white-text">
                <Row>
                    <Col />
                    <Col md={5}>
                        <h5 className="title">The Riddle Section</h5>
                        <p className="justified">If a crab and a half weigh a pound and a half, and the half crab weighs as much again as the whole crab, how much does half the whole crab and the whole of the half crab weigh?</p>
                    </Col>
                    <Col md="auto">
                        <h5 className="title">Links</h5>
                        <ul>
                            <li className="list-unstyled"><a href="http://github.com/royJackman"><FaGithub /> Github</a></li>
                            <li className="list-unstyled"><a href="https://www.linkedin.com/in/roy-jackman/"><FaLinkedin /> LinkedIn</a></li>
                            <li className="list-unstyled"><a href="mailto:jackman.roy@gmail.com"><GrMail /> Email</a></li>
                        </ul>
                    </Col>
                    <Col />
                </Row>
                <Row>
                    <Col />
                    <Col md="auto">&copy; {new Date().getFullYear()} Copyright Roy Jackman. All Rights Reserved</Col>
                    <Col />
                </Row>
            </Container>
        </div>
    )
}

export default Footer;