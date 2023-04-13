import React from 'react'
import { Container } from "react-bootstrap";
import { Row, Col, Form } from "react-bootstrap";
import Header from "./Header";

function Contact() {
  return (
    <Container fluid className="about">
      <Header />
      <Row>
        <Col>
          <div className="contents">
            <h1>
              <span className="firsttxt">Contact</span> Me
            </h1>
            <p>
              get in<span className="stxt"> touch </span>
            </p>
          </div>
        </Col>
      </Row>
</Container>
  )
}

export default Contact