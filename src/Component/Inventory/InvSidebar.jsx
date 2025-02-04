

import React from 'react';
import { all_routes } from '../router/all_routes';
import { Link } from 'react-router-dom';

// const InvDashboard = () => {
//   return (
//     <div className="d-flex flex-column vh-100 bg-light p-3" style={{ width: '250px' }}>
//       <ul className="nav nav-pills flex-column mb-auto">
//         <li className="nav-item">
//           <Link to="/new-order" className="nav-link text-dark d-flex align-items-center">
//             <i className="bi bi-plus-circle me-2"></i> New order
//           </Link>
//         </li>
//         <li>
//           <Link to="/dashboard" className="nav-link text-dark d-flex align-items-center">
//             <i className="bi bi-speedometer2 me-2"></i> Dashboard
//           </Link>
//         </li>
//         <li>
//           <Link to="/calendar" className="nav-link text-dark d-flex align-items-center">
//             <i className="bi bi-calendar me-2"></i> Calendar
//           </Link>
//         </li>
//         <li>
//           <Link to="/orders" className="nav-link text-dark d-flex align-items-center">
//             <i className="bi bi-file-earmark-text me-2"></i> Orders
//           </Link>
//         </li>
//         <li>
//           <Link to="/customers" className="nav-link text-dark d-flex align-items-center">
//             <i className="bi bi-people me-2"></i> Customers
//           </Link>
//         </li>
//         <li>
//           <Link to="/inventory" className="nav-link text-dark d-flex align-items-center">
//             <i className="bi bi-box-seam me-2"></i> Inventory
//           </Link>
//         </li>
//         <li>
//           <Link to="/documents" className="nav-link text-dark d-flex align-items-center">
//             <i className="bi bi-file-earmark me-2"></i> Documents
//           </Link>
//         </li>
//         <li>
//           <Link to="/scan-barcode" className="nav-link text-dark d-flex align-items-center">
//             <i className="bi bi-upc-scan me-2"></i> Scan a barcode
//           </Link>
//         </li>
//         <li>
//           <Link to="/help-center" className="nav-link text-dark d-flex align-items-center">
//             <i className="bi bi-question-circle me-2"></i> Help center
//           </Link>
//         </li>
//         <li>
//           <Link to="/settings" className="nav-link text-dark d-flex align-items-center">
//             <i className="bi bi-gear me-2"></i> Settings
//           </Link>
//         </li>
//       </ul>
//       <div className="mt-auto">
//         <Link to="/profile" className="nav-link text-dark d-flex align-items-center">
//           <div className="bg-secondary rounded-circle text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
//             BTS
//           </div>
//           <span className="ms-2">BTS Big</span>
//         </Link>
//       </div>
//     </div>
//   );
// };

export const InvSidebar = () => {
  return (
<div className='page-wrapper'>
<div className="d-flex flex-column bg-light p-3 vh-100 w-15 w-sm-3" style={{
      width: '250px',
      overflowY: 'auto',
      scrollbarWidth: 'thin',  // Firefox: make scrollbar thinner
      scrollbarColor: '#333 rgb(119, 113, 113)'  // Firefox: thumb color and track color
    }}>
      <h4 className="mb-3" style={{ fontSize: '1.2rem' }}></h4>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Search" style={{ fontSize: '0.9rem' }} />
      </div>
      <ul className="nav flex-column" style={{ listStyleType: 'none', paddingLeft: '0' }}>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <Link to={all_routes.inventorydashboard} className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="Summary">
            <div className="d-flex align-items-center">
            <i className="bi bi-plus-circle me-2"></i> New order
            </div>
            <span className="badge bg-secondary" style={{ backgroundColor: '#ffffff' }}>0</span>
          </Link>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <Link to={all_routes.analytic} className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="Analyze">
            <div className="d-flex align-items-center">
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
            </div>
            <span className="badge bg-secondary ">0</span>
          
          </Link>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="Unassigned">
            <div className="d-flex align-items-center">
            <i className="bi bi-calendar me-2"></i> Calendar
            </div>
            <span className="badge bg-secondary">0</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="Assigned To Me">
            <div className="d-flex align-items-center">
            <i className="bi bi-file-earmark-text me-2"></i> Orders
            </div>
            <span className="badge bg-secondary">37</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="My Team's Unassigned">
            <div className="d-flex align-items-center">
            <i className="bi bi-people me-2"></i> Customers
            </div>
            <span className="badge bg-secondary">0</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="My Team's Open">
            <div className="d-flex align-items-center">
            <i className="bi bi-box-seam me-2"></i> Inventory
            </div>
            <span className="badge bg-secondary">42</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="All Open">
            <div className="d-flex align-items-center">
            <i className="bi bi-file-earmark me-2"></i> Documents
            </div>
            <span className="badge bg-secondary">77</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="Following">
            <div className="d-flex align-items-center">
            <i className="bi bi-upc-scan me-2"></i> Scan a barcode
            </div>
            <span className="badge bg-secondary">0</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="My Mentions">
            <div className="d-flex align-items-center">
            <i className="bi bi-question-circle me-2"></i> Help center
            </div>
            <span className="badge bg-secondary">0</span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="All Closed">
            <div className="d-flex align-items-center">
            <i className="bi bi-gear me-2"></i> Settings
            </div>
            <span className="badge bg-secondary"></span>
          </a>
        </li>
        <li className="nav-item mb-1" style={{ fontSize: '0.9rem' }}>
          <a href="#" className="nav-link text-dark d-flex justify-content-between align-items-center" aria-label="Spam">
            <div className="d-flex align-items-center">
            <div className="bg-secondary rounded-circle text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
            BTS
          </div>
          <span className="ms-2">BTS Big</span>
            </div>
            <span className="badge bg-secondary">297</span>
          </a>
        </li>
       
      </ul>
    </div>
</div>
  );
};

export default InvSidebar;
