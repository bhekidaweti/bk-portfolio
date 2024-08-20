
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <header className="app-header">
          <div className="profile-container">
            <img src="profile-pic.png" alt="Profile" className="profile-image" />
          </div>
          <button className="theme-toggle-button" onClick={toggleTheme}>
            {theme === 'light' ? (
              <FontAwesomeIcon icon={faMoon} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faSun} size="lg" />
            )}
          </button>
        </header>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
