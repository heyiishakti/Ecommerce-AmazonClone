import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return <div className='register'>
        <div className='registerInfo'>
            <Link to='/'>
                <img className="registerLogo" src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png"
                    alt="">
                </img>
            </Link>
            <div className="registerContainer">
                <h1>Register</h1>
                <form className='form'>
                    <h5>Your Name</h5>
                    <input type='text' value={name} onClick={e => setName(e.target.value)} />
                    <h5>Email</h5>
                    <input type='text' value={email} onCLick={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' placeholder='At least 6 characters' value={password}
                        onChange={e => setPassword(e.target.value)} />
                    <Link to='/login'><button type='submit' className='registerButton'>Submit</button></Link>
                </form>
                <p>By creating an account, you agree to Amazon's
                    Conditions of Use and Privacy Notice. Already an user <a href='/login'>Sign-In</a></p>

                <button className='button'>Sign In With Google</button>
                <button className='buttonFacebook'>Sign In With Facebook</button>
            </div>

        </div>
    </div>;
}

export default Register;
