import React from 'react'
import { Link } from 'react-router-dom';
// import { all_routes } from '../router/all_routes';

const InventoryOrderList = () => {
  return (
    <div className=''>
          <div className="container-fluid">
    <header>
      <div className="header-left">
        <h1>Orders</h1>
      </div>
      <div className="header-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <button className="add-order-btn">Add order</button>
      </div>
    </header>
    <div className="main-content">
      <aside className="sidebar">
        <div className="filter-section">
          <h3>
            Status <span style={{ marginLeft: 150 }}>▲</span>
          </h3>
          <ul>
            <li>
              <span>
                <input type="checkbox" name="" id="" /> &nbsp;Draft
              </span>{" "}
              <span>(0)</span>
            </li>
            <li>
              <span>
                <input type="checkbox" name="" id="" /> &nbsp;Reserved
              </span>{" "}
              <span>(0)</span>
            </li>
            <li>
              <span>
                <input type="checkbox" name="" id="" /> &nbsp;Picked up
              </span>{" "}
              <span>(0)</span>
            </li>
            <li>
              <span>
                <input type="checkbox" name="" id="" /> &nbsp;Returned
              </span>{" "}
              <span>(0)</span>
            </li>
            <li>
              <span>
                <input type="checkbox" name="" id="" /> &nbsp;Archived
              </span>{" "}
              <span>(0)</span>
            </li>
            <li>
              <span>
                <input type="checkbox" name="" id="" /> &nbsp;Cancelled
              </span>{" "}
              <span>(0)</span>
            </li>
          </ul>
        </div>
        <div className="filter-section">
          <h3>Payment status</h3>
          <ul>
            <li>
              <span>
                <input type="checkbox" name="" id="" /> &nbsp;Payment due
              </span>{" "}
              <span>(0)</span>
            </li>
            <li>
              <span>
                <input type="checkbox" name="" id="" /> &nbsp;Partially paid
              </span>{" "}
              <span>(1)</span>
            </li>
            <li>
              <span>
                <input type="checkbox" name="" id="" /> &nbsp;Paid
              </span>{" "}
              <span>(0)</span>
            </li>
            <li>
              <span>
                <input type="checkbox" name="" id="" /> &nbsp;Overpaid
              </span>{" "}
              <span>(0)</span>
            </li>
            <li>
              <span>
                <input type="checkbox" name="" id="" /> &nbsp;Process deposit
              </span>{" "}
              <span>(0)</span>
            </li>
          </ul>
        </div>
        <div className="filter-section">
          <h3>Date range </h3>
          <div className="date-filter">
            <span>Showing: All time</span>
          </div>
        </div>
        <button className="export-btn">↓ Export</button>
      </aside>
      <main className="orders-table">
        <div className="view-tabs ">
          <span className="tab active">All</span>
          <span className="tab">Upcoming</span>
          <span className="tab">Late</span>
          <span className="tab">Not assigned</span>
        </div>
        <hr />
        <div className="table-header" style={{ marginTop: 30 }}>
          <div className="table-actions">
            <button className="actions-btn">Actions ▼</button>
            <span className="selection-text">0 orders selected</span>
            <a href="#" className="select-all">
              Select all 1 order
            </a>
          </div>
          <div className="view-tabs">
            <span style={{ textSize: 10 }}>Showing 1-1 of 1</span>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Customer</th>
              <th>
                Status &nbsp;<span style={{ fontSize: 18 }}>⇅</span>
              </th>
              <th>
                Pick up &nbsp;<span style={{ fontSize: 18 }}>⇅</span>
              </th>
              <th>
                Return &nbsp;<span style={{ fontSize: 18 }}>⇅</span>
              </th>
              <th>
                Price &nbsp;<span style={{ fontSize: 18 }}>⇅</span>
              </th>
              <th>
                Payment status &nbsp;<span style={{ fontSize: 18 }}>⇅</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <div className="customer-info">
                  <span>#1</span>
                  <div
                    className="avatar"
                    style={{ backgroundColor: "rgb(121, 155, 41)" }}
                  >
                    BTS
                  </div>
                  BTS Big
                </div>
              </td>
              <td>
                <span className="status-badge">Pick up</span>
              </td>
              <td>21/12/2024 08:15</td>
              <td>31/12/2024 18:30</td>
              <td>£250.00</td>
              <td>
                <button className="payment-status-btn">+ Partially paid</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="table-footer">
          <span>Showing 1 to 1 of 1</span>
        </div>
      </main>
    </div>
          </div>
    </div>
  )
}

export default InventoryOrderList