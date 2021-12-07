import { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">City Explorer</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="public/index.html">Home</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Header