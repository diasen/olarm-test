import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Logo from "../img/alarm-logo.png";

function Heading() {
  return (
    <Container fluid className="heading">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" fill>
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Features</Nav.Link>
              <Nav.Link href="#pricing">Plans</Nav.Link>
              <Nav.Link href="#pricing">Meet Olarm</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>Sign up</Nav.Link>
              <Nav.Link className="active signIn">Sign in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="headers">
        <Row>
          <Col>
            <h1>
              World's <span>Smartest</span> Home Security
            </h1>
            <p>
              Unique security experiences with more than 300,000 clients, Simple
              Installation, Convenience & Free Monitoring
            </p>
            <Button variant="primary">Visit shop</Button>{" "}
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <div className="some-icons">
              <i class="fab fa-google"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-facebook-f"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Heading;
