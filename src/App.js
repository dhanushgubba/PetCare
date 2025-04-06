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
import ForgotPassword from './Pages/ForgotPassword';
import UserHome from './Pages/UserHome';
import UserNavbar from './Components/UserNavbar';
import Pets from './Pages/Pets';
import Profile from './Pages/Profile';

const App = () => {
  const location = useLocation();
  const showNavbar = [
    '/',
    '/login',
    '/register',
    '/contact',
    '/about',
    '/services',
    '/forgot-password',
  ].includes(location.pathname);
  const showUserNavbar = ['/home', '/pets', '/profile'].includes(
    location.pathname
  );
  return (
    <>
      {showNavbar && <Navbar />}
      {showUserNavbar && <UserNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/profile" element={<Profile />} />
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
