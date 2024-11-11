// src/pages/CoachDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { movementMockCoaches } from '../data/movementMockCoaches'; // Your mock data

const CoachDetailPage = () => {
  const { id } = useParams(); // Get the id from the URL
  const coach = movementMockCoaches.find((coach) => coach.id === parseInt(id)); // Find the coach by id

  if (!coach) {
    return <div>Coach not found</div>; // Handle if coach is not found
  }

  return (
    <div className="coach-detail-page">
      <h1>{coach.name}</h1>
      <img src={coach.image} alt={coach.name} />
      <h3>{coach.type}</h3>
      <p>{coach.bio}</p>
      {/* You can add more details about the coach here */}
    </div>
  );
};

export default CoachDetailPage;
