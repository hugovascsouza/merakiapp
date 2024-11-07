import React from 'react';
import { dietMockCoaches } from '../data/dietMockCoaches'; // Import the mock coaches data
import CoachesPage from '../components/CoachesPage'; // Import the reusable CoachesPage component

const DietPage = () => {
  const categories = [
    "Paleo Diet",
    "Vegan Diet",
    "Carnivore Diet",
    "Keto Diet",
    "Intermittent Fasting",
    "Plant-Based Nutrition",
    "Sports Nutrition",
    "Gut Health & Microbiome",
    "Weight Loss Nutrition",
    "Healthy Eating Habits"
  ];

  const description = "Find nutrition experts who will guide you in nourishing your body with the right fuel, diet, and healthy eating habits.";

  return (
    <CoachesPage 
      title="Nutrition Experts" 
      description={description} // Pass custom description
      mockCoachesData={dietMockCoaches} 
      categories={categories} 
    />
  );
};

export default DietPage;
