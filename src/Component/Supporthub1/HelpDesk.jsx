import React, { useState, useEffect } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from 'react-router-dom';
// import { all_routes } from '../router/all_routes';
import { FaUser, FaQuestionCircle, FaStar, FaAt, FaCheck, FaChartBar, FaLayerGroup, FaFilter, FaRedo, FaCaretDown } from "react-icons/fa";

// TableHeader Component
const TableHeader = () => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-between p-2 bg-light">
      <div className="d-flex align-items-center gap-3">
        {/* Dropdowns for Ticket owner, Priority, Pipeline, etc. */}
      </div>
      <button className="btn btn-link text-decoration-none text-secondary d-flex align-items-center">
        <FaRedo className="me-2" />
      </button>
    </div>
  );
};

// TicketTable Component
const TicketTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const mockData = [
      { id: 1, channel: 'Email', ticketName: 'You have a new message', contact: 'Brayden Blessed', company: '--' },
      { id: 2, channel: 'Email', ticketName: 'Your Message 02039610359', contact: 'noreply@answerconnect.com', company: 'AnswerConnect' },
      { id: 3, channel: 'Email', ticketName: 'Test', contact: 'Ben Price', company: 'Bpav' },
      { id: 4, channel: 'Email', ticketName: 'Are you looking for "Highly Skilled and Experienced" ...', contact: 'Mohammed Hamid', company: 'Y-Axis Overseas' },
    ];

    setProducts(mockData);
  }, []);

  return (
    <div className="flex-grow-1 p-3">
      <div className="d-flex justify-content-between align-items-center border border-dark-300 bg-gray-200 px-2">
        <h4 className="p-2 text-muted">86 tickets</h4>
        <button className="text-info border border-dark-700 bg-white rounded">Edit Columns</button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th style={{ width: '3rem' }}>
                <input type="checkbox" />
              </th>
              <th style={{ width: '10%' }}>Channel</th>
              
              <th style={{ width: '35%' }}>Ticket Name</th>
              <th style={{ width: '25%' }}>Ticket → Contacts</th>
              <th style={{ width: '30%' }}>Ticket → Company (Primary)</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td><input type="checkbox" /></td>
                <Link to= "/support/ticketcard">
                  <td>{product.channel}</td> 
                </Link>
                <Link to= "/support/ticketcard">
                <td>{product.ticketName}</td>
                </Link>
                <td>{product.contact}</td>
                <td>{product.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Sidebar Component
export const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-light p-3 vh-100 w-15 w-sm-3" style={{
      overflowY: 'auto',
      scrollbarWidth: 'thin',  // Firefox: make scrollbar thinner
      scrollbarColor: '#333 rgb(119, 113, 113)'  // Firefox: thumb color and track color
    }}>
      <h4 className="mb-3" style={{ fontSize: '1.2rem' }}>Help Desk</h4>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Search" style={{ fontSize: '0.9rem' }} />
      </div>
      <ul className="nav flex-column" style={{ listStyleType: 'none', paddingLeft: '0' }}>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <Link to='/support/summaryview' className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="Summary">
            <div className="d-flex align-items-center">
              <FaLayerGroup className="me-2" />
              Summary
            </div>
            <span className="badge bg-secondary" style={{ backgroundColor: '#ffffff' }}>0</span>
          </Link>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <Link to='/support/analytics' className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="Analyze">
            <div className="d-flex align-items-center">
              <FaChartBar className="me-2" />
              Analyze
            </div>
            <span className="badge bg-secondary ">0</span>
          
          </Link>
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
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="All Open">
            <div className="d-flex align-items-center">
              <FaLayerGroup className="me-2" />
              All Open
            </div>
            <span className="badge bg-secondary">77</span>
          </a>
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
            <span className="badge bg-secondary">0</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="Filters">
            <div className="d-flex align-items-center">
              <FaFilter className="me-2" />
              Filters
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

// HelpDesk Component (Page Layout)
const HelpDesk = () => {
  return (
    <div className="page-wrapper">
      <div className="d-flex flex-column flex-sm-row">
        {/* <Sidebar  /> */}
        <div className="flex-grow-1 d-flex flex-column border border-dark-300">
          <TableHeader />
          <TicketTable />
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
