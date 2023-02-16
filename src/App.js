import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Confetti from './confetti';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Input />
        <Confetti />

      </div>
    </>
  );
}

export default App;
