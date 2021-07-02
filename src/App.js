import React, { useState } from 'react';
import './App.css';

//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import Home from './modules/Home';
//import SignUp from './components/security/signup/SignUp.js';
import SignIn from './components/security/signin/SignIn.js';
import View from './components/view/View.js';


let loggedin = false

function App() {

  //Dummy user object acting as our DB
  let user = {
    email : 'example@gmail.com',
    password: 'example'
  }

  //state of the user stored for the session
  const [userDetails, setUserDetails] = useState({
    email: ''
  });

  const [error, setError] = useState('');

  function login(details){

    //check if the details provided by the user using form matches the data in the DB
    if((details.email == user.email) && (details.password == user.password)){
      setUserDetails({
        email: details.email
      });  
      loggedin = true
      console.log("Logged in");
    }else{
      console.log("credentials dont match")
      setError("Credentials do not match");
    }  
  }

  function logout(){
    setUserDetails({
      email:'',
      password: '' 
    });
    loggedin = false
  }

  return (
    <div className="App">

      {
         (loggedin === true ) ? (
           <View logout={logout}/>
         ) : (
           <SignIn login={login} error={error}/>
         )
      }

      {/*
      <Router>
        <Switch>
          <Route exact path='/' component={View}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
        </Switch>
      </Router>
      */}
    </div>
  );
}

export default App;