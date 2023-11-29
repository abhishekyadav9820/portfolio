import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"
import Logo from "../assets/logo.png";

const Navbar1 = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container> 
          <Navbar.Brand href="#home">
            <img src={Logo} alt="Company Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="d-flex justify-content-center"
          >
            <Nav>
              <Link className="navLink" to="/">
                Home
              </Link>
              <Link className="navLink" to="/AboutUs">
                About Me
              </Link>
              <Link className="navLink" to="">
                Skills
              </Link>
               <Link className="navLink" to="">
                Education       
              </Link>

              <Link className="navLink" to="">
                Work
              </Link>
              
              <Link className="navLink" to="">
                Experience
              </Link>
              <Link className="navLink" to="/conact_us">
                Contact Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
