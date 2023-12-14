// import logo from './logo.svg';
// eslint-disable-next-line

import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./compo/Home";
import Mypage from "./compo/Mypage";
import Order from "./compo/Order";
import './App.css';
import {Navbar, Container, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">   
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand as={Link} to="/">Bagelly</Navbar.Brand>
            <Nav className="me-auto">
              {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
              <Nav.Link as={Link} to="/mypage">Mypage</Nav.Link>
              <Nav.Link as={Link} to="/order">Order</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
