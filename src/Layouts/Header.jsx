import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
// import pic from '../assets/arro.png'
// import pic1 from '../assets/mobile.png'
// import pic2 from '../assets/image1.png'
// import pic3 from '../assets/notification.jpg'
// import logo1 from "../assets/image.png"
// import profile from "../assets/profile.png"
import { IoSearchOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";



function Header({ toggleSidebar }) {
  return (
    <nav className="navbar d-flex align-items-center justify-content-between px-3 py-2"
      style={{ backgroundColor: "#fff", boxShadow: "0px 2px 5px rgba(0,0,0,0.1)" }}>

      {/* Left Section - Logo & Sidebar Toggle */}
      <div className="d-flex align-items-center">
      <Link to="/" style={{ color: "black" }}>
          <img src={logo} alt="" style={{width: '150px', height: '40px'}} />
        </Link>
        <button onClick={toggleSidebar} className="toggle-button newbtn">
          ☰
        </button>
      </div>

      {/* Middle Section - Search Bar */}
      <div className="search-container d-none d-md-flex align-items-center"
        style={{ position: "relative", backgroundColor: "#f4f6f9", borderRadius: "10px", padding: "6px 12px", width: "30%" }}>
        <IoSearchOutline style={{ color: "black", fontSize: "20px", marginRight: "10px" }} />
        <input className="form-control border-0 bg-transparent" type="text" placeholder="Search..." />
      </div>

      {/* Right Section - Icons & Profile */}
      <div className="d-flex align-items-center">
        {/* Notification Bell */}
        <div className="rounded-circle p-2 me-3 d-flex align-items-center justify-content-center"
          style={{ border: "1px solid lightgray", cursor: "pointer" }}>
          <FaRegBell className="text-dark" style={{ fontSize: "20px" }} />
        </div>

        {/* Profile Dropdown */}
        <div className="dropdown">
          <button className="btn dropdown-toggle d-flex align-items-center" type="button"
            id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false"
            style={{ backgroundColor: "white", border: "none", fontWeight: "500" }}>
            <span className="text-dark ms-2">Ben</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
            <li><Link className="dropdown-item" to="/dashboard"><i className="fa-solid fa-house me-2"></i> Home</Link></li>
            <li><Link className="dropdown-item" to="/Profile"><i className="fa-solid fa-user me-2"></i> Profile</Link></li>
            <li><Link className="dropdown-item" to="/settings"><i className="fa-solid fa-sliders me-2"></i> Settings</Link></li>
            <li><Link className="dropdown-item text-danger" to="/"><i className="fa-solid fa-right-from-bracket me-2"></i> Logout</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;






// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import pic from '../assets/arro.png';
// import pic1 from '../assets/mobile.png';
// import pic2 from '../assets/image1.png';
// // import pic2 from '../assets/image1.png';
// import logo1 from "../assets/image.png";
// import togle1 from "../assets/toggle1.png";
// import profile from "../assets/profile1.png";
// import { IoSearchOutline } from "react-icons/io5";
// import { FaRegBell } from "react-icons/fa";
// import { FaBars } from "react-icons/fa"; // Toggle icon
// import { MdArrowDropDown } from "react-icons/md"; // Dropdown arrow icon
// import { FaChevronDown } from "react-icons/fa6";
// const Header = ({ toggleSidebar }) => {
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(null);

//   const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
//   const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
//   const startDay = startOfMonth.getDay();
//   const daysInMonth = endOfMonth.getDate();

//   const prevMonth = () => {
//     setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
//   };

//   const nextMonth = () => {
//     setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
//   };

//   const selectDate = (day) => {
//     setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
//     setIsCalendarOpen(false); // Close calendar on date selection
//   };

//   const renderCalendarDays = () => {
//     const days = [];

//     // Days from the previous month
//     for (let i = 0; i < startDay; i++) {
//       days.push(<div key={`prev-${i}`} className="calendar-day-inactive" />);
//     }

//     // Current month days
//     for (let i = 1; i <= daysInMonth; i++) {
//       const isSelected = selectedDate && selectedDate.getDate() === i && selectedDate.getMonth() === currentDate.getMonth();
//       days.push(
//         <div
//           key={`current-${i}`}
//           className={`calendar-day ${isSelected ? 'calendar-selected' : ''}`}
//           onClick={() => selectDate(i)}
//         >
//           {i}
//         </div>
//       );
//     }

//     // Fill the remaining slots to maintain a 7x6 grid
//     const totalDays = days.length;
//     for (let i = totalDays; i < 42; i++) {
//       days.push(<div key={`next-${i}`} className="calendar-day-inactive" />);
//     }

//     return days;
//   };
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };
  
//   return (
//     <nav className="navbar" style={{ paddingRight: "32px" }}>
//       {/* <h4 className="navbar-title">
//         <Link to="/dashboard" style={{ color: "black" }}>
//           <img src={logo1} alt="Logo" />
//         </Link>
//         <button onClick={toggleSidebar} className="toggle-button">
//           ☰
//         </button>
//       </h4> */}
// <div className='navbar-title' style={{ display: "flex", alignItems: "center", padding: "10px" }}>
//       {/* Dropdown for company */}
//       <div className='d-flex' style={{ position: "relative" }}>
//       <button
//         onClick={toggleSidebar}
//         style={{
//           marginLeft: "auto",
//           background: "transparent",
//           border: "none",
//           cursor: "pointer",
//           fontSize: "20px",
//           color: "black",
//         }}
//       >
//         <img src={togle1} alt="" />
//       </button>
//       <button
//         onClick={toggleDropdown}
//         style={{
//           display: "flex",
//           alignItems: "center",
//           background: "transparent",
//           border: "none",
//           cursor: "pointer",
//           fontSize: "22px",
//           color: "black",
//           fontWeight: "600",
//         }}
//       >
        
//        ABC Company
//         <FaChevronDown className='ms-5'
//           style={{ fontSize: "20px", marginLeft: "10px", color: "black" }}
//         />
//       </button>
//       {isDropdownOpen && (
//         <ul
//           style={{
//             position: "absolute",
//             top: "100%",
//             left: "0",
//             listStyle: "none",
//             margin: "5px 0 0",
//             padding: "10px 0",
//             backgroundColor: "white",
//             boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
//             zIndex: 1000,
//             borderRadius: "4px",
//             width: "250px",
//           }}
//         >
//              <li className='d-flex'  style={{
//               padding: "10px 15px",
//               cursor: "pointer",
//               fontSize: "14px",
//               color: "#333",
//               borderBottom: "1px solid #eee",
//             }}>
//      <div
//           style={{
//             width: "40px",
//             height: "40px",
//             backgroundColor: "#f5c372",
//             borderRadius: "50%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             marginRight: "10px",
//             color: "white",
//             fontWeight: "bold",
//             fontSize: "18px",
//           }}
//         >
//           DIL
//         </div>
//         Daclan Investment <br /> Limited
//           </li>
//           <Link to="/mainAllfiles">
//           <li className='brand-drop'
//             style={{
//               padding: "10px 15px",
//               cursor: "pointer",
//               fontSize: "14px",
//               color: "#333",
//               borderBottom: "1px solid #eee",
//             }}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#f5f5f5")}
//             onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
//           >
//           Files
            
//           </li>
//           </Link>
//      <Link to="/settings">
//           <li className='brand-drop'
//             style={{
//               padding: "10px 15px",
//               cursor: "pointer",
//               fontSize: "14px",
//               color: "#333",
//               borderBottom: "1px solid #eee",
//             }}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#f5f5f5")}
//             onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
//           >
//             Settings
//           </li>
//           </Link>
//           <li className='brand-drop'
//             style={{
//               padding: "10px 15px",
//               cursor: "pointer",
//               fontSize: "14px",
//               color: "#333",
//               borderBottom: "1px solid #eee",
//             }}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#f5f5f5")}
//             onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
//           >
//             <div className='brand-list'
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               <img
//                 src="https://i.ibb.co/JthbBQH/Group-1357.png" // Replace with Xero logo URL
//                 alt="Xero"
//                 style={{
//                   width: "20px",
//                   height: "20px",
//                   marginRight: "10px",
//                   borderRadius: "4px",
//                 }}
//               />
//               Demo Company (NZ)
//             </div>
//           </li>
//           <li className='brand-drop'
//             style={{
//               padding: "10px 15px",
//               cursor: "pointer",
//               fontSize: "14px",
//               color: "#333",
//             }}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#f5f5f5")}
//             onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
//           >
//             <div className='brand-list'
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               <span
//                 style={{
//                   width: "20px",
//                   height: "20px",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   backgroundColor: "#f5f5f5",
//                   borderRadius: "50%",
//                   fontSize: "16px",
//                   fontWeight: "bold",
//                   color: "#666",
//                   marginRight: "10px",
//                 }}
//               >
//                 +
//               </span>
//               Add a new organisation
//             </div>
//           </li>
//         </ul>
//       )}
//       </div>

//       {/* Toggle button on the right */}
      
//     </div>
//       <div style={{ position: "relative", width: "fit-content", backgroundColor: "#f4f6f9", borderRadius: "10px" }}>
//         <IoSearchOutline
//           style={{ color: "black", position: "absolute", zIndex: "1050", top: "50%", left: "10px", transform: "translateY(-50%)", fontSize: "20px" }}
//         />
//         <input
//           className="p-2 rounded-3"
//           type="text"
//           placeholder="Search..."
//           style={{ marginLeft: "37px", border: "0", outline: "0", backgroundColor: "#f4f6f9", width: "100%" }}
//         />
//       </div>

//       <div className="dropdown d-flex">
       
//         <div className="py-2 rounded-2 me-3" style={{ cursor: "pointer", border: "1px solid lightgray" }}>
//           <img className="ms-3" src={pic} alt="Icon" />
//           <img className="ms-3" src={pic1} alt="Icon" />
//           <a onClick={() => setIsCalendarOpen(!isCalendarOpen)}> <img
//             className="ms-3 calendar-image"
//             src={pic2}
//             alt="Calendar"
//              // Toggle calendar
//           /></a>
          
//           <FaRegBell className="me-3 ms-3 text-dark" style={{ fontSize: "20px" }} />
//         </div>

//         {isCalendarOpen && (
//           <div className="custom-calendar-container">
//             <div className="custom-calendar-header">
//               <button className="calendar-btn" onClick={prevMonth}>&#8249;</button>
//               <span>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</span>
//               <button className="calendar-btn" onClick={nextMonth}>&#8250;</button>
//             </div>
//             <div className="custom-calendar-grid">
//               <div className="calendar-day-header">Mo</div>
//               <div className="calendar-day-header">Tu</div>
//               <div className="calendar-day-header">We</div>
//               <div className="calendar-day-header">Th</div>
//               <div className="calendar-day-header">Fr</div>
//               <div className="calendar-day-header">Sa</div>
//               <div className="calendar-day-header">Su</div>
//               {renderCalendarDays()}
//             </div>
//           </div>
//         )}

//         <div
//           className="fw-bold p-1 rounded-4 profile d-flex align-items-center"
//           style={{ backgroundColor: "white", cursor: "pointer" }}
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <img style={{ width: "40px", borderRadius: "50%" }} src={profile} alt="profile" />
//           <span className="text-dark ms-2 me-3" style={{ fontWeight: "500" }}>Alex</span>
//         </div>

//         <ul className="dropdown-menu dropdown-menu-end">
//           <li className="profile-icon">
//             <Link className="dropdown-item" to="/dashboard">
//               <i className="fa-solid fa-house"></i> Home
//             </Link>
//             <Link className="dropdown-item" to="/Profile">
//               <i className="fa-solid fa-user"></i> Profile
//             </Link>
//             <Link className="dropdown-item" to="/settings">
//               <i className="fa-solid fa-sliders"></i> Settings
//             </Link>
//             <Link className="dropdown-item" to="/">
//               <i className="fa-solid fa-right-from-bracket"></i> Logout
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Header;
