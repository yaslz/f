import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../JS/Actions/user";

const NavBar = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Elly-agency</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/team">Team </Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            {isAuth ? <Nav.Link href="/profile">Profile</Nav.Link> : null}
          </Nav>
          {isAuth ? (
            <Link to="/">
              <Button
                variant="info"
                className="logout"
                onClick={() => dispatch(logout())}
              >
                Logout
              </Button>{" "}
            </Link>
          ) : (
            <div className="login">
              <Link to="/login">
                <Button variant="success">Login</Button>{" "}
              </Link>
              <Link to="/register">
                <Button variant="success">Register</Button>{" "}
              </Link>
            </div>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
