import logo from './logo.svg';
import Navbar from './components/navbar/Navbar.js';
import Counter from './components/Counter/Counter.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar title="oranges" description="oranges are orange"/>
        <Counter />
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
      </header>
    </div>
  );
}

export default App;
