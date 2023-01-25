import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './EES/Home';
import About from './Udyam/components/about/about';
import Events from './Udyam/components/Events/events';
import Nav from './Udyam/components/Nav/Nav';
import LeaderBoard from './Udyam/components/LeaderBoard/LeaderBoard';
import HomePage from './Udyam/components/HomePage/HomePage';
import Sponsors from './Udyam/components/Sponsors/Sponsors';
import UdgamSponsors from './Udgam/components/Sponsors/Sponsors';
import DashBoard from './Dashboard/DashBoard';
import UdgamAbout from './Udgam/components/About/UdgamAbout';
import UdgamNav from './Udgam/components/UdgamNav/UdgamNav';
import UdgamEvents from './Udgam/components/Events/udgamEvents';
import UDGmain from './Udgam/components/main-page/main-page';
import Teams from './EES/Teams/Teams';
import Mashal from './Mashal/mashal';
import Masponsor from './Mashal/components/Sponsors/Sponsors';
import MashalLeaderboard from './Mashal/components/MashalLeaderboard/MashalLeaderboard';
import MashalEvent from './Mashal/components/MashalEvent/mashalEvent';

import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import Register from './EES/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ComingSoon from './EES/ComingSoon/ComingSoon';
// import {useState,useEffect} from 'react';
function App() {
  const clientId = process.env.REACT_APP_CLIENT_ID;

  const scope = 'https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.addresses.read https://www.googleapis.com/auth/user.organization.read';

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: scope
      });
    };
    gapi.load('client:auth2', initClient);
  });
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
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
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
            path="/gallery"
            element={
              <>
                <ComingSoon />
              </>
            }
          />
          <Route
            path="/team"
            element={
              <>
                <Teams />
              </>
            }
          />
          {/* <Route
            path="/team"
            element={
              <>
                <ComingSoon />
              </>
            }
          /> */}
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
            path="/mashal"
            element={
              <>
                {/* <Nav active="#none" /> */}
                <Mashal />
              </>
            }
          />
          <Route
            path="/mashal/sponsors"
            element={
              <>
                {/* <Nav active="#none" /> */}
                <Masponsor />
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
            path="/udyam/dashboard"
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
                <UDGmain />
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
          <Route
            path="/mashal/leaderboard"
            element={
              <>
                <MashalLeaderboard />
              </>
            }
          />
          <Route
            path="/mashal/event"
            element={
              <>
                <MashalEvent />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
