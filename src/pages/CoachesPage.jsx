import React, { useState, useEffect } from 'react';
import FilterSelect from '../components/FilterSelect';
import CoachCard from '../components/CoachCard';
import './coachPage.css';

const CoachesPage = ({ title, description, mockCoachesData, categories }) => {
  const [coaches, setCoaches] = useState(mockCoachesData);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [filteredCoaches, setFilteredCoaches] = useState(mockCoachesData);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filtering
  const handleFilterChange = () => {
    let filtered = mockCoachesData;

    if (selectedCountry) {
      filtered = filtered.filter(coach => coach.country === selectedCountry);
    }

    if (selectedCategory) {
      filtered = filtered.filter(coach => coach.services.includes(selectedCategory));
    }

    if (selectedLanguage) {
      filtered = filtered.filter(coach => coach.languages.includes(selectedLanguage));
    }

    setFilteredCoaches(filtered);
  };

  // Similar coaches
  const getSimilarOptions = () => {
    let similarOptions = [];

    if (selectedCategory) {
      similarOptions = mockCoachesData.filter(coach => coach.services.includes(selectedCategory));
    } else if (selectedLanguage) {
      similarOptions = mockCoachesData.filter(coach => coach.languages.includes(selectedLanguage));
    } else if (selectedCountry) {
      similarOptions = mockCoachesData.filter(coach => coach.country === selectedCountry);
    }

    return similarOptions.length > 0 ? similarOptions : mockCoachesData;
  };

  // Extract unique filter options
  const countries = [...new Set(mockCoachesData.map(coach => coach.country))];
  const languages = [...new Set(mockCoachesData.flatMap(coach => coach.languages))];

  const showNoResultsMessage = filteredCoaches.length === 0;

  return (
    <div className="coaches-page">
      <h1>{title}</h1>
      <p>{description}</p>

      <div className="filters-container">
        <div className="filter-sidebar">
          <h2>Filters</h2>

          {/* Category Filter */}
          <FilterSelect
            label="Categories"
            value={selectedCategory}
            options={categories}
            onChange={setSelectedCategory}
          />

          {/* Language Filter */}
          <FilterSelect
            label="Languages"
            value={selectedLanguage}
            options={languages}
            onChange={setSelectedLanguage}
          />

          {/* Country Filter */}
          <FilterSelect
            label="Country"
            value={selectedCountry}
            options={countries}
            onChange={setSelectedCountry}
          />

          {/* Apply Filters Button */}
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
              <CoachCard key={coach.id} coach={coach} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachesPage;
