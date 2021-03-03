import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/header/Header';
//import LeftPane from './components/left pane/LeftPane';
//import RightPane from './components/right pane/RightPane';
import Footer from './components/footer/Footer';
import Profile from './components/middle pane/profile/Profile';
import Posts from './components/middle pane/post/Posts';

function App() {

  let pageTitle = 'Zaryn group';
  let userName = 'Teddy';

  return (
    <div className="App">
      <Header pageTitle={pageTitle} userName={userName}/>
      <Router>
        <section id='middlePane'>
          <Switch>
            <Route path="/posts">
              <Posts />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </section>  
      </Router>
      {
        /*
        <div className='body'>
        <LeftPane />
        <MiddlePane />
        <RightPane />  
      </div>
        */
      }
      <Footer />
    </div>
  );
}

export default App;
