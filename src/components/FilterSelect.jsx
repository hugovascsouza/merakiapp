// src/components/FilterSelect.jsx
import React from 'react';

const FilterSelect = ({ label, value, options, onChange }) => (
  <div className="filter-section">
    <h3>{label}</h3>
    <select onChange={(e) => onChange(e.target.value)} value={value}>
      <option value="">All {label}</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default FilterSelect;
