import React from 'react';
import { Navbar, Nav, NavItem, Button } from "react-bootstrap";
import  { useAuth0 } from "@auth0/auth0-react";

function Navigation() {

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();


  return (
    <Navbar className="sticky-nav" collapseOnSelect fixed="top" expand="sm" bg="light">
      
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
                <Nav.Link href="/">Play</Nav.Link>
                <Nav.Link href="/stats">Stats</Nav.Link>

                {!isAuthenticated && (
                  <NavItem>
                    <Button
                      variant="secondary"
                      onClick={() => loginWithRedirect()}
                    >
                      Log in
                    </Button>
                  </NavItem>
                )}
                {isAuthenticated && (
                  <NavItem>
                    <Button
                      variant="secondary"
                      onClick={() => logout()}
                    >
                      Log out
                    </Button>
                  </NavItem>
                )}

            </Nav>
            </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation