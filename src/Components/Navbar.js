import React from "react";
import { Nav, NavDropdown, Navbar, Container} from "react-bootstrap"

export default function NavbarModule() {
    return (
    <Navbar bg = "dark" variant="dark" expand = "lg">
        <Container>
            <Navbar.Brand href="/">
                <img
                alt=""
                src={require("../Assets/resized.jpg")}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />
                <span>&nbsp;&nbsp;</span>Port.folio
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Modules" id="basic-nav-dropdown">
                    <NavDropdown.Item href="bounce">Bounce (CSE2110: Procedural Programming 1)</NavDropdown.Item>
                    <NavDropdown.Item href="datastructures">Heaps, Lists, Stacks, and Queues (CSE2120: Data Structures 1)</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="code">Source Code</Nav.Link>
                <Nav.Link href="about">About</Nav.Link>
            </Nav>            
        </Container>
    </Navbar>
    )
}