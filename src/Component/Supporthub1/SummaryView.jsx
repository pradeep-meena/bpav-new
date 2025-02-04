// import React from 'react';
// import SideBar from './SideBar';


// function SummaryView() {
//   return (
//     <div className="page-wrapper">
//       <div className="d-flex">
//         {/* Sidebar */}
//         <div
//           className="sticky bg-light border-end vh-100"
//           // style={{ width: "250px", position: "sticky", top: 0 }}
//         >
//           <SideBar />
//         </div>

//         {/* Main Content */}
//         <div className="flex-grow-1">
//           <header className="d-flex justify-content-between align-items-center p-3 border-bottom">
//             <h1 className="h4 text-primary">Help Desk</h1>
//             <div className="d-flex gap-2">
//               <button className="btn btn-light">...</button>
//               <button className="btn btn-primary">+</button>
//             </div>
//           </header>

//           <div className="container-fluid py-4">
//             {/* Summary Cards */}
//             <div className="row g-3">
//               <div className="col-md-4">
//                 <div className="card shadow-sm">
//                   <div className="card-body">
//                     <h5 className="card-title text-primary">All Open Tickets</h5>
//                     <p className="fs-4 mb-0">0</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <div className="card shadow-sm">
//                   <div className="card-body">
//                     <h5 className="card-title text-primary">Tickets Closed</h5>
//                     <p className="fs-4 mb-0">0</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <div className="card shadow-sm">
//                   <div className="card-body">
//                     <h5 className="card-title text-primary">Time to First Reply</h5>
//                     <p className="fs-4 mb-0">--</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Team Availability and SLA Progress */}
//             <div className="row g-3 mt-4">
//               <div className="col-md-6">
//                 <div className="card shadow-sm">
//                   <div className="card-body">
//                     <h5 className="card-title text-primary">Team Availability</h5>
//                     <div className="d-flex align-items-center">
//                       <div
//                         className="rounded-circle bg-secondary me-3"
//                         style={{ width: "40px", height: "40px" }}
//                       ></div>
//                       <div>
//                         <p className="mb-0 text-primary">Benjamin Price</p>
//                         <small className="text-muted">Assigned: 37 tickets</small>
//                       </div>
//                       <span className="ms-auto text-success">Available</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="card shadow-sm">
//                   <div className="card-body">
//                     <h5 className="card-title text-primary">SLA Progress</h5>
//                     <div className="row text-center">
//                       <div className="col">
//                         <h6 className="text-danger">Overdue</h6>
//                         <p className="fs-5 mb-0">0</p>
//                       </div>
//                       <div className="col">
//                         <h6 className="text-warning">Due Soon</h6>
//                         <p className="fs-5 mb-0">0</p>
//                       </div>
//                       <div className="col">
//                         <h6 className="text-primary">Active</h6>
//                         <p className="fs-5 mb-0">0</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Today's Tickets by Channel */}
//             <div className="mt-4">
//               <div className="card shadow-sm">
//                 <div className="card-body">
//                   <h5 className="card-title text-primary">
//                     Today's Tickets by Channel
//                   </h5>
//                   <div className="row text-center">
//                     <div className="col">
//                       <p className="mb-1">Live Chat</p>
//                       <h5 className="text-primary">0</h5>
//                     </div>
//                     <div className="col">
//                       <p className="mb-1">Email</p>
//                       <h5 className="text-primary">0</h5>
//                     </div>
//                     <div className="col">
//                       <p className="mb-1">Forms</p>
//                       <h5 className="text-primary">0</h5>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SummaryView;

import React from "react";

