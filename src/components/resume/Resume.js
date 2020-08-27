import React, { useState } from 'react'
import { Container, Col, Row, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap'
import ResumeList, { CHRON, EDU, WORK } from './ResumeList'
import { useSpring, animated } from 'react-spring'
import delay from 'delay'

function Resume () {
  const [order, setOrder] = useState(CHRON)
  const [props, set] = useSpring(() => ({ opacity: 1 }))
  const trans = async (order) => {
    set({ opacity: 0 })
    await delay(300)
    setOrder(order)
    set({ opacity: 1 })
  }

  return (
    <Container>
      <Row>
        <Col md="auto" className="center-column">
          <ButtonToolbar>
            <ButtonGroup>
              <Button onClick={() => trans(CHRON)}>Chronological</Button>
              <Button onClick={() => trans(WORK)}>Work First</Button>
              <Button onClick={() => trans(EDU)}>School First</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Col>
      </Row>
      <Row>
        <Col id="resume-list" md={13} className="center-column">
          <animated.div style={props}>
            {new ResumeList(order)}
          </animated.div>
        </Col>
      </Row>
    </Container>
  )
}

export default Resume
