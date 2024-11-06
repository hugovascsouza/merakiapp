import React from 'react';
import './App.css';
import CategoryGrid from './components/CategoryGrid'; // Import the category grid

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Meraki</div>
      </nav>

      {/* Main Content */}
      <div className="home-container">
        <header>
          <h1>Welcome to Meraki</h1>
          <p>Find certified coaches for fitness, nutrition, and mindfulness to help you achieve your goals.</p>
          <button className="start-now-btn">Choose Your Path</button>
        </header>
      </div>

      {/* About Section */}
      <div className="about-container">
        <header>
          <h1>Where personal coaches and clients come together.</h1>
          <p>Browse thousands of profiles of fitness professionals, view certifications, and find your coach today.</p>
        </header>
      </div>

      {/* Categories */}
      <div className="services-container">
        <header>
          <h1>Categories</h1>
        </header>
        {/* Category Grid Component */}
        <CategoryGrid />
      </div>
    </div>
  );
};

export default App;
