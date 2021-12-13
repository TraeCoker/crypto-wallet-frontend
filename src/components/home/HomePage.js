import Logo from '../../images/logo.png'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import { NavBar } from '../navigation/NavBar';
import './HomePage.css'


export const HomePage = () => {
    return (
        <>
        <div className="homepage">
       
            <Container className="p-3">
            
            <img src={Logo} />
            <ButtonToolbar className="custom-btn-toolbar">
            <LinkContainer to="/login">
              <Button>Login</Button>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Button>Signup</Button>
            </LinkContainer>
          </ButtonToolbar>
          </Container>
        </div>
        </>
    )
}
