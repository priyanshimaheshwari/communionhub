// components/EventFilter.jsx
import React from 'react';
import './EventFilter.css';

function EventFilter({ onFilterChange, selectedCategory }) {
  const categories = ["All", "Religious", "Social", "Charity", "Educational"];
  
  return (
    <div className="event-filter">
      <h3>Filter Events</h3>
      <div className="filter-options">
        {categories.map(category => (
          <button 
            key={category} 
            className={selectedCategory === category ? "filter-btn active" : "filter-btn"}
            onClick={() => onFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default EventFilter;