import logo from './logo.svg';
import './App.css';
import Greeting from"./Greeting";
import Counter from './Counter';
import List from './List';

function App() {

  const list = ['Ben', 'Helen', 'Anna']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h1>Hello, world!</h1>
        <Greeting name="Tharshika"/>
        <Counter />
        <List menuitems={list}/>
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
// 