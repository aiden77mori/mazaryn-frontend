import React, {useState} from 'react';
import './signIn.css'

function SignIn(){

    /*
    *using an object in the useState function results in an error 
    *"A component is changing an uncontrolled input of type text to be controlled" while changing 
    *the input value
    *
    * const [credentials, setCredentials] = useState({
    *   email: '',
    *   password: ''
    * });
    * 
    * 
    */

    const [email, setEmail] = useState('example@gmail.com');
    const [password, setPassword] = useState('pass');

    function handleChange(e){
        if(e.target.type === 'email'){
            setEmail(e.target.value);
        }else if(e.target.type === 'password'){
            setPassword(e.target.value)
        }
    }

    return(
        <div className='sign-in-container'>
            <h2>Sign in to Mazaryn</h2>
            <form>
                <div className='input'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={handleChange}/>
                </div>
                <div className='input'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={handleChange}/>
                </div>
            </form>
            <button className="sign-in-btn" type="submit">
                Sign in
            </button>
            <div className="sign-in">
                <a href="#">Sign up</a>
            </div>
        </div>
    );
}

export default SignIn;