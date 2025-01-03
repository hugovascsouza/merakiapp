import React from 'react';
import CoachesPage from './CoachesPage';
import { movementMockCoaches } from '../data/movementMockCoaches';

const MovementPage = () => {
  const categories = [
    "Kettlebell", 
    "Dumbbell", 
    "Stretching", 
    "Mobility", 
    "Powerlifting",
    "Recovery", 
    "Calisthenics", 
    "Core", 
    "Weightloss", 
    "Bodybuilding"
  ];
  
  const description = "Discover top coaches for fitness, yoga, pilates, and more to improve your movement and strength.";

  return (
    <div>
      <CoachesPage title="Movement Coaches" mockCoachesData={movementMockCoaches} categories={categories} description={description} />
    </div>
  );
};

export default MovementPage;
