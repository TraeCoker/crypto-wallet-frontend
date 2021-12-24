import Logo from '../../images/logo4.png';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import './HomePage.css';
import { ButtonGroup } from 'react-bootstrap';


export const HomePage = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const error = useSelector(state => state.coins.fetch_error);

    if (error) {
      alert("Error acquiring market data at this time. Please refresh and try again")
    };

    return (
        <>
        <div className="homepage">
            <Container className="p-3">
            <img src={Logo} alt="logo"/>
            <div className="button-bar">
            <ButtonToolbar className="custom-btn-toolbar">
            { isLoggedIn ? (
              <ButtonGroup size="lg" className="mb-2">
              <LinkContainer to="/market">
              <Button>Market</Button>
              </LinkContainer>
              <LinkContainer to="/wallet">
              <Button>Wallet</Button>
              </LinkContainer>
              </ButtonGroup>
            ) : (
              <ButtonGroup size="lg" className="mb-2">
              <LinkContainer to="/login">
              <Button>Login</Button>
              </LinkContainer>
              <LinkContainer to="/signup">
              <Button>Signup</Button>
              </LinkContainer>
             </ButtonGroup>
            )}
          </ButtonToolbar>
          </div>
          </Container>
        </div>
        </>
    );
};
