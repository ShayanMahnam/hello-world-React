import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='title'>Hello World!</h1>
        <input className='user-input' placeholder='write your name...' />
        <button className='btn'>Submit</button>
      </header>
    </div>
  );
}

export default App;
