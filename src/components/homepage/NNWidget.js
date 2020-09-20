import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

class NNWidget extends React.Component {
    constructor(props) {super(props)}

    render () {
        return (
            <Container>
                <Col>
                    <Row style={{minHeight: '30vh' }} xs={1} md={2}>
                        <Col>
                            NNGraph
                        </Col>
                        <Col>
                            Data
                        </Col>
                    </Row>
                </Col>
            </Container>
        )
    }
}

export default NNWidget