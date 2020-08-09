import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';

const Footer = () => {
    return (
        <footer>
            <Container fluid className="primary-color">
                <Row>
                    <Col sm={8}>
                        <h5 className="title">Footer Content</h5>
                        <p>This is a very important paragraph full of things and stuff</p>
                    </Col>
                    <Col sm={4}>
                        <h5 className="title">Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="http://github.com/royJackman"><FaGithub /> Github</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="https://www.linkedin.com/in/roy-jackman/"><FaLinkedin /> LinkedIn</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="mailto:jackman.roy@gmail.com"><GrMail /> Email</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="primary-color">
                &copy; {new Date().getFullYear()} Copyright Roy Jackman. All Rights Reserved
            </Container>
        </footer>
    )
}

export default Footer;