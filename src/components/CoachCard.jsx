import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaGlobe, FaYoutube } from 'react-icons/fa';

const CoachCard = ({ coach }) => (
  <div className="coach-card">
    <div className="coach-img-container">
      <img src={coach.image} alt={coach.name} className="coach-img" />
    </div>
    <h3>{coach.name}</h3>
    <p className="coach-type">{coach.type}</p>
    <p><strong>Location:</strong> {coach.location}</p>
    <p><strong>Languages:</strong> {coach.languages.join(", ")}</p>

    <div className="contact-info">
      {coach.instagram && (
        <a href={`https://instagram.com/${coach.instagram}`} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="contact-icon" />
        </a>
      )}
      {coach.linkedin && (
        <a href={`https://linkedin.com/in/${coach.linkedin}`} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-icon" />
        </a>
      )}
      {coach.email && (
        <a href={`mailto:${coach.email}`}>
          <FaEnvelope className="contact-icon" />
        </a>
      )}
      {coach.phone && (
        <a href={`tel:${coach.phone}`}>
          <FaPhone className="contact-icon" />
        </a>
      )}
      {coach.website && (
        <a href={coach.website} target="_blank" rel="noopener noreferrer">
          <FaGlobe className="contact-icon" />
        </a>
      )}
      {coach.youtube && (
        <a href={coach.youtube} target="_blank" rel="noopener noreferrer">
          <FaYoutube className="contact-icon" />
        </a>
      )}
    </div>
  </div>
);

export default CoachCard;