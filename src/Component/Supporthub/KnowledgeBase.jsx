import React from 'react';
// import '../App.css';

const KnowledgeBase = () => {
  return (
    <div className='page-wrapper'>
    <div className="knowledge-base-container d-flex align-items-center">
      {/* Header Section */}
      <header className="header">
        <div className="header-left">
          <h1>Moose Theme Demo</h1>
        </div>
        <div className="header-right">
          <i className="fa-solid fa-magnifying-glass"></i>
          <button className="btn">Submit a ticket</button>
          <button className="btn">My Tickets</button>
          <button className="btn">Login</button>
        </div>
      </header>

      {/* Main Section */}
      <main className="main-content">
        <h2>How can we help you today?</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter your search term here..."
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>

        <div className=" d-flex justify-space-between cards-container">
          <div className="card">
            <i className="fa-solid fa-book-open-reader card-icon"></i>
            <h3>Solutions</h3>
            <p>Learn about all our theme products and services</p>
          </div>

          <div className="card">
            <i className="fa-solid fa-lightbulb card-icon"></i>
            <h3>Discussions</h3>
            <p>Have any questions? Find the answers to all of them</p>
          </div>

          <div className="card">
            <i className="fa-solid fa-envelope-open-text card-icon"></i>
            <h3>Submit a ticket</h3>
            <p>Contact us through a specially prepared form</p>
          </div>

          <div className="card">
            <i className="fa-solid fa-envelope card-icon"></i>
            <h3>My Tickets</h3>
            <p>Show the list of the tickets</p>
          </div>
        </div>

        <div className="recent-articles">
          <h3>Recent articles</h3>
          <ul style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
            <li>
              <strong>What is Breezy Themes?</strong>
              <br />
              <span>
                Explore the Breezy Themes World. Learn about us, <br />our products and our services.
              </span>
            </li>
            <li>
              <strong>What can be changed?</strong>
              <br />
              <span>
                This article will tell you about all possible changes you <br />can make to your template.
              </span>
            </li>
            <li>
              <strong>Installation service FAQ</strong>
              <br />
              <span>
                Here is how we can help you with the <br />installation. Questions? Our installation guide...
              </span>
            </li>
          </ul>
        </div>
      </main>
    </div>
    </div>
  );
};

export default KnowledgeBase;
