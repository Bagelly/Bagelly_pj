// import {Navbar, Container, Nav} from "react-bootstrap";
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Mynav = () => {
    return (
      <>
        <br />
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#">Bagelly</Nav.Link>
              <Nav.Link href="#mypage">MyPage</Nav.Link>
              <Nav.Link href="#order">Order</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default Mynav;