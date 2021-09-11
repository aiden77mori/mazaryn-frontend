import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Loader } from './components/Loaders/Loader'
// import ProtectedRoutes from './guards/ProtectedRoutes';
import './App.css';

const LoginScreen = React.lazy(() => import('./views/Login/Login'))

function App() {

  return (
    <div className="App">
      <Suspense fallback={<Loader fullscreen />}>
        <Router>
          <Switch>
            <Route exact path="/">
              <LoginScreen />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;