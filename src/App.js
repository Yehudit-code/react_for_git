import logo from './logo.svg';
import './App.css';
import Data from './Components/Data';
import Arr from './Components/Arr';
import Str from './Components/Str';
import Count from './Components/Count';
import BirthDay from './Components/BirthDay';
import ALLTODOS from './Components/ALLTODOS';
//import In from './Components/In';

function App() {
  return (
    <div className="App">
      <ALLTODOS/>
      <Data/> 
      <Arr/>
      <Str/>
      <Count/>
      <BirthDay/>
    </div>
  );
}

export default App;
/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/