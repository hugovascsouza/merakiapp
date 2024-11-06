// src/components/CategoryGrid.jsx
import React from 'react';

// Static categories with placeholder images
const categories = [
  { name: "Strength Training", image: "https://via.placeholder.com/200" },
  { name: "Powerlifting", image: "https://via.placeholder.com/200" },
  { name: "Athleticism", image: "https://via.placeholder.com/200" },
  { name: "Weightloss", image: "https://via.placeholder.com/200" },
  { name: "Nutrition", image: "https://via.placeholder.com/200" },
  { name: "Breathing", image: "https://via.placeholder.com/200" },
  { name: "Kettlebell", image: "https://via.placeholder.com/200" },
  { name: "Stretching", image: "https://via.placeholder.com/200" },
  { name: "Bodyweight Training", image: "https://via.placeholder.com/200" },
  { name: "Mindfulness", image: "https://via.placeholder.com/200" }
];

const CategoryGrid = () => {
  return (
    <div className="category-grid">
      {categories.map((category, index) => (
        <div className="category-item" key={index}>
          <div className="category-img-container">
            <img src={category.image} alt={category.name} className="category-img" />
          </div>
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
