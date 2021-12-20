import { useState }from 'react';
import Logo from '../../images/nav.png'
import { Form, Button} from 'react-bootstrap';
import './auth.css';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser} from '../../redux/actions/userActions';
import { Navigate, Link } from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const errors = useSelector(state => state.user.errors)

  if (isLoggedIn) {
    return <Navigate from="/signup" to="/wallet" />
  }

  function handleSubmit(e){
    e.preventDefault();
    const user = {
     user:{ 
      email: email,
      password: password,
     }
      };
  

    dispatch(loginUser(user))
  }

  return(
    <div className="login-wrapper">
    <div className="login-form">
    <Link to="/"><img src={Logo} className="logo-link"/></Link>
    <h1>Please Log In</h1>
    <p>{errors ? errors : null}</p>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" 
                  value={email} onChange={e => setEmail(e.target.value)}/>
    </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
                  value={password} onChange={e => setPassword(e.target.value)}
    />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
<br />
<p>New to CryptoXchange? <Link to="/signup">create an account</Link></p>
</div>
    </div>
  )
}