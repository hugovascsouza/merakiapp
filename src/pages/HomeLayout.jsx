// src/pages/HomeLayout.jsx
import React, { useRef } from 'react';
import CategoryGrid from '../components/CategoryGrid';
import './homePage.css';

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
          <p>Find online coaches, teachers, and mentors to help you to live your best life.</p>
          <button className="start-now-btn" onClick={scrollToCategories}>Start Now</button>
        </header>
      </div>

      {/* Combined About and Categories Section */}
      <div className="about-categories-container">
        {/* About Content */}
        <div className="about-content">
          <header>
            <h1>CHOOSE YOUR PATH</h1>
          </header>
          <h2>MerakiApp is here to help you build a solid foundation and embrace experiences that bring joy, balance, and purpose to your life.</h2>
          <p>In just seconds, browse and connect online with certified professionals worldwide, explore their specialties, and reach out directly.</p>
          <ul className="life-elements">
            <li>Health & Vitality</li>
            <li>Personal Growth</li>
            <li>Passion Projects</li>
            <li>Inner Peace</li>
            <li>Living with Purpose</li>
          </ul>
        </div>

        {/* Categories Content */}
        <div ref={categoriesRef} className="categories-content">
          <header>
            <h1>Categories</h1>
          </header>
          <CategoryGrid />
        </div>
      </div>

     
    </>
  );
};

export default HomeLayout;
