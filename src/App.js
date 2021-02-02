import './App.css';
import Header from './components/header/Header';
import LeftPane from './components/left pane/LeftPane';
import MiddlePane from './components/middle pane/MiddlePane';
import RightPane from './components/right pane/RightPane';

function App() {

  let pageTitle = 'Home';
  let userName = 'Teddy';

  return (
    <div className="App">
      <Header pageTitle={pageTitle} userName={userName}/>
      <LeftPane />
      <MiddlePane />
      <RightPane />
    </div>
  );
}

export default App;
