import React from 'react';
import './auth.css';

export default function Login() {
  return(
    <div className="login-wrapper">
      <form>
        <label>
            <p>Email</p>
            <input type="text" />
        </label>
        <label>
            <p>Password</p>
            <input type="password" />
        </label>
        <div>
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}