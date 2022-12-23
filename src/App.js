import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Updates from './components/updates/updates';

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
                <Updates />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route path="/updates" element={<Updates />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
