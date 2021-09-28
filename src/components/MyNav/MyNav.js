import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const MyNav = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#">News Everyday</Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link href="#">Features</Nav.Link>
                        <Nav.Link href="#p">About us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default MyNav;