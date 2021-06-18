import React from 'react';
import './signIn.css'

function signIn(){
    return(
        <div className='sign-up-container'>
            <h2>Sign in to Mazaryn</h2>
            <form>
                <div className='input'>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="example@gmail.com"/>
                </div>
                <div className='input'>
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="******" />
                </div>
            </form>
            <button class="sign-up-btn">Sign in</button>
            <div class="sign-in">
                <a href="#">Sign up</a>
            </div>
        </div>
    );
}

export default signIn;