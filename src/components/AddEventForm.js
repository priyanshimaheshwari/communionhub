import React, { useState } from 'react';
import './AddEventForm.css';

function AddEventForm({ onAddEvent }) {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    location: '',
    category: 'Religious',
    description: ''
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent(eventData);
    setEventData({
      title: '',
      date: '',
      location: '',
      category: 'Religious',
      description: ''
    });
    setIsFormVisible(false);
  };

  return (
    <div className="add-event-container">
      {!isFormVisible ? (
        <button 
          className="show-form-btn"
          onClick={() => setIsFormVisible(true)}
        >
          Add New Event
        </button>
      ) : (
        <div className="add-event-form">
          <h3>Add New Event</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={eventData.title}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={eventData.date}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={eventData.location}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={eventData.category}
                onChange={handleChange}
                required
              >
                <option value="Religious">Religious</option>
                <option value="Social">Social</option>
                <option value="Charity">Charity</option>
                <option value="Educational">Educational</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={eventData.description}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-buttons">
              <button type="submit" className="submit-btn">Add Event</button>
              <button 
                type="button" 
                className="cancel-btn"
                onClick={() => setIsFormVisible(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddEventForm;