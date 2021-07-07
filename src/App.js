import React, { useContext, useState } from 'react';
import './App.css';
import { UserContext } from './components/context/UserContext';
import SignIn from './components/security/signin/SignIn.js';
import View from './components/view/View.js';

function App() {

  //Dummy user object acting as our DB
  // let user = {
  //   email : 'example@gmail.com',
  //   password: 'example'
  // }

  // //state of the user stored for the session
  // const [userDetails, setUserDetails] = useState({
  //   email: '',
  //   loggedin: false
  // });
  // console.log(userDetails)


  // const [error, setError] = useState('');

  // function login(details){

  //   //check if the details provided by the user using form matches the data in the DB
  //   if((details.email === user.email) && (details.password === user.password)){
  //     setUserDetails({
  //       email: details.email,
  //       loggedin: true
  //     });  
  //     console.log("Logged in");
  //   }else{
  //     console.log("credentials dont match")
  //     setError("Credentials do not match");
  //   }  
  // }

  // function logout(){
  //   setUserDetails({
  //     email:'',
  //     loggedin: false 
  //   });
  // }

  const value = useContext(UserContext)

  return (
    <div className="App">

      <h1>{value}</h1>

      {
        //  (userDetails.loggedin === true ) ? (
        //    <View logout={logout}/>
        //  ) : (
        //    <SignIn login={login} error={error}/>
        //  )
      }
    </div>
  );
}

export default App;