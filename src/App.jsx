// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';

const App = () => (
  <Router>
    <div>
      <Navbar /> 
      <AppRoutes />
    </div>
  </Router>
);

export default App;
