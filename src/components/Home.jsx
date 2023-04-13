import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Header from "./Header";

export default function Home() {
  const options = {
    strings: [
      "<h4>I'm a<span className='secondtxt' id='f'> Web Developer.</span></h4>",
    ],
    autoStart: true,
    loop: true,
  };
  return (
    <>
      <Container fluid className="home">
        <Header />
        <Row>
          <Col lg={1}>
            <div className="social">
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
          </Col>
          <Col>
            <div className="contents">
              <h1>
                <span className="firsttxt">Pradeep</span> Swami
              </h1>

              <Typewriter options={options} />
            </div>
          </Col>
          <Col lg={1}>
            <div className="social2">
              <i class="fa-solid fa-envelope"></i>
              <i class="fa-solid fa-phone"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
