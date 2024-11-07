import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import AppRoutes from './routes/AppRoutes';

const App = () => (
  <Router>
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Meraki</div>
      </nav>

      {/* App Routes */}
      <AppRoutes />
    </div>
  </Router>
);

export default App;
