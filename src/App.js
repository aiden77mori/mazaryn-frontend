import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from './modules/Layout';
import Home from './modules/Home';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home}></Route>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
