import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Services from './Pages/Services';

const App = () => {
  const location = useLocation();
  const showNavbar = [
    '/',
    '/login',
    '/register',
    '/contact',
    '/about',
    '/services',
  ].includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* Add more routes here */}
      </Routes>
    </>
  );
};

// Wrap App with Router
const Main = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default Main;
