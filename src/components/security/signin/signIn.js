import React, {useState} from 'react';
import './signIn.css';
//import {useHistory} from 'react-router-dom';
//import { Details } from '@material-ui/icons';

function SignIn({login, error}){

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    function handleChange(e){
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        //access values with "e.target.email.value and e.target.password.value"
        //logic to send data to the backend server
        //history.push("/view");
        login(credentials)
    }

    return(
        <div className='sign-in-container'>
            <h2>Sign in to Mazaryn</h2>
            <form onSubmit={handleSubmit}>
                {
                (error != '') ? (<p>{error}</p>): ("")
                }
                <div className='input'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={credentials.email} onChange={handleChange}/>
                </div>
                <div className='input'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={credentials.password} onChange={handleChange}/>
                </div>
                <button className="sign-in-btn" type="submit">Sign in</button>
            </form>
            <div className="sign-in">
                <a href="#">Sign up</a>
            </div>
        </div>
    );
}

export default SignIn;