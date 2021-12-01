import { useState }from 'react';
import './auth.css';

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return(
    <div className="login-wrapper">
    <h1>Welcome! Create a new user!</h1>
      <form>
      <label>
            <p>Name</p>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        </label>
        <label>
            <p>Email</p>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
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