import React from 'react';
import { dietMockCoaches } from '../data/dietMockCoaches'; 
import CoachesPage from './CoachesPage';

const DietPage = () => {
  const categories = [
    "Paleo Diet",
    "Vegan Diet",
    "Animal Based Diet",
    "Keto Diet",
    "Intermittent Fasting",
    "Plant-Based Nutrition",
    "Sports Nutrition",
    "Gut Health & Microbiome",
    "Weight Loss",
    "Healthy Eating Habits"
  ];

  const description = "Find nutrition experts who will guide you in nourishing your body with the right fuel, diet, and healthy eating habits.";

  return (
    <CoachesPage 
      title="Nutrition Experts" 
      description={description} 
      mockCoachesData={dietMockCoaches} 
      categories={categories} 
    />
  );
};

export default DietPage;
