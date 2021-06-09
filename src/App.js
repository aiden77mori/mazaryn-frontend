import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './modules/Home';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
