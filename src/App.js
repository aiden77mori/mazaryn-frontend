import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './modules/Home';
import SignUp from './components/security/signup/signUp';
import SignIn from './components/security/signin/signIn';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
        </Switch>
      </Router>

      {
      /*
      <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </Router>
      */
      }
    </div>
  );
}

export default App;
