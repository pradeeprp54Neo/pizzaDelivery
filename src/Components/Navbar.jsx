import React from 'react';
import { Navbar, Container,Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { BrowserRouter,Link } from 'react-router-dom';

function Navbars() {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand style={{marginLeft:"-100px"}}href="#home"><Link to="/"><img src="https://cdn.pixabay.com/photo/2021/02/07/13/07/pizza-5991179__340.png" width="50px" height="50px"/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" style={{marginLeft:"970px"}}>
                            <Nav.Link href="#home" > <Link to="/register"><Button variant="primary">Sign Up</Button></Link></Nav.Link>
                            <Nav.Link href="#link" > <Link to="/login"><Button variant="primary">Login</Button></Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbars
