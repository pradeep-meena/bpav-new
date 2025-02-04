import React from "react";
import { NavLink, Outlet } from "react-router-dom";
// import { all_routes } from "../router/all_routes";
import {Link} from 'react-router-dom';

const InvSidebar = () => {
  return (
    <div
      className="d-flex flex-column bg-light vh-100 w-15 w-sm-3"
      style={{
        scrollbarWidth: "thin", // Firefox: make scrollbar thinner
        scrollbarColor: "#333 rgb(119, 113, 113)", // Firefox: thumb color and track color
      }}
    >
      <h4 className="mb-3" style={{ fontSize: "1.2rem" }}>Inventory Menu</h4>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          style={{ fontSize: "0.9rem" }}
        />
      </div>
      <ul
        className="nav flex-column"
        style={{ listStyleType: "none", paddingLeft: "0" }}
      >
        <li className="nav-item mb-1" style={{ fontSize: "0.9rem" }}>
          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              `nav-link text-dark d-flex justify-content-between align-items-center ${
                isActive ? "active-link" : ""
              }`
            }
          >
            <div className="d-flex align-items-center">
              + New Order
            </div>
     
          </NavLink>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: "0.9rem" }}>
          <NavLink
            to="/inventory/dashboard"
            className={({ isActive }) =>
              `nav-link text-dark d-flex justify-content-between align-items-center ${
                isActive ? "active-link" : ""
              }`
            }
          >
            <div className="d-flex align-items-center">
              <i className="bi bi-file-earmark-text me-2"></i> Dashboard
            </div>
           
          </NavLink>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: "0.9rem" }}>
          <NavLink
            to={all_routes.invcalendar}
            className={({ isActive }) =>
              `nav-link text-dark d-flex justify-content-between align-items-center ${
                isActive ? "active-link" : ""
              }`
            }
          >
            <div className="d-flex align-items-center">
              <i className="bi bi-people me-2"></i> Calender
            </div>
            
          </NavLink>
        </li>
        <div className="dropdown-divider"></div>
        <li className="nav-item mb-1" style={{ fontSize: "0.9rem" }}>
          <NavLink
            to={all_routes.inventoryorders}
            className={({ isActive }) =>
              `nav-link text-dark d-flex justify-content-between align-items-center ${
                isActive ? "active-link" : ""
              }`
            }
          >
            <div className="d-flex align-items-center">
              <i className="bi bi-people me-2"></i> Orders
            </div>
         
          </NavLink>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: "0.9rem" }}>
          <NavLink
            to={all_routes.inventorycustomers}
            className={({ isActive }) =>
              `nav-link text-dark d-flex justify-content-between align-items-center ${
                isActive ? "active-link" : ""
              }`
            }
          >
            <div className="d-flex align-items-center">
              <i className="bi bi-box-seam me-2"></i> Customers
            </div>
            <span className="badge bg-secondary">42</span>
          </NavLink>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: "0.9rem" }}>
          <NavLink
            to={all_routes.inventorylist}
            className={({ isActive }) =>
              `nav-link text-dark d-flex justify-content-between align-items-center ${
                isActive ? "active-link" : ""
              }`
            }
          >
            <div className="d-flex align-items-center">
              <i className="bi bi-box-seam me-2"></i> Inventory
            </div>
           
          </NavLink>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: "0.9rem" }}>
          <NavLink
            to="/documents"
            className={({ isActive }) =>
              `nav-link text-dark d-flex justify-content-between align-items-center ${
                isActive ? "active-link" : ""
              }`
            }
          >
            <div className="d-flex align-items-center">
              <i className="bi bi-box-seam me-2"></i> Documents
            </div>
          </NavLink>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: "0.9rem" }}>
          <NavLink
            to="/documents"
            className={({ isActive }) =>
              `nav-link text-dark d-flex justify-content-between align-items-center ${
                isActive ? "active-link" : ""
              }`
            }
          >
            <div className="d-flex align-items-center">
              <i className="bi bi-box-seam me-2"></i> Documents
            </div>
          </NavLink>
        </li>

        
      </ul>
    </div>
  );
};

const   InventoryDashboard = () => {
  return (
    <div className="page-wrapper">
      <div className="d-flex flex-column flex-sm-row">
        <InvSidebar />
        <div className="flex-grow-1 d-flex flex-column border border-dark-300 p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default InventoryDashboard;
