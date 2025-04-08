import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

import Dark from '../public/Dark.jpg'
function Welcome() {

    
    return <>
        <Navbar expand="lg" bg="dark" variant="dark" className="static-top">
            <Container>
                <Navbar.Brand href="/">
                <i class="bi bi-house-door-fill"></i>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="ms-auto">
                        <Nav.Link href="/register" className="active">Register</Nav.Link>
                        <Nav.Link href="/login" className='active'>Login</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="navbarDropdown" align="end">
                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        {/* Page Content */}
        <Container className="mt-4" id='container'>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                            <img src={Dark} alt="" className="d-block w-100"/>
                    </div>
                </div>
            </div>
        </Container>
    </>
}

export default Welcome
