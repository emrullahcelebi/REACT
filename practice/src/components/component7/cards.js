import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import StudentCard from './studentCard'
import data from "./Students.json"
const Cards = () => {
  return (
    <Container>
        <Row>
            {
                data.map((student,index)=>(<Col md={3} key="index">
                    <StudentCard student={student}/>
                </Col>))
            }
        </Row>
    </Container>
  )
}

export default Cards