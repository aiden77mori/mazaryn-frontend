import React, { useState } from 'react';
import './App.css';

//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import Home from './modules/Home';
//import SignUp from './components/security/signup/SignUp.js';
import SignIn from './components/security/signin/SignIn.js';
import View from './components/view/View.js';


function App() {

  let user = {
    email : 'example@gmail.com',
    password: 'password'
  }

  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    loggedIn: false
  });

  function login(details){
    console.log(details)
  }

  function logout(){
    console.log("Logged out")
  }

  return (
    <div className="App">

      {
         (userDetails.loggedIn === true ) ? (
           <View />
         ) : (
           <SignIn login={login}/>
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