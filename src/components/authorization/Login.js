import { useState }from 'react';
import './auth.css';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser} from '../../redux/actions/userActions';
import { Navigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
 

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
  

    dispatch(loginUser(user));
  }

  return(
    <div className="login-wrapper">
    <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
            <p>Email</p>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
            <p>Password</p>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}