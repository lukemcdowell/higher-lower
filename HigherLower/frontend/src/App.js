import Game from './components/Game';
import Navigation from "./components/Navigation";
import Stats from "./components/Stats";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

    <Router>
        <Navigation />

        <Routes>
          <Route exact path='/' element={<Game />}></Route>
          <Route exact path='/stats' element={<Stats />}></Route>

        </Routes>
    </Router>

    </div>
  );
}

export default App;
