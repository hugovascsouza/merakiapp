// src/components/CategoryGrid.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import dietImage from'../assets/diet.jpg';

// Static categories with placeholder images
const categories = [
  { name: "Movement", image: "https://via.placeholder.com/200", path: "/movement" },
  { name: "Diet", image: "https://via.placeholder.com/200", path: "/diet" },
  { name: "Quiet", image: dietImage, path: "/quiet" },
  { name: "Happiness", image: "https://via.placeholder.com/200", path: "/happiness" },
];

const CategoryGrid = () => {
  return (
    <div className="category-grid">
      {categories.map((category, index) => (
        <div className="category-item" key={index}>
          <Link to={category.path}>
            <div className="category-img-container">
              <img src={category.image} alt={category.name} className="category-img" />
            </div>
            <p>{category.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
