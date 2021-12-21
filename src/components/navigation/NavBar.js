import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Logo from '../../images/nav.png'

export const NavBar = () => {
    return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"> 
        <img
          alt="Logo"
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}CryptoXchange</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/market">Market</Nav.Link>
                <Nav.Link as={Link} to="/wallet">Wallet</Nav.Link>
                <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                </Nav>
    </Container>
  </Navbar>
    )
}
