


import React from 'react';
import './Dashboard.css'; // Ensure this file contains the updated styles

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to Crop Web</h1>
        <p>Your gateway to modern farming solutions</p>
      </header>
      <section className="dashboard-content">
        <div className="farm-image">
          <img src="/images/farm-field.jpg" alt="Farm Field" />
        </div>
        <div className="dashboard-info">
          <h2>Explore Our Features</h2>
          <p>
            Discover innovative tools and resources to optimize your farming operations.
            From weather forecasts to crop management, we provide everything you need to succeed.
          </p>
          <a href="#learn-more" className="btn">Learn More</a>
        </div>
      </section>
      <footer className="dashboard-footer">
        <p>&copy; 2024 Crop Web. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Dashboard;


