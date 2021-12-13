import Logo from '../../images/logo4.png'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import { NavBar } from '../navigation/NavBar';
import './HomePage.css'
import { ButtonGroup } from 'react-bootstrap';


export const HomePage = () => {
    return (
        <>
        <div className="homepage">
       
            <Container className="p-3">
            
            <img src={Logo} />
            <div className="button-bar">
            <ButtonToolbar className="custom-btn-toolbar">
            <ButtonGroup size="lg" className="mb-2">
            <LinkContainer to="/login">
              <Button>Login</Button>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Button>Signup</Button>
            </LinkContainer>
            </ButtonGroup>
          </ButtonToolbar>
          </div>
          </Container>
        </div>
        </>
    )
}
