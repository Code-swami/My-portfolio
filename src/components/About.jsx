import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Row, Col, Form } from "react-bootstrap";
import Header from "./Header";
import TextShpere from "./TextSphere";
import Timeline from "./Timeline";
import ht5 from "../components/images/5847f5c3cef1014c0b5e489d.png";
import bootstrapicon from "../components/images/bootstrap.png";
import cssicon from "../components/images/css-icon.png";
import giticon from "../components/images/git-icon.png";
import githubicon from "../components/images/github.png";
import reacticon from "../components/images/react.png";
import telneticon from "../components/images/MicrosoftTeams-image (12).png";
import javascripticon from "../components/images/javascript.png";
import visualsticon from "../components/images/visual-studio-code-icon.png";
import sassicon from "../components/images/sass-icon.png";

function About() {
  return (
    <Container fluid className="about">
      <Header />
      <Row>
        <Col>
          <div className="contents">
            <h1>
              <span className="firsttxt">About</span> Me
            </h1>
            <p className="stxt1">
              <span className="stxt">get to know</span> Me
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <div className="content2">
            <h2>
              I'm a creative<span className="firsttxt2"> Web Developer</span>{" "}
              based in jaipur,India
            </h2>
            <p className="stxt2">
              <span>
                With 2 years of experience as a professional Web developer, I
                have acquired the skills and knowledge necessary to make your
                project a success. I enjoy every step while working.
              </span>
            </p>
            <button className="btn">Download CV</button>
          </div>
        </Col>

        <Col lg={5}>
          <div className="content3">
            <TextShpere />
          </div>
        </Col>
      </Row>
      
      {/* timeline container */}
      <Row className="timeline">
        <Col>
          <div className="timelinecol">
           <Timeline />
          </div>
        </Col>
      </Row>
    
      {/* skills container */}
      <Row className="skills">
          <h3 className="skilltxt">What i <span className="sectxt2"> do </span></h3>
          {/* left column for skills */}
          <Col lg={2} className="lskill">
            <h3 className="skillstxt">Skills</h3>
          </Col>

          {/* Right column for skills */}
          <Col lg={10} className="rskill">
            <Row className="data">
              <Col className="skillcol" lg={2}>
                  <img src={ht5} alt="html5" className="skillimage" />
              </Col>
              <Col className="skillcol" lg={2}>
                <img src={cssicon} alt="css" className="skillimage" />
              </Col>
              <Col className="skillcol" lg={2}>
                <img src={bootstrapicon} alt="bootstrap" className="skillimage" />
              </Col>
              <Col className="skillcol" lg={2}>
                <img src={reacticon} alt="react" className="skillimage" />
              </Col>
              <Col className="skillcol" lg={2}>
                <img src={giticon} alt="git"  className="skillimage"/>
              </Col>
              <Col className="skillcol" lg={2}>
                <img src={githubicon} alt="github" className="skillimage" />
              </Col>
              <Col className="skillcol" lg={2}>
                <img src={telneticon} alt="telnet" className="skillimage" />
              </Col>
              <Col className="skillcol" lg={2}>
                <img src={javascripticon} alt="javascript" className="skillimage" />
              </Col>
              <Col className="skillcol" lg={2}>
                <img src={visualsticon} alt="visualstudio" className="skillimage" />
              </Col>
              <Col className="skillcol" lg={2}>
                <img src={sassicon} alt="sass"  className="skillimage"/>
              </Col>
            </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
