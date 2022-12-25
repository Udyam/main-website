/* eslint-disable prettier/prettier */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Updates from './components/updates/updates';
<<<<<<< HEAD
import Faq from './components/faq/Faq';

=======
import Sponsers from './components/Sponsors/sponsors';
import Footer from './components/footer/footer';
import About from './components/AboutUS/AboutUs';
>>>>>>> 7f5cd938f29a1aefcce5e6fafe496ea5312d63b6
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
                <About />
                <Updates />
                <Sponsers />
                <Footer />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route path="/updates" element={<Updates />} />
        </Routes>
      </Router>
      <Faq />
    </div>
  );
}

export default App;
