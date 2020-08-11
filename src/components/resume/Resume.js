import React from 'react';
import {Container, Col, Row, Image} from 'react-bootstrap';
import {DiJava, DiMysql, DiAngularSimple, DiJavascript1, DiRuby} from 'react-icons/di';
import {FaJenkins} from 'react-icons/fa';

import {Icon, InlineIcon} from '@iconify/react';
import typescriptIcon from '@iconify/icons-simple-icons/typescript';

import crow from '../../svg/crow.svg';
import resumeItem from './resumeItem';

function Resume() {
    return (
        <Container>
            <Row>
                <Col />
                <Col md={11}>
                    <ul>
                        {new resumeItem(
                            "Applause App Quality", 
                            "Full Stack Software Engineer",
                            [
                                "Developed and deployed features, patches, and migrations for multi-tier apps.",
                                "Worked on a team to plan, program, and review code deployed to thousands of users using Jenkins.",
                                "Implemented requested features in Angular, JavaScipt, TypeScript, Ruby, MySQL, and Java."
                            ], 
                            new Date(2019, 5),
                            new Date(2020, 3), 
                            <Image src="http://seekvectorlogo.com/wp-content/uploads/2019/01/applause-vector-logo.png" alt="Applause logo" fluid/>,
                            [
                                <DiJava size={50} color="#4fa9d2"/>,
                                <DiMysql size={50} color="turquoise"/>,
                                <DiAngularSimple size={50} color="red"/>,
                                <DiJavascript1 size={50} color="grey"/>,
                                <Icon icon={typescriptIcon} height="50" color="orange"/>,
                                <DiRuby size={50} color="red"/>,
                                <FaJenkins size={50}/>
                            ]
                        )}
                    </ul>
                </Col>
                <Col />
            </Row>
        </Container>
    )
}

export default Resume;