import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaGlobe, FaYoutube } from 'react-icons/fa';

const CoachesPage = ({ title, description, mockCoachesData, categories }) => {
  const [coaches, setCoaches] = useState(mockCoachesData); // Initialize with mock data
  const [selectedCountry, setSelectedCountry] = useState(""); // To store the selected country
  const [selectedCategory, setSelectedCategory] = useState(""); // To store selected category
  const [selectedLanguage, setSelectedLanguage] = useState(""); // To store selected language
  const [filteredCoaches, setFilteredCoaches] = useState(mockCoachesData); // To store filtered coaches

  // Function to handle filtering
  const handleFilterChange = () => {
    let filtered = mockCoachesData;

    // Apply country filter
    if (selectedCountry) {
      filtered = filtered.filter(coach => coach.country === selectedCountry);
    }

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(coach => coach.services.includes(selectedCategory));
    }

    // Apply language filter
    if (selectedLanguage) {
      filtered = filtered.filter(coach => coach.languages.includes(selectedLanguage));
    }

    setFilteredCoaches(filtered);
  };

  // Fallback for similar coaches when no exact matches are found
  const getSimilarOptions = () => {
    let similarOptions = [];

    // Get similar coaches based on available data (e.g., same category, language, or country)
    if (selectedCategory) {
      similarOptions = mockCoachesData.filter(coach => coach.services.includes(selectedCategory));
    } else if (selectedLanguage) {
      similarOptions = mockCoachesData.filter(coach => coach.languages.includes(selectedLanguage));
    } else if (selectedCountry) {
      similarOptions = mockCoachesData.filter(coach => coach.country === selectedCountry);
    }

    // Return a fallback message if no similar options are found either
    return similarOptions.length > 0 ? similarOptions : mockCoachesData;
  };

  // Get unique categories, countries, and languages for filter options
  const countries = [...new Set(mockCoachesData.map(coach => coach.country))];
  const languages = [...new Set(mockCoachesData.flatMap(coach => coach.languages))];

  const showNoResultsMessage = filteredCoaches.length === 0;

  return (
    <div className="coaches-page">
      <h1>{title}</h1>
      <p>{description}</p> {/* Dynamic description text */}

      <div className="filters-container">
        <div className="filter-sidebar">
          <h2>Filters</h2>

          {/* Category Filter */}
          <div className="filter-section">
            <h3>Categories</h3>
            <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Language Filter */}
          <div className="filter-section">
            <h3>Languages</h3>
            <select onChange={(e) => setSelectedLanguage(e.target.value)} value={selectedLanguage}>
              <option value="">All Languages</option>
              {languages.map(language => (
                <option key={language} value={language}>{language}</option>
              ))}
            </select>
          </div>

          {/* Country Filter */}
          <div className="filter-section">
            <h3>Country</h3>
            <select onChange={(e) => setSelectedCountry(e.target.value)} value={selectedCountry}>
              <option value="">All Countries</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>

          {/* Apply the filters */}
          <button className="apply-filters-btn" onClick={handleFilterChange}>Apply Filters</button>
        </div>

        {/* Coaches Listing */}
        <div className="coaches-listing">
          {/* No results found message */}
          {showNoResultsMessage && (
            <div className="no-coaches-message">
              <p>We couldn't find any coaches that match your search criteria. Please try adjusting your filters or check back later!</p>
              <p>Here are some similar options:</p>
            </div>
          )}

          {/* Coaches Grid */}
          <div className="coaches-grid">
            {(showNoResultsMessage ? getSimilarOptions() : filteredCoaches).map((coach) => (
              <div className="coach-card" key={coach.id}>
                <div className="coach-img-container">
                  <img src={coach.image} alt={coach.name} className="coach-img" />
                </div>
                <h3>{coach.name}</h3>
                <p className="coach-type">{coach.type}</p>
                <p><strong>Location:</strong> {coach.location}</p>
                <p><strong>Languages:</strong> {coach.languages.join(", ")}</p>

                <div className="contact-info">
                  {/* Conditionally render icons based on the availability of the contact info */}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachesPage;
