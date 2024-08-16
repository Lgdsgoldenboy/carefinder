// src/components/Homepage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">Carefinder</div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search Hospitals</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Find the Best Healthcare Near You</h1>
        <p>Easy and quick access to hospitals in your area.</p>
        <Link to="/search" className="cta-button">Find Hospitals Near You</Link>
      </section>

      {/* Search Section */}
      <section className="search">
        <h2>Search for Hospitals</h2>
        <form>
          <input type="text" placeholder="Enter your location" />
          <button type="submit">Search</button>
        </form>
      </section>

      {/* Featured Hospitals */}
      <section className="featured-hospitals">
        <h2>Featured Hospitals</h2>
        <div className="hospital-list">
          {/* Example Featured Hospitals */}
          <div className="hospital-item">
            <h3>General Hospital Lagos</h3>
            <p>Address: 123 Lagos Street, Lagos</p>
            <p>Phone: +234 800 123 4567</p>
          </div>
          <div className="hospital-item">
            <h3>University Hospital Ibadan</h3>
            <p>Address: 456 Ibadan Road, Ibadan</p>
            <p>Phone: +234 800 765 4321</p>
          </div>
          {/* Add more hospitals as needed */}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Carefinder. All rights reserved.</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
