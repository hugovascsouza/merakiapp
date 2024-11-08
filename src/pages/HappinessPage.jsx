import React from 'react';
import { happinessMockCoaches } from '../data/happinessMockCoaches'; // Import the mock coaches data for happiness
import CoachesPage from './CoachesPage'; // Import the reusable CoachesPage component

const HappinessPage = () => {
  const categories = [
    "Visual Arts (Painting & Drawing)",
    "Digital Art & Graphic Design",
    "Creative Writing",
    "Music Composition & Songwriting",
    "Photography",
    "Film & Video Production",
    "Theater & Acting",
    "Dance & Choreography",
    "Creative Entrepreneurship",
    "Strategy & Games"
  ];

  const description = "Explore your creative side and find experts who can guide you in visual arts, music, writing, theater, and more to help you discover happiness through creativity.";

  return (
    <CoachesPage 
      title="Creative Experts" 
      description={description} // Pass custom description
      mockCoachesData={happinessMockCoaches} // You'll need to define happinessMockCoaches similar to dietMockCoaches
      categories={categories} 
    />
  );
};

export default HappinessPage;
