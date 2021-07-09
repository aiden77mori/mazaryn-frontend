import React from 'react';
import './App.css';
import { UserProvider } from './components/context/UserContext';
import Auth from './components/security/Auth'

function App() {

  return (
    <div className="App">

      <UserProvider>
        <Auth />
      </UserProvider>
     
    </div>
  );
}

export default App;