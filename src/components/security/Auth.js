import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import SignIn from './signin/SignIn';
import View from '../view/View';


function Auth(){


    //Dummy user object acting as our DB
    let user = {
        userName: 'Teddy',
        email : 'example@gmail.com',
        password: 'example'
    }

    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const [error, setError] = useState('');

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
                (loggedUser.isLoggedIn === true ) ? (
                    <View logout={logout}/>
                ) : (
                    <SignIn login={login} error={error}/>
                )
            }
        </div>
    );
}

export default Auth;