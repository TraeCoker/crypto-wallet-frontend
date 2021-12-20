import { useState }from 'react';
import { Form, Button} from 'react-bootstrap';
import './auth.css';
import { useSelector, useDispatch } from 'react-redux';
import { createUser } from '../../redux/actions/userActions';
import { Navigate, Link } from 'react-router-dom';


export default function Signup() {
  const [name, setName] = useState("");
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
      name: name, 
      email: email,
      password: password,
     }
      };
  

    dispatch(createUser(user));
  }

  return(
    <div className="login-wrapper">
      <div className="login-form">
        <h1>Welcome! Create a new user</h1>
        <p className="error">{errors ? errors : null}</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" 
                  value={name} onChange={e => setName(e.target.value)}/>
          </Form.Group>
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
          <Button variant="primary" type="submit">Submit</Button>
          </Form>
          <br/>
          <p>Already a CryptoXchange member?</p> 
          <p><Link to="/login">Sign in </Link></p>
        </div>
    </div>
  )
}