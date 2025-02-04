// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import "../App.css"; // Keep this if you have custom styles

// const TicketCard = () => {
//   return (
//     <div className="page-wrapper">
//     <div className="container-fluid p-4">
//       <div className="row">
//         {/* Left Section */}
//         <div className="col-md-8">
//           <div className="card">
//             <div className="card-header bg-light">
//               <h5 className="mb-0">Marketing - All open (1)</h5>
//             </div>
//             <div className="card-body">
//               {/* Email Content */}
//               <div className="mb-4 text-start">
//                 <h6 className="fw-bold">Ben Price</h6>
//                 <p>test</p>
//                 <p>Kind regards,</p>
//               </div>

//               {/* Signature Section */}
//               <div className="d-flex align-items-start">
//                    <div
//                    className="rounded-circle "
//                    style={{
//                     backgroundColor:'#101061',
//                    width: "120px",
//                    height: "120px",
//                    marginRight: "25px",
//                    marginTop: "80px",
//                       }}
//                   ></div>
//                   <div
//                className="text-start"
//                style={{
//                  borderLeft: "2px solid #000", 
//                   paddingLeft: "25px", 
//                      }}
//                 >
//     <p className="fw-bold mb-1">Benjamin Price</p>
//     <p className="mb-1">Managing Director, BPAV Technology Group Ltd</p>
//     <p className="mb-1">
//       Email: <a href="mailto:ben.price@bpav.global">ben.price@bpav.global</a>
//     </p>
//     <p className="mb-1">Mobile: 5708363882</p>
//     <p className="mb-1">UK Main Line: 07309439802 || DD 1000</p>
//     <p className="mb-1">USA Main Line: +13476529667</p>
//     <p className="mb-1">Support Desk: support@bpav.global</p>
//     <p className="mb-1">Accounts Team: accounts@bpav.global</p>
//     <p className="mb-1">Sales Team: sales@bpav.global</p>
//     <p className="mb-1">
//       Website: <a href="https://www.bpav.global">www.bpav.global</a>
//     </p>
//     <p>Address: Devonshire House, Basingstoke, RG24 8PE</p>

//     {/* Icons */}
//     <div className="d-flex gap-2 mt-2">
//       <i className="fa-brands fa-whatsapp"></i>
//       <i className="fa-brands fa-linkedin-in"></i>
//       <i className="fa-brands fa-facebook"></i>
//       <i className="fa-brands fa-x-twitter"></i>
//       <i className="fa-brands fa-instagram"></i>
//       <i className="fa-brands fa-youtube"></i>
//       <i className="fa-solid fa-location-dot"></i>
//     </div>
//   </div>
// </div>


//               <hr />
//               <p className="text-muted small">
//                 <strong>DISCLAIMER:</strong> [controlLabs] software are service offerings provided by BPAV Technology
//                 Group Ltd. The contents of this email and any attachments are intended for the named recipient(s) only.
//                 If you have received this email by mistake, please notify the sender immediately and do not disclose
//                 the contents to anyone or make copies. Please consider the environment before printing this email.
//                 Copyright BPAV Technology Group Ltd | All rights reserved | Company Number No. 14304458 | VAT No.
//                 423338514
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="col-md-4">
//           <div className="card" style={{height:"655px"}}>
//             <div className="card-body">
//               <div className="mb-4 text-start">
               
