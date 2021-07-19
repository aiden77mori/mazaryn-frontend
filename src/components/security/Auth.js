import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import View from '../view/View';
import SignIn from './signin/SignIn';


function Auth(){


    //Dummy user object acting as our DB
    let user = {
        userName: 'Teddy',
        email : 'example@gmail.com',
        password: 'example'
    }

    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const [isAuthenticated, userHasAuthenticated] = useState(true);
    const [error, setError] = useState('');

    //the effect checks state of the authentication when the app first loads
    useEffect(() => {
        onLoad();
    })

    //this function tries to retrieve a session obj, if there exists, the authenticated state is set to true 
    function onLoad(){
        if(loggedUser.isLoggedIn === false){
            userHasAuthenticated(false);
        } else {
            userHasAuthenticated(true) 
        }
    }

    function login(details){
        //check if the details provided by the user using form matches the data in the DB
        if((details.email === user.email) && (details.password === user.password)){
            setLoggedUser({
                userName: 'Teddy', //defaulty setting a value
                email: details.email,
                isLoggedIn: true
            });  
            console.log("Logged in");
        }else{
            console.log("credentials dont match")
            setError("Credentials do not match");
        }
    }

    function logout(){
        setLoggedUser({
            userName: '',
            email: '',
            isLoggedIn: false 
        });
    }

    return(
        <div>
            {
                (isAuthenticated === true ) ? (
                    <View logout={logout}/>
                ) : (
                    <SignIn login={login} error={error}/>
                )
            }
        </div>
    );
}

export default Auth;