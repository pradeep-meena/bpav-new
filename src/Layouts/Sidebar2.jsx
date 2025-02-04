import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import logo from "../assets/logo.png";

function Sidebar2({ isOpen, toggleSidebar }) {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const handleSubmenuClick = (menuIndex, path) => {
    setActiveMenuIndex(menuIndex);
    navigate(path);
  };

  return (
    <div className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}>
      {/* Sidebar Toggle Button */}
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </div>

      {/* Sidebar Menu */}
      <ul className="menu">
        <li
          className={`menu-item ${openMenuIndex === 0 ? "open" : ""} ${activeMenuIndex === 0 ? "active" : ""}`}
          onClick={() => toggleMenu(0)}
        >
          <div className="menu-link">
          <i class="fa fa-home" aria-hidden="true"></i>
            {isOpen && (
              <span className="menu-text">
                <AiOutlineDashboard />
                Home
              </span>
            )}
          </div>
          <ul className={`submenu ${openMenuIndex === 0 ? "open" : ""}`}>
            <li className="submenu-item" onClick={() => handleSubmenuClick(0, "/dashboard")}>Dashboard</li>
            <li className="submenu-item" onClick={() => handleSubmenuClick(0, "/calendar")}>Calendar</li>
            <li className="submenu-item" onClick={() => handleSubmenuClick(0, "/ToDo")}>ToDo</li>
            <li className="submenu-item" onClick={() => handleSubmenuClick(0, "/Notes")}>Notes</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar2;
