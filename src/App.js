/* eslint-disable prettier/prettier */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
// import Udyam from './Udyam/Udyam.js';
import About from './Udyam/components/About/About';
import Events from './Udyam/components/Events/events';
import Nav from './Udyam/components/Nav/Nav';
import LeaderBoard from './Udyam/components/LeaderBoard/LeaderBoard';
// import Udyam from './Udyam/Udyam';
import HomePage from './Udyam/components/HomePage/HomePage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/udyam"
            element={
              <>
                <Nav active="none" />
                <HomePage />
              </>
            }
          />

          <Route
            path="/udyam/about"
            element={
              <>
                <Nav active="#about" />
                <About />
              </>
            }
          />

          <Route
            path="/udyam/name"
            element={
              <>
                <Nav active="#name" />
              </>
            }
          />

          <Route
            path="/udyam/events"
            element={
              <>
                <Events active="#event" />
              </>
            }
          />
          <Route
            path="/udyam/sponsors"
            element={
              <>
                <Nav active="#sponsors" />
              </>
            }
          />
          <Route
            path="/udyam/leaderboard"
            element={
              <>
                <Nav active="#leaderboard" />
                <LeaderBoard contentIndex={0} />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
