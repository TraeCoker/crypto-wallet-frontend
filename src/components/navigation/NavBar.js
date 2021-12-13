import { Nav, NavDropdown, Navbar, Container, Alert } from "react-bootstrap";
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">CryptoXchange</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/market">Market</Nav.Link>
                <Nav.Link as={Link} to="/wallet">Wallet</Nav.Link>
                <Nav.Link as={Link} to="/">Logout</Nav.Link>
                </Nav>
    </Container>
  </Navbar>
    )
}
