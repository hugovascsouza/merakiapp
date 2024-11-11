import React from 'react';
import { happinessMockCoaches } from '../data/happinessMockCoaches'; // Import the mock coaches data for happiness
import CoachesPage from './CoachesPage'; // Import the reusable CoachesPage component

const HappinessPage = () => {
  const categories = [
    "Visual Arts (Painting & Drawing)",
    "Digital Art & Graphic Design",
    "Writing",
    "Music Composition & Songwriting",
    "Photography",
    "Film & Video Production",
    "Theater & Acting",
    "Language Teaching",
    "Creative Entrepreneurship",
    "Strategy & Games"
  ];

  const description = "Explore your creative side and find experts who can guide and teach you a new skill in visual arts, music, writing, theater, and more to help you discover happiness through creativity.";

  return (
    <CoachesPage 
      title="Creative Experts and Teachers" 
      description={description} // Pass custom description
      mockCoachesData={happinessMockCoaches} // You'll need to define happinessMockCoaches similar to dietMockCoaches
      categories={categories} 
    />
  );
};

export default HappinessPage;