const SummaryView = () => {
  return (
    <div className="page-wrapper">
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col">
          <div
            className="d-flex justify-content-between"
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
            }}
          >
            <div>
              <h6>ALL OPEN TICKETS</h6>
              <p>0</p>
            </div>
            <div>
              <h6>TICKETS CLOSED</h6>
              <p>0</p>
            </div>
            <div>
              <h6>TIME TO FIRST REPLY</h6>
              <p>--</p>
            </div>
            <div>
              <h6>TIME TO CLOSE</h6>
              <p>--</p>
            </div>
            <div>
              <h6>CES</h6>
              <p>--</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="col-lg-6 mb-4">
          <h6 className="card-title mb-5">Team availability</h6>
          <div className="card shadow-sm" style={{ height: "280px" }}>
            <div className="card-body">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>User</p>
                <span>All User</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className="text-start ">
                  Benjamin Price <br />
                  <span>Assigned: 37 tickets</span>
                </p>
                <strong >Available</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className="text-start">
                  Seif Ashraf <br />
                  <span>Assigned: 5 tickets</span>
                </p>
                <strong c>Available</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <h6 className="card-title mb-5">SLA progress</h6>
          <div className="card shadow-sm" style={{ height: "280px" }}>
            <div className="card-body">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Current SLA status</p>
                <span className="btn-primary">Time to close</span>
              </div>
              <p className="text-start">
                0% on target for <strong>time to close</strong>
              </p>
              <div className="d-flex justify-content-around">
                <div className="text-center">
                <i className="bi bi-clock text-danger rounded-circle p-3 fs-4 fs-4"
                 style={{
                  backgroundColor: "rgb(236, 225, 225)", 
                 display: "inline-flex", 
                justifyContent: "center", 
               alignItems: "center",
               width: "60px", 
                 height: "60px", 
                      }}></i>
                  <p>Overdue</p>
                  <p>0</p>
                </div>
                <div className="text-center">
                <i className="bi bi-clock text-warning rounded-circle p-3 fs-4 fs-4"
                 style={{
                  backgroundColor: "rgb(239, 226, 220)", 
                 display: "inline-flex", 
                justifyContent: "center", 
               alignItems: "center",
               width: "60px", 
                 height: "60px", 
                      }}
                ></i>
                  <p>Due soon</p>
                  <p>0</p>
                </div>
                <div className="text-center">
                    <i
              className="bi bi-clock text-secondary rounded-circle p-3 fs-4"
                  style={{
                     backgroundColor: "rgba(200, 193, 193, 0.29)", 
                    display: "inline-flex", 
                   justifyContent: "center", 
                  alignItems: "center",
                  width: "60px", 
                    height: "60px", 
                         }}
                 ></i>
            <p>Active</p>
             <p>0</p>
                 </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="col-lg-6 mb-4">
          <h6 className="card-title mb-5">Today's tickets by channel</h6>
          <div className="card shadow-sm" style={{ height: "280px" }}>
            <div className="card-body" style={{ padding: "10px" }}>
              <table style={{ borderCollapse: "collapse", border: "none", width: "100%" }}>
                <thead>
                  <tr>
                    <th style={{ border: "none" }}>Channel</th>
                    <th style={{ border: "none" }}>Today's tickets</th>
                    <th style={{ border: "none" }}>All open tickets</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: "none" }}>
                      <i className="bi bi-chat-dots me-2"></i>Live chat
                    </td>
                    <td style={{ border: "none" }}>0</td>
                    <td style={{ border: "none" }}>0</td>
                  </tr>
                  <tr>
                    <td style={{ border: "none" }}>
                      <i className="bi bi-envelope me-2"></i>Email
                    </td>
                    <td style={{ border: "none" }}>0</td>
                    <td style={{ border: "none" }}>0</td>
                  </tr>
                  <tr>
                    <td style={{ border: "none" }}>
                      <i className="bi bi-ui-checks-grid me-2"></i>Forms
                    </td>
                    <td style={{ border: "none" }}>0</td>
                    <td style={{ border: "none" }}>0</td>
                  </tr>
                  <tr>
                    <td style={{ border: "none" }}>
                      <i className="bi bi-telephone me-2"></i>Calling
                    </td>
                    <td style={{ border: "none" }}>0</td>
                    <td style={{ border: "none" }}>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <h6 className="card-title mb-5">Calling performance</h6>
          <div className="card shadow-sm" style={{ height: "280px" }}>
            <div className="card-body" style={{ padding: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>
                <div className="text-center">
                  <i className="bi bi-telephone-fill rounded-circle p-3 fs-4" 
                   style={{
                    backgroundColor: "rgba(200, 193, 193, 0.29)", 
                   display: "inline-flex", 
                  justifyContent: "center", 
                 alignItems: "center",
                 width: "60px", 
                   height: "60px", 
                        }}></i>
                  <p>Calls completed</p>
                  <p>0</p>
                </div>
                <div className="text-center">
                
                  <i className="bi bi-clock text-warning  rounded-circle p-3 fs-4"
                   style={{
                    backgroundColor: "rgba(200, 193, 193, 0.29)", 
                   display: "inline-flex", 
                  justifyContent: "center", 
                 alignItems: "center",
                 width: "60px", 
                   height: "60px", 
                        }}></i>
                  <p>Call duration</p>
                  <p>--</p>
                </div>
                <div className="text-center">
                  <i className="bi bi-x-circle rounded-circle p-3 fs-4"
                   style={{
                    backgroundColor: "rgba(200, 193, 193, 0.29)", 
                   display: "inline-flex", 
                  justifyContent: "center", 
                 alignItems: "center",
                 width: "60px", 
                   height: "60px", 
                        }}></i>
                  <p>Calls missed</p>
                  <p>0</p>
                </div>
              </div>
              <p className="mt-3 text-center">
                <small>All HubSpot Calling data included</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SummaryView;
