// pages/EventsPage.jsx
import React, { useState } from 'react';
import EventList from '../components/EventsList';
import EventFilter from '../components/EventFilter';
import AddEventForm from '../components/AddEventForm';
import './EventsPage.css';

function EventsPage() {
  // Initial sample events
  const initialEvents = [
    { id: 1, title: "Interfaith Prayer Gathering", date: "2025-03-15", location: "Central Park", category: "Religious", description: "Join people of all faiths for a communal prayer session and discussion." },
    { id: 2, title: "Community Clean-up Drive", date: "2025-03-20", location: "Downtown Area", category: "Charity", description: "Help clean our community spaces while connecting with neighbors." },
    { id: 3, title: "Cultural Exchange Potluck", date: "2025-03-25", location: "Community Center", category: "Social", description: "Bring a dish from your culture and share stories with others." },
    { id: 4, title: "Meditation Workshop", date: "2025-04-01", location: "Serenity Garden", category: "Religious", description: "Learn meditation techniques from different spiritual traditions." },
  ];

  const [events, setEvents] = useState(initialEvents);
  const [filteredEvents, setFilteredEvents] = useState(initialEvents);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle filtering of events
  const filterEvents = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.category === category));
    }
  };

  // Handle adding a new event
  const addEvent = (newEvent) => {
    const updatedEvents = [...events, { ...newEvent, id: events.length + 1 }];
    setEvents(updatedEvents);
    
    // If "All" is selected or if the new event matches the current filter
    if (selectedCategory === "All" || newEvent.category === selectedCategory) {
      setFilteredEvents([...filteredEvents, { ...newEvent, id: events.length + 1 }]);
    }
  };

  return (
    <div className="events-page">
      <h1>Community Events</h1>
      
      <div className="events-container">
        <div className="events-sidebar">
          <EventFilter onFilterChange={filterEvents} selectedCategory={selectedCategory} />
          <AddEventForm onAddEvent={addEvent} />
        </div>
        
        <div className="events-main">
          <EventList events={filteredEvents} />
        </div>
      </div>
    </div>
  );
}

export default EventsPage;