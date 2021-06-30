import React, {useState} from 'react';
import './signIn.css'

function SignIn(){

    const [credentials, setCredentials] = useState({
        email: 'example@gmail.com',
        password: '****'
    });

    return(
        <div className='sign-in-container'>
            <h2>Sign in to Mazaryn</h2>
            <form>
                <div className='input'>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" value={credentials.email}/>
                </div>
                <div className='input'>
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" value={credentials.password} />
                </div>
            </form>
            <button className="sign-in-btn">Sign in</button>
            <div class="sign-in">
                <a href="#">Sign up</a>
            </div>
        </div>
    );
}

export default SignIn;