import logo from './logo.svg';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><code>this isn't even my final form</code></p>
        <a className="App-link" href="https://zombo.com/" target="_blank" rel="noopener noreferrer">Visit Zombo.com</a>
        <p><code>now here, have a tictac:</code></p>

        <Game />
      </header>
    </div>
  );
}

export default App;