//                 <p>
//                   Ticket owner: <br />
//                   <strong>Yvonne Osawa</strong>
//                 </p>
//                 <p>
//                   Pipeline: <br />
//                   <strong>Marketing Pipeline</strong>
//                 </p>
//                 <p>
//                   Ticket Status: <br />
//                   <strong>New</strong>
//                 </p>
//               </div>
//               <hr />
//               <div>
//                 <div className="d-flex justify-content-between py-2 border-bottom">
//                   <p className="mb-0">Ticket Summary</p>
//                 </div>
//                 <div className="d-flex justify-content-between py-2 border-bottom">
//                   <p className="mb-0">About this ticket</p>
//                   <button className="btn p-0" style={{color:'blue'}}><b>Actions</b></button>
//                 </div>
//                 <div className="d-flex justify-content-between py-2 border-bottom">
//                   <p className="mb-0">Contacts (1)</p>
//                   <button className="btn  p-0" style={{color:'blue'}}><b>+ Add</b></button>
//                 </div>
//                 <div className="d-flex justify-content-between py-2 border-bottom">
//                   <p className="mb-0">Companies (1)</p>
//                   <button className="btn  p-0"style={{color:'blue'}}><b>+ Add</b></button>
//                 </div>
//                 <div className="d-flex justify-content-between py-2 border-bottom">
//                   <p className="mb-0">Tickets (0)</p>
//                   <button className="btn  p-0"style={{color:'blue'}}><b>+ Add</b></button>
//                 </div>
//                 <div className="d-flex justify-content-between py-2 border-bottom">
//                   <p className="mb-0">Tasks (0)</p>
//                   <button className="btn btn-primary p-0 " style={{width:'50px'}}>New</button>
//                   <button className="btn p-0"style={{color:'blue'}}><b>Create Task</b></button>
//                 </div>
//                 <div className="d-flex justify-content-between py-2 border-bottom">
//                   <p className="mb-0">Attachments</p>
//                   <button className="btn  p-0 " style={{color:'blue'}}><b>+ Add</b></button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default TicketCard;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TicketCard = () => {
  return (
    <div className="page-wrapper" >
      <div className="container-fluid p-4">
        {/* Top Header Section */}
        <div
          className="d-flex align-items-center justify-content-between p-2"
          style={{
            borderBottom: "1px solid #ddd",
            backgroundColor: "#fff",
          }}
        >
          {/* Left Section */}
          <div className="d-flex" style={{ gap: "10px" }}>
            <i className="fa-solid fa-arrow-left" style={{ cursor: "pointer" }}></i>
            <i className="fa-solid fa-address-book" style={{ cursor: "pointer" }}></i>
            <i className="fa-solid fa-sliders" style={{ cursor: "pointer" }}></i>
          </div>

          {/* Center Section */}
          <div className="d-flex align-items-center">
            <i className="bi bi-star text-primary fs-5 me-2"></i>
            <div>
              <small className="text-muted">
                <b>test</b> | Ben Price from <span className="text-primary">Bpav | #377990113</span>
              </small>
            </div>
          </div>

          {/* Right Section */}
          <div className="d-flex align-items-center">
            <span
              className="badge bg-danger text-white me-3"
              style={{
                padding: "8px 12px",
                fontSize: "12px",
              }}
            >
              Reply overdue
            </span>
            <div className="dropdown me-3">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Actions
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item">Option 1</button>
                </li>
                <li>
                  <button className="dropdown-item">Option 2</button>
                </li>
              </ul>
            </div>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-three-dots-vertical"></i>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-md-3 col-sm-12">
            <div
              className="card"
              style={{
                height: "100vh",
                border: "1px solid #ddd",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="card-body">
                <div
                  className="card-header bg-light"
                  style={{
                    borderBottom: "1px solid #ddd",
                    paddingBottom: "10px",
                  }}
                >
                  <h5 className="mb-0" style={{ fontSize: "16px" }}>
                    Marketing - All open (1)
                  </h5>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  <span>Text</span>
                  <input
                    type="text"
                    placeholder="8 Aug"
                    style={{
                      border: "none",
                      textAlign: "end",
                      backgroundColor: "#f9f9f9",
                      width: "70px",
                    }}
                  />
                </div>
                <p style={{ textAlign: "start", marginTop: "10px", fontSize: "14px" }}>
                  Ben Price <br />
                  test kind regards , Benjamin Price Managing
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="col-md-6 col-sm-12">
            <div
              className="card"
              style={{
                width: "100%",
                border: "1px solid #ddd",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="card-body">
                <div className="mb-4 text-start">
                  <h6 className="fw-bold" style={{ fontSize: "18px" }}>
                    Ben Price
                  </h6>
                  <p style={{ fontSize: "14px" }}>test</p>
                  <p style={{ fontSize: "14px" }}>Kind regards,</p>
                </div>

                {/* Signature Section */}
                <div className="d-flex align-items-start">
                  <div
                    className="rounded-circle"
                    style={{
                      backgroundColor: "#101061",
                      width: "120px",
                      height: "120px",
                      marginRight: "25px",
                      marginTop: "80px",
                    }}
                  ></div>
                  <div
                    className="text-start"
                    style={{
                      borderLeft: "2px solid #000",
                      paddingLeft: "25px",
                    }}
                  >
                    <p className="fw-bold mb-1">Benjamin Price</p>
                    <p className="mb-1">Managing Director, BPAV Technology Group Ltd</p>
                    <p className="mb-1">
                      Email: <a href="mailto:ben.price@bpav.global">ben.price@bpav.global</a>
                    </p>
                    <p className="mb-1">Mobile: 5708363882</p>
                    <p className="mb-1">UK Main Line: 07309439802 || DD 1000</p>
                    <p className="mb-1">USA Main Line: +13476529667</p>
                    <p className="mb-1">Support Desk: support@bpav.global</p>
                    <p className="mb-1">Accounts Team: accounts@bpav.global</p>
                    <p className="mb-1">Sales Team: sales@bpav.global</p>
                    <p className="mb-1">
                      Website: <a href="https://www.bpav.global">www.bpav.global</a>
                    </p>
                    <p>Address: Devonshire House, Basingstoke, RG24 8PE</p>

                    <div className="d-flex gap-2 mt-2">
                      <i className="fa-brands fa-whatsapp"></i>
                      <i className="fa-brands fa-linkedin-in"></i>
                      <i className="fa-brands fa-facebook"></i>
                      <i className="fa-brands fa-x-twitter"></i>
                      <i className="fa-brands fa-instagram"></i>
                      <i className="fa-brands fa-youtube"></i>
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                  </div>
                </div>

                <hr />
                <p className="text-muted small">
                  <strong>DISCLAIMER:</strong> [controlLabs] software are service offerings provided by BPAV Technology
                  Group Ltd. The contents of this email and any attachments are intended for the named recipient(s) only.
                  If you have received this email by mistake, please notify the sender immediately and do not disclose
                  the contents to anyone or make copies. Please consider the environment before printing this email.
                  Copyright BPAV Technology Group Ltd | All rights reserved | Company Number No. 14304458 | VAT No.
                  423338514
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-md-3 col-sm-12">
            <div
              className="card"
              style={{
                height: "100vh",
                border: "1px solid #ddd",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="card-body">
                <div className="mb-4 text-start">
                  <p>
                    Ticket owner: <br />
                    <strong>Yvonne Osawa</strong>
                  </p>
                  <p>
                    Pipeline: <br />
                    <strong>Marketing Pipeline</strong>
                  </p>
                  <p>
                    Ticket Status: <br />
                    <strong>New</strong>
                  </p>
                </div>
                <hr />
                <div>
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <p className="mb-0">Ticket Summary</p>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <p className="mb-0">About this ticket</p>
                    <button className="btn p-0" style={{ color: "blue" }}>
                      <b>Actions</b>
                    </button>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <p className="mb-0">Contacts (1)</p>
                    <button className="btn  p-0" style={{ color: "blue" }}>
                      <b>+ Add</b>
                    </button>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <p className="mb-0">Companies (1)</p>
                    <button className="btn  p-0" style={{ color: "blue" }}>
                      <b>+ Add</b>
                    </button>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <p className="mb-0">Tickets (0)</p>
                    <button className="btn  p-0" style={{ color: "blue" }}>
                      <b>+ Add</b>
                    </button>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <p className="mb-0">Tasks (0)</p>
                    <button
                      className="btn btn-primary p-0"
                      style={{
                        width: "50px",
                        fontSize: "12px",
                      }}
                    >
                      New
                    </button>
                    <button className="btn  p-0" style={{ color: "blue" }}>
                      <b>Create</b>
                    </button>
                  </div>
                  <div className="d-flex justify-content-between py-2 border-bottom">
                    <p className="mb-0">Attachments</p>
                    <button className="btn  p-0" style={{ color: "blue" }}>
                      <b>+ Add</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;