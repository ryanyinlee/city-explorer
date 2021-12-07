import { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
        <div>
        <Navbar fixed="bottom" bg="primary" variant="dark">
        <Container>
        <Navbar.Brand>Go find and do the thing with the people and food and whatnot.</Navbar.Brand>
        </Container>
        </Navbar>
        </div>
        )
    }
}

export default Footer