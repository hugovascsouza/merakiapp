// src/pages/MovementPage.jsx
import React from 'react';
import { FaInstagram, FaEnvelope } from 'react-icons/fa'; // Importing icons for Instagram and Email

const mockCoaches = [
  {
    id: 1,
    name: "John Doe",
    type: "Kettlebell Specialist",
    location: "New York, USA",
    languages: ["English", "Spanish"],
    services: ["Kettlebell Training", "Mobility", "Strength Training"],
    certifications: ["Certified Kettlebell Instructor", "Mobility Specialist"],
    instagram: "@johndoe",
    email: "johndoe@example.com",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Jane Smith",
    type: "Mobility Coach",
    location: "London, UK",
    languages: ["English"],
    services: ["Yoga", "Flexibility Coaching", "Movement Therapy"],
    certifications: ["Certified Yoga Instructor", "Mobility Coach"],
    instagram: "@janesmith",
    email: "janesmith@example.com",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Sam Lee",
    type: "Strength and Conditioning Coach",
    location: "Sydney, Australia",
    languages: ["English", "Mandarin"],
    services: ["Strength and Conditioning", "Bodyweight Training", "Mobility"],
    certifications: ["Certified Strength Coach", "Certified Personal Trainer"],
    instagram: "@samlee",
    email: "samlee@example.com",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "Emily White",
    type: "Yoga and Wellness Coach",
    location: "Berlin, Germany",
    languages: ["English", "German"],
    services: ["Yoga", "Breathwork", "Mindfulness"],
    certifications: ["Certified Yoga Instructor", "Wellness Coach"],
    instagram: "@emilywhite",
    email: "emilywhite@example.com",
    image: "https://via.placeholder.com/200",
  },
];

const MovementPage = () => {
  return (
    <div className="movement-page">
      <h1>Movement Coaches</h1>
      <p>Find experienced coaches specializing in movement and mobility!</p>

      {/* Grid for coaches */}
      <div className="coaches-grid">
        {mockCoaches.map((coach) => (
          <div className="coach-card" key={coach.id}>
            <div className="coach-img-container">
              <img src={coach.image} alt={coach.name} className="coach-img" />
            </div>
            <h3>{coach.name}</h3>
            <p className="coach-type">{coach.type}</p>
            <p><strong>Location:</strong> {coach.location}</p>
            <p><strong>Languages:</strong> {coach.languages.join(", ")}</p>
            
            <div className="contact-info">
              <a href={`https://instagram.com/${coach.instagram}`} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="contact-icon" />
              </a>
              <a href={`mailto:${coach.email}`}>
                <FaEnvelope className="contact-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovementPage;
