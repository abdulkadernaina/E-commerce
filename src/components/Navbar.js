import React from "react";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const Appbar = () => {
  let history = useHistory();
  return (
    <div>
      <Navbar bg="light" verient="drak">
        <Container fluid>
          <Navbar.Brand href="#"> E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1"> Menu</Nav.Link>
              <Nav.Link href="#electronics"> Electronics</Nav.Link>
              <NavDropdown title=" Fashion" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#mens">Mens</NavDropdown.Item>
                <NavDropdown.Item href="#women">Womens</NavDropdown.Item>
                <NavDropdown.Item href="#kids">Kids</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#homeappliances">Home appliances</Nav.Link>

              <Nav.Link className="" href="./cart.js">
                <BsCart4
                  size="1.5em"
                  style={{ margin: "0rem 0em" }}
                  title="C A R T"
                />
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  history.push("/");
                }}
              >
                Log out
              </Nav.Link>
            </Nav>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Appbar;
