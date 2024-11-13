import React from 'react';
import { happinessMockCoaches } from '../data/happinessMockCoaches'; 
import CoachesPage from './CoachesPage'; 

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

  const description = "Explore your creative side and find experts who can help you improve or learn a new skill.";

  return (
    <CoachesPage 
      title="Creative Experts and Teachers" 
      description={description} 
      mockCoachesData={happinessMockCoaches}
      categories={categories} 
    />
  );
};

export default HappinessPage;
