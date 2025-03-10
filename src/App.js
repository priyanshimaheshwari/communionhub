import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="logo">
            <Link to="/">Communion</Link>
          </div>
          <nav className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/">About</Link></li>
            </ul>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
          </Routes>
        </main>
        
        <footer className="footer">
          <p>&copy; 2025 Communion App. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;