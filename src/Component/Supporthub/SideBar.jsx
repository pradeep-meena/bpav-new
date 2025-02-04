
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { FaUser, FaQuestionCircle, FaStar, FaAt, FaCheck, FaChartBar, FaLayerGroup, FaFilter, FaRedo,FaCaretDown  } from "react-icons/fa";
const SideBar = () => {
  return (
    <div className=" container- fluid d-flex flex-column bg-light p-3 vh-100 w-25% w-sm-25" style={{
      overflowY: 'auto',
      scrollbarWidth: 'thin',  
      scrollbarColor: '#333 #f0f0f0'  
    }}>
      <h4 className="mb-3" style={{ fontSize: '1.2rem' }}>Help Desk</h4>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Search" style={{ fontSize: '0.9rem' }} />
      </div>
      <ul className="nav flex-column" style={{ listStyleType: 'none', paddingLeft: '0' }}>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
        <Link to="/summary" className="nav-link text-dark d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
             
              Summary
            </div>
          </Link>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="Analyze">
            <div className="d-flex align-items-center">
              <FaChartBar className="me-2" />
              Analyze
            </div>
            <span className="badge bg-secondary ">0</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="Unassigned">
            <div className="d-flex align-items-center">
              <FaQuestionCircle className="me-2" />
              Unassigned
            </div>
            <span className="badge bg-secondary">0</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="Assigned To Me">
            <div className="d-flex align-items-center">
              <FaUser className="me-2" />
              Assigned To Me
            </div>
            <span className="badge bg-secondary">37</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="My Team's Unassigned">
            <div className="d-flex align-items-center">
              <FaUser className="me-2" />
              My Team's Unassigned
            </div>
            <span className="badge bg-secondary">0</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="My Team's Open">
            <div className="d-flex align-items-center">
              <FaUser className="me-2" />
              My Team's Open
            </div>
            <span className="badge bg-secondary">42</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
        <Link to="/supporthub/supportallopen" className="nav-link text-dark d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <FaLayerGroup className="me-2" />
              Summary
            </div>
          </Link>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="Following">
            <div className="d-flex align-items-center">
              <FaStar className="me-2" />
              Following
            </div>
            <span className="badge bg-secondary">0</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="My Mentions">
            <div className="d-flex align-items-center">
              <FaAt className="me-2" />
              My Mentions
            </div>
            <span className="badge bg-secondary">0</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="All Closed">
            <div className="d-flex align-items-center">
              <FaCheck className="me-2" />
              All Closed
            </div>
            <span className="badge bg-secondary"></span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="Spam">
            <div className="d-flex align-items-center">
              <FaAt className="me-2" />
              Spam
            </div>
            <span className="badge bg-secondary">297</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="Sent">
            <div className="d-flex align-items-center">
              <FaAt className="me-2" />
              Sent
            </div>
            <span className="badge bg-secondary">2</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="Sales- Unassigned">
            <div className="d-flex align-items-center">
              <FaAt className="me-2" />
              Sales- Unassigned
            </div>
            <span className="badge bg-secondary">23</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="Sales- All Open">
            <div className="d-flex align-items-center">
              <FaAt className="me-2" />
              Sales- All Open
            </div>
            <span className="badge bg-secondary">0</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="Sales- All Closed">
            <div className="d-flex align-items-center">
              <FaAt className="me-2" />
              Sales- All Closed
            </div>
            <span className="badge bg-secondary">0</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="Account Unassigned">
            <div className="d-flex align-items-center">
              <FaAt className="me-2" />
              Account Unassigned
            </div>
            <span className="badge bg-secondary">0</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="Account-All Open">
            <div className="d-flex align-items-center">
              <FaAt className="me-2" />
              Account-All Open
            </div>
            <span className="badge bg-secondary">0</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SideBar;