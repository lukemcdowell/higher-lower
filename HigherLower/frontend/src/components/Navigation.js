import React from 'react';
import { NavDropdown, Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar collapseOnSelect fixed="top" expand="sm" bg="light">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">

                <Nav.Link href="/">Play</Nav.Link>
                <Nav.Link href="/rules">Rules</Nav.Link>
                <NavDropdown title="Account" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="signup">Sign Up</NavDropdown.Item>
                  <NavDropdown.Item href="signin">Sign In</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="stats">Stats</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation