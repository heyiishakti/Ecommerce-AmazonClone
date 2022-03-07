import React from "react";
import './Login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const signIn = e => {
  //   e.preventDefault();
  // }

  // const register = e => {
  //   e.preventDefault();
  // }



  return <div className="login">
    <div className="signInInfo">
      <Link to='/'>
        <img className="loginLogo" src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png"
          alt="">
        </img>
      </Link>
      <div className="loginContainer">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input type="text" value={email}
            onChange={e => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password}
            onChange={e => setPassword(e.target.value)} />
          <Link to="/home"><button type="submit" className="signinButton"
          >Sign In</button></Link>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of
          Use and Privacy Notice.
        </p>
        <Link to='/register'>
          <button className="signinRegisterButton">Create Your Amazon Account</button>
        </Link>
      </div>
    </div>

  </div>;
}

export default Login;
