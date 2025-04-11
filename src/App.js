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
import Adopt from './Pages/Adopt';
import AdminLogin from './Pages/AdminLogin';
import AdminNavbar from './Components/AdminNavbar';
import AdminHome from './Pages/AdminHome';
import Blog from './Pages/Blog';
import AdminUsers from './Pages/AdminUsers';
import AdminProfile from './Pages/AdminProfile';

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
    '/adminlogin',
  ].includes(location.pathname);
  const showUserNavbar = [
    '/home',
    '/pets',
    '/profile',
    '/adopt',
    '/blog',
  ].includes(location.pathname);

  const showAdminNavbar = [
    '/admin-dashboard',
    '/manage-users',
    '/admin-profile',
  ].includes(location.pathname);
  return (
    <>
      {showNavbar && <Navbar />}
      {showUserNavbar && <UserNavbar />}
      {showAdminNavbar && <AdminNavbar />}
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
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminHome />} />
        <Route path="/manage-users" element={<AdminUsers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
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
