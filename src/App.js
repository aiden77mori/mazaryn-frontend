import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import Home from './modules/Home';
import SignUp from './components/security/signup/SignUp.js';
import SignIn from './components/security/signin/SignIn.js';

//import View from './components/view/view.js';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
        </Switch>
      </Router>
      {
        /*
        <View />
        */
      }
    </div>
  );
}

export default App;
