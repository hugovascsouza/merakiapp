import React from 'react';
import { Link } from 'react-router-dom';
import dietImage from '../assets/diet.jpg'; // Update this path as needed

// Static categories with placeholder images and descriptions
const categories = [
  { 
    name: "Motion and Movement", 
    image: "https://img.freepik.com/free-photo/silhouette-basketball-player-about-throw_23-2147644414.jpg?t=st=1731344484~exp=1731348084~hmac=8487e8c323a2e944e8b9a1dde5063a12167f6e7d90f41f6908fb245defdcec63&w=360", 
    path: "/movement",
    description: "Sports and physical activity" 
  },
  { 
    name: "Nourishment and Nutrition", 
    image: "https://res.cloudinary.com/chek-institute/images/c_scale,w_600,h_400,dpr_1.25/f_auto,q_auto/v1644837824/5.XX-core-values-diet-O1-FI_758243f3dd/5.XX-core-values-diet-O1-FI_758243f3dd.jpg?_i=AA", 
    path: "/diet",
    description: "Guidance on nutrition and healthy eating" 
  },
  { 
    name: "Mindfulness and Stillness", 
    image: "https://img.freepik.com/free-photo/close-up-kid-meditating-mat_23-2149101612.jpg?t=st=1731344443~exp=1731348043~hmac=1fa697d3fee072b632d7192ee42673c5789a8ef2bcb7faffcb43136aea5eab70&w=1060", 
    path: "/quiet",
    description: "For mindfulness, meditation, and relaxation" 
  },
  { 
    name: "Creativity and Play", 
    image: "https://img.freepik.com/free-photo/girl-painting-canvas-park_23-2148002542.jpg?t=st=1731344393~exp=1731347993~hmac=23fab019c83d1e20e06c6168784b4987c7e94735ba7306dc28fab4502de378a7&w=1060", 
    path: "/happiness",
    description: "Get better or learn new skills and hobbies" 
  },
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
        <p className="category-name">{category.name}</p>
        <p className="category-description">{category.description}</p> {/* Add description text here */}
      </Link>
    </div>
  ))}
</div>

  );
};

export default CategoryGrid;
