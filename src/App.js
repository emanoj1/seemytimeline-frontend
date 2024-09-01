import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import VanityPage from './pages/VanityPage';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Timeline from './components/Timeline';
import Statistics from './components/Statistics';
import AdminManagement from './components/AdminManagement';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/Global.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vanity/:username" element={<VanityPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/admin-management" element={<AdminManagement />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

