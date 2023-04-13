import React from 'react'
import { Container } from "react-bootstrap";
import { Row, Col, Form } from "react-bootstrap";
import Header from "./Header";

function Blog() {
  return (
<Container fluid className="about">
      <Header />
      <Row>
        <Col>
          <div className="contents">
            <h1>
              <span className="firsttxt">Blog</span>
            </h1>
            <p>
              <span className="stxt">my latest </span> blogs
            </p>
          </div>
        </Col>
      </Row>
</Container>
    )
}

export default Blog