import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import logo from "../assets/logo.png"
import { FaBox } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import { FiAirplay } from "react-icons/fi";
import { FiBarChart } from "react-icons/fi";
import { FiBox } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa6";
import { SlSocialDropbox } from "react-icons/sl";
import { CiFileOn } from "react-icons/ci";
import { MdOutlineInventory2 } from "react-icons/md";
// import overview from "../assets/overview.png"
// import building from "../assets/Buildings.png"
// import Coin from "../assets/Coins.png"
// import creditCard from "../assets/CreditCard.png"
// import files from "../assets/Files.png"
// import filestext from "../assets/FileText.png"
// import filesopen from "../assets/FolderOpen.png"
// import idf from "../assets/IdentificationBadge.png"
// import payroll from "../assets/payroll1.svg"

// import overview2 from "../assets/side1.png"
// import side2 from "../assets/side2.png"
// import side3 from "../assets/side3.png"
// import side4 from "../assets/side4.png"
// import side5 from "../assets/side5.png"
// import side6 from "../assets/side6.png"
// import side7 from "../assets/side7.png"
// import side8 from "../assets/side8.png"
// import side10 from "../assets/side10.png"
// import side12 from "../assets/side12.png"




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
        {/* {isOpen ? <FaChevronLeft /> : <FaChevronRight />} */}
      </div>

      {/* Sidebar Menu */}
      <ul className="menu">
        <li
          className={`menu-item ${openMenuIndex === 0 ? "open" : ""} ${activeMenuIndex === 0 ? "active" : ""}`}
          onClick={() => toggleMenu(0)}
        >
        
          <div className="menu-link d-flex align-items-center gap-2">
          {/* <img className="nav-icon menu-icon hovernone-1" src={building} alt="" />
          <img className="nav-icon menu-icon hoverblock-1" src={side2} alt="" />
          
         */}
       <AiOutlineHome />
            {isOpen && (
              <span className="menu-text pt-2">
                Home
                <i
                  className="fa-solid fa-chevron-right float-end mt-2"
                  style={{ fontSize: "15px" }}
                ></i>
              </span>
            )}
          </div>
          <ul className={`submenu ${openMenuIndex === 0 ? "open" : ""}`}>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(0, "/dashboard")}
            >
              Dashboard
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(0, "/calendar")}
            >
             Calendar
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(0, "/ToDo")}
            >
             ToDo
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(0, "/Notes")}
            >
             Notes
            </li>
          </ul>
        </li>
      
       

        {/* Business */}
        <li
          className={`menu-item ${openMenuIndex === 1 ? "open" : ""} ${activeMenuIndex === 1 ? "active" : ""
            }`}
          onClick={() => toggleMenu(1)}
        >
          <div className="menu-link d-flex align-items-center gap-2">
          {/* <img className="nav-icon menu-icon hovernone-1" src={building} alt="" />
          <img className="nav-icon menu-icon hoverblock-1" src={side2} alt="" /> */}
    <GrProjects />

            {isOpen && (
              <span className="menu-text pt-2">
                Projects
                <i
                  className="fa-solid fa-chevron-right float-end mt-2 nav-icon menu-icon"
                  style={{ fontSize: "15px" }}
                ></i>
              </span>
            )}
          </div>
          <ul className={`submenu ${openMenuIndex === 1 ? "open" : ""}`}>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(1, "/projectdashboard")}
            >
              Dashboard
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(1, "/allproject")}
            >
             All Projects
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(1, "/projectschedule")}
            >
            Scheduling
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(1, "/projectworkload")}
            >
             Workload
            </li>
          </ul>
        </li>

        {/* Sales */}
        <li
          className={`menu-item ${openMenuIndex === 2 ? "open" : ""} ${activeMenuIndex === 2 ? "active" : ""
            }`}
          onClick={() => toggleMenu(2)}
        >
          <div className="menu-link d-flex align-items-center gap-2">
      
            {/* <img className="nav-icon menu-icon hovernone-1" src={Coin} alt="" />
            <img className="nav-icon menu-icon hoverblock-1" src={side3} alt="" /> */}
         <FiAirplay />
            {isOpen && (
              <span className="menu-text pt-2">
                HR
                <i
                  className="fa-solid fa-chevron-right float-end mt-2"
                  style={{ fontSize: "15px" }}
                ></i>
              </span>
            )}
          </div>
          <ul className={`submenu ${openMenuIndex === 2 ? "open" : ""}`}>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(2, "/hrdashboard")}
            >
              Dashboard
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(2, "/myprofile")}
            >
             My Profile
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(2, "/people")}
            >
              People
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(2, "/performance")}
            >
              Performance
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(2, "/recruitment")}
            >
              Recruitment
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(2, "/company")}
            >
              Company
            </li>
          
          </ul>
        </li>

        {/* Accounting */}
        <li
          className={`menu-item ${openMenuIndex === 3 ? "open" : ""} ${activeMenuIndex === 3 ? "active" : ""
            }`}
          onClick={() => toggleMenu(3)}
        >
      <div className="menu-link d-flex align-items-center gap-2">
          <FiBarChart />
            {/* <img className="nav-icon menu-icon hovernone-1" src={creditCard} alt="" />
            <img className="nav-icon menu-icon hoverblock-1" src={side4} alt="" /> */}
   
            {isOpen && (
              <span className="menu-text mt-1">
                Finance
                <i
                  className="fa-solid fa-chevron-right float-end mt-2"
                  style={{ fontSize: "15px" }}
                ></i>
              </span>
            )}
          </div>
          <ul className={`submenu ${openMenuIndex === 3 ? "open" : ""}`}>
           
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(3, "/accountspayable")}
            >
              Accounts Payable
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(3, "/accountsrecievable")}
            >
              Accounts Receivable
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(3, "/products")}
            >
             Products
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(3, "/customers")}
            >
              Customers
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(3, "/customers")}
            >
             Suppliers
            </li>
          </ul>
        </li>

        {/* Purchase And expence */}

        {/*  CRM */}
        <li
          className={`menu-item ${openMenuIndex === 4 ? "open" : ""} ${activeMenuIndex === 4 ? "active" : ""
            }`}
          onClick={() => toggleMenu(4)}
        >
      <div className="menu-link d-flex align-items-center gap-2">
{/*         
          <img className="nav-icon menu-icon hovernone-1" src={files} alt="" />
          <img className="nav-icon menu-icon hoverblock-1" src={side12} alt="" /> */}
          <FiBox />
            {isOpen && (
              <span className="menu-text mt-1">
               CRM
                <i
                  className="fa-solid fa-chevron-right float-end mt-2"
                  style={{ fontSize: "15px" }}
                ></i>
              </span>
            )}
          </div>
          <ul className={`submenu ${openMenuIndex === 4 ? "open" : ""}`}>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(4, "/crm/dashboard")}
            >
              Dashboard
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(4, "/crm/contacts")}
            >
             Contacts
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(4, "/crm/companies")}
            >
              Companies
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(4, "/crm/deals")}
            >
              Deals
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(4, "/crm/quotes")}
            >
              Quotes
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(4, "/crm/tasks")}
            >
              Tasks
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(4, "/crm/analytics")}
            >
              Analytics
            </li>
          </ul>
        </li>

      {/*  Support DEsk */}
      <li
          className={`menu-item ${openMenuIndex === 5 ? "open" : ""} ${activeMenuIndex === 5 ? "active" : ""
            }`}
          onClick={() => toggleMenu(5)}
        >
      <div className="menu-link d-flex align-items-center gap-2">
          <FaLaptopCode />
            {isOpen && (
              <span className="menu-text mt-1">
               Support Desk
                <i
                  className="fa-solid fa-chevron-right float-end mt-2"
                  style={{ fontSize: "15px" }}
                ></i>
              </span>
            )}
          </div>
          <ul className={`submenu ${openMenuIndex === 5 ? "open" : ""}`}>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(5, "/support/dashboard")}
            >
              Dashboard
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(5, "/support/analytics")}
            >
             Analytics
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(5, "/support/alltickets")}
            >
              All Tickets
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(5, "/support/dashboard")}
            >
              Sales
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(5, "/support/dashboard")}
            >
              Accounts
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(5, "/support/dashboard")}
            >
              Support
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(5, "/support/dashboard")}
            >
              Technical
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(5, "/support/setting")}
            >
              Settings
            </li>
          </ul>
        </li>
        {/* Expenses */}
        {/* <li
          className={`menu-item ${activeMenuIndex === 4 ? "active" : ""}`}
          onClick={() => handleSubmenuClick(4, "/expence")}
        >
          <div className="menu-link">
            <img className="nav-icon menu-icon" src={files} alt="" />
            {isOpen && <span className="menu-text">Expenses</span>}
          </div>
        </li> */}

        {/* Reports */}
        <li
          className={`menu-item ${activeMenuIndex === 6 ? "active" : ""}`}
          onClick={() => handleSubmenuClick(6, "/social")}
        >
   
          <div className="menu-link d-flex align-items-center gap-2">
{/*         
            <img className="nav-icon menu-icon hovernone-1" src={filestext} alt="" />
            <img className="nav-icon menu-icon hoverblock-1" src={side5} alt="" /> */}
                    <MdOutlineInventory2 />
            {isOpen && <span className="menu-text mt-2">BPAV Social</span>}
          </div>
        </li>

        {/* Projects */}
        <li
          className={`menu-item ${activeMenuIndex === 7 ? "active" : ""}`}
          onClick={() => handleSubmenuClick(7, "/files")}
        >
      <div className="menu-link d-flex align-items-center gap-2">
          <CiFileOn />
            {/* <img className="nav-icon menu-icon hovernone-1" src={filesopen} alt="" />
            <img className="nav-icon menu-icon hoverblock-1" src={side6} alt="" /> */}
            {isOpen && <span className="menu-text mt-2">Files</span>}
          </div>
        </li>

        <li
          className={`menu-item ${openMenuIndex === 8 ? "open" : ""} ${activeMenuIndex === 8 ? "active" : ""
            }`}
          onClick={() => toggleMenu(8)}
        >
      <div className="menu-link d-flex align-items-center gap-2">
          {/* <img className="nav-icon menu-icon hovernone-1" src={building} alt="" />
          <img className="nav-icon menu-icon hoverblock-1" src={side2} alt="" /> */}
       <SlSocialDropbox />
            {isOpen && (
              <span className="menu-text pt-2">
                Inventory
                <i
                  className="fa-solid fa-chevron-right float-end mt-2"
                  style={{ fontSize: "15px" }}
                ></i>
              </span>
            )}
          </div>
          <ul className={`submenu ${openMenuIndex === 8 ? "open" : ""}`}>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(8, "/inventory")}
            >
              Dashboard
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(8, "/inventory/calendar")}
            >
             Calender
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(8, "/inventory/orders")}
            >
            Orders
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(8, "/inventory/customers")}
            >
             Customers
            </li>
            <li
              className="submenu-item"
              onClick={() => handleSubmenuClick(8, "/inventory/orderlist")}
            >
             Inventory
            </li>
          </ul>
        </li>

      </ul>

      
    </div>
  );
}

export default Sidebar2;


