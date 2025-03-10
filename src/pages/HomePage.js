import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Connecting People Across Faiths & Interests</h1>
          <p>Communion helps you discover and participate in events that bring together people from diverse backgrounds, fostering understanding and community.</p>
          <Link to="/events" className="cta-button">Explore Events</Link>
        </div>
      </section>
      
      <section className="intro-section">
        <h2>Welcome to Communion</h2>
        <p>Communion is a platform dedicated to connecting people of all faiths through events and community support. We believe in the power of shared experiences to build bridges across different beliefs and backgrounds.</p>
        <p>Whether you're looking to attend a religious ceremony, participate in charitable activities, or simply connect with like-minded individuals, Communion provides the space for meaningful interactions and personal growth.</p>
      </section>
    </div>
  );
}

export default HomePage;


