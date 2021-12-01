import React from 'react';
import './auth.css';

export default function Signup() {
  return(
    <div className="login-wrapper">
    <h1>Welcome! Create a new user!</h1>
      <form>
      <label>
            <p>Name</p>
            <input type="text" />
        </label>
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