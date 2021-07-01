import React, {useState} from 'react';
import './signUp.css'

function SignUp(){

    const [email, setEmail] = useState('hey@gmail.com');
    const [password, setPassword] = useState('passward');
    const [confirmPassword, setConfirmPassword] = useState('password');

    function handleChange(e){
        if(e.target.name === "email"){
            setEmail(e.target.value);
        }else if(e.target.name === "password"){
            setPassword(e.target.value);
        }else if(e.target.name === "confirm-password"){
            setConfirmPassword(e.target.value);
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        
        //a test object show bug
        let obj = {
            email : e.target.email.value,
            password: e.target.password.value
        }
        console.log(`${obj.email} ${obj.confirmPassword}`);
    }

    return(
        <div className='sign-up-container'>
            <h2>Sign up to Mazaryn</h2>
            <form onSubmit={handleSubmit}>
                <div className='input'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={handleChange}/>
                </div>
                <div className='input'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={handleChange}/>
                </div>
                <div className='input'>
                    <label htmlFor="confirm-password">Confirm password</label>
                    <input type="password" name="confirm-password" id="confirm-password" value={confirmPassword} onChange={handleChange}/>
                </div>
                <button className="sign-up-btn" type="submit">Sign up</button>
            </form>
            <div className="sign-in">
                <a href="#">Sign in</a>
            </div>
            
        </div>
    );
}

export default SignUp;