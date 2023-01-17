/* eslint-disable prettier/prettier */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
// import Udyam from './Udyam/Udyam.js';
import About from './Udyam/components/about/about';
import Events from './Udyam/components/Events/events';
import Nav from './Udyam/components/Nav/Nav';
import LeaderBoard from './Udyam/components/LeaderBoard/LeaderBoard';
// import Udyam from './Udyam/Udyam';
import HomePage from './Udyam/components/HomePage/HomePage';
import Sponsors from './Udyam/components/Sponsors/Sponsors';
import UdgamSponsors from './Udgam/components/Sponsors/Sponsors';
import DashBoard from './Udyam/components/DashBoard/DashBoard';
import UdgamAbout from './Udgam/components/About/UdgamAbout';
import UdgamNav from './Udgam/components/UdgamNav/UdgamNav';
import UdgamEvents from './Udgam/components/Events/udgamEvents';

// import {useState,useEffect} from 'react';
function App() {
  // let wid;
  // const [width, setWidth] = useState(window.innerWidth);
  // const updateWidth = () => {
  //   setWidth(window.innerWidth);
  //   wid=width;
  // };
  // useEffect(() => {
  //   window.addEventListener('resize', updateWidth);
  //   return () => window.removeEventListener('resize', updateWidth);
  // }, []);
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
                <Nav active="#none" />
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
                <DashBoard />
              </>
            }
          />

          <Route
            path="/udyam/events"
            element={
              <>
                <Nav active="#event" />
                <Events active="#event" />
              </>
            }
          />
          <Route
            path="/udyam/sponsors"
            element={
              <>
                <Nav active="#sponsors" />
                <Sponsors active="#sponsors" />
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
          <Route
            path="/udgam"
            element={
              <>
                <UdgamNav active="#none" />
              </>
            }
          />
          <Route
            path="/udgam/sponsors"
            element={
              <>
                <UdgamNav active="#sponsors" />
                <UdgamSponsors />
              </>
            }
          />
          <Route
            path="/udgam/about"
            element={
              <>
                <UdgamNav active="#about" />
                <UdgamAbout />
              </>
            }
          />
          <Route
            path="/udgam/events"
            element={
              <>
                <UdgamNav active="#event" />
                <UdgamEvents active="#event" />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
