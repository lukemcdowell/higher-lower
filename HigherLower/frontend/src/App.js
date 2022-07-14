import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <h3 className="d-flex justify-content-center m-3">Higher/Lower Card Game</h3>

      {/* routes */}
      <Game />

    </div>
  );
}

export default App;
