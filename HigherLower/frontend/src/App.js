import Game from './components/Game';
import Navigation from "./components/Navigation";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Rules from "./components/Rules";
import Stats from "./components/Stats";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

    <Router>
        <Navigation />

        <Routes>
          <Route exact path='/' element={<Game />}></Route>
          <Route exact path='/signup' element={<SignUp />}></Route>
          <Route exact path='/signin' element={<SignIn />}></Route>
          <Route exact path='/rules' element={<Rules />}></Route>
          <Route exact path='/stats' element={<Stats />}></Route>

        </Routes>
    </Router>

    </div>
  );
}

export default App;
