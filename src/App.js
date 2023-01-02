/* eslint-disable prettier/prettier */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Udyam from './Udyam/Udyam.js';
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
                <Udyam />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
