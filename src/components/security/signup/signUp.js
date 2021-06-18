import React from 'react';
import './signUp.css'

function signUp(){
    return(
        <div className='sign-up-container'>
            <h2>Sign up to Mazaryn</h2>
            <form>
                <div className='input'>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="example@gmail.com"/>
                </div>
                <div className='input'>
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="******" />
                </div>
                <div className='input'>
                    <label for="confirm-password">Confirm password</label>
                    <input type="password" name="confirm-password" id="confirm-password" placeholder="******" />
                </div>
            </form>
            <button class="sign-up-btn">Sign up</button>
            <div class="sign-in">
                <a href="#">Sign in</a>
            </div>
        </div>
    );
}

export default signUp;