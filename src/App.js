import React from 'react';
import './App.css';
import { UserProvider } from './components/context/UserContext';
import Auth from './components/security/Auth';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Auth />
        </UserProvider>
      </Router> 
    </div>
  );
}

export default App;