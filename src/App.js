import './App.css';
import Header from './components/header/Header';
import LeftPane from './components/left pane/LeftPane';
import MiddlePane from './components/middle pane/MiddlePane';
import RightPane from './components/right pane/RightPane';

function App() {

  let pageTitle = 'Zaryn group';
  let userName = 'Teddy';

  return (
    <div className="App">
      <Header pageTitle={pageTitle} userName={userName}/>
      <div className='body'>
        <LeftPane />
        <MiddlePane />
        <RightPane />  
      </div>
    </div>
  );
}

export default App;
