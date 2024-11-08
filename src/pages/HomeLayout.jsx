// src/pages/HomeLayout.jsx
import React, { useRef } from 'react';
import CategoryGrid from '../components/CategoryGrid';

const HomeLayout = () => {
  const categoriesRef = useRef(null);

  const scrollToCategories = () => {
    categoriesRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      {/* Home Section */}
      <div className="home-container">
        <header>
          <h1>Welcome to Meraki</h1>
          <p>Find certified coaches for fitness, nutrition, and mindfulness to help you achieve your goals.</p>
          <button className="start-now-btn" onClick={scrollToCategories}>Choose Your Path</button>
        </header>
      </div>

      {/* About Section */}
      <div className="about-container">
        <header>
          <h1>Where personal coaches and clients come together.</h1>
          <p>Browse thousands of profiles of fitness professionals, view certifications, and find your coach today.</p>
        </header>
      </div>

      {/* Categories Section */}
      <div ref={categoriesRef} className="services-container">
        <header>
          <h1>Categories</h1>
        </header>
        <CategoryGrid />
      </div>

      {/* Apply Navbar */}
      <nav className="apply-navbar">
        <p>Are you a trainer and want to get more exposure by listing here?</p>
        <button className="apply-btn">Apply</button>
        <button className="login-btn">Login</button>
      </nav>
    </>
  );
};

export default HomeLayout;
