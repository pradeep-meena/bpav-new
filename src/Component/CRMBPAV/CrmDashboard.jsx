// import React from 'react';

// const CrmDashboard = () => {
//   return (
//     <div className='page-wrapper'>
        
//   <meta charSet="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Sales Dashboard</title>
  
//   <div className="container mt-3">
//     <div className="d-flex justify-content-between align-items-center mb-3">
//       <h4 className="mb-0">Sales</h4>
//       <a
//         className="text-decoration-none dropdown-toggle"
//         href="#"
//         role="button"
//         id="dropdownMenuLink"
//         data-bs-toggle="dropdown"
//         aria-expanded="felse"
//         style={{ marginLeft: "-650px" }}
//       >
//         Benjamin Price
//       </a>
//       <div className="dropdown">
//         <div className="mt-3 text-end">
//           <a href="#" className="text-decoration-none text-info">
//             Got feedback? We'd love to hear it
//           </a>
//         </div>
//         <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
//           <li>
//             <a className="dropdown-item" href="#">
//               Profile
//             </a>
//           </li>
//           <li>
//             <a className="dropdown-item" href="#">
//               Settings
//             </a>
//           </li>
//           <li>
//             <a className="dropdown-item" href="#">
//               Logout
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//     {/* Tabs */}
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <a className="nav-link active" href="#">
//           Summary
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">
//           Leads
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">
//           Deals
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">
//           Schedule
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">
//           Feed
//         </a>
//       </li>
//     </ul>
//     <div className="container mt-4">
//       {/* Tasks Overview */}
//       <div className="row mb-4">
//         <div className="col">
//           <div className="card p-3">
//             <h5>Your tasks today</h5>
//             <div className="d-flex justify-content-around text-center mt-3">
//               <div>
//                 <p className="mb-1">CALLS</p>
//                 <h6 className="fs-2">0</h6>
//               </div>
//               <div>
//                 <p className="mb-1">EMAILS</p>
//                 <h6 className="fs-2">0</h6>
//               </div>
//               <div>
//                 <p className="mb-1">TO-DOS</p>
//                 <h6 className="text-info fs-2">2</h6>
//               </div>
//               <div>
//                 <p className="mb-1">LINKEDIN</p>
//                 <h6 className="fs-2">0</h6>
//               </div>
//               <div>
//                 <p className="mb-1">OVERDUE</p>
//                 <h6 className="text-info fs-2">173</h6>
//               </div>
//               <div>
//                 <p className="mb-1">DUE TOMORROW</p>
//                 <h6 className="fs-2">0</h6>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Guided Actions */}
//       <div className="row mb-4">
//         <div className="col">
//           <div className="card p-3">
//             <h5>Guided actions</h5>
//             <div className="d-flex justify-content-start mt-3">
//               <button className="btn btn-outline-primary me-2">
//                 All actions <span className="badge bg-primary">7</span>
//               </button>
//               <button className="btn btn-outline-primary me-2">
//                 Closing related <span className="badge bg-primary">5</span>
//               </button>
//               <button className="btn btn-outline-primary">
//                 Prospecting related <span className="badge bg-primary">2</span>
//               </button>
//             </div>
//             {/* Action Cards */}
//             <div className="mt-4">
//               <div className="card mb-3 p-3">
//                 <p>
//                   Send a follow-up email to <strong>Scott Davies</strong>
//                 </p>
//                 <p className="text-muted mb-1">
//                   Scott Davies opened your last email but hasn’t replied yet
//                 </p>
//                 <a href="#" className="text-primary">
//                   Follow up with Scott Davies
//                 </a>
//                 <div className="d-flex justify-content-between mt-2">
//                   <div>
//                     <p className="mb-0">
//                       <strong>Coller Capital - London Support Contract</strong>
//                     </p>
//                     <p className="mb-0">Amount: £105,400.00</p>
//                     <p>Close date: 12/12/2024</p>
//                   </div>
//                   <div>
//                     <button className="btn btn-outline-secondary btn-sm">
//                       ...
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="card mb-3 p-3">
//                 <p>
//                   Send a follow-up email to <strong>Scott Davies</strong>
//                 </p>
//                 <p className="text-muted mb-1">
//                   Scott Davies opened your last email but hasn’t replied yet
//                 </p>
//                 <a href="#" className="text-primary">
//                   Follow up with Scott Davies
//                 </a>
//                 <div className="d-flex justify-content-between mt-2">
//                   <div>
//                     <p className="mb-0">
//                       <strong>
//                         Coller Capital - Global Strategy Consultancy
//                       </strong>
//                     </p>
//                     <p className="mb-0">Amount: £35,000.00</p>
//                     <p>Close date: 15/12/2024</p>
//                   </div>
//                   <div>
//                     <button className="btn btn-outline-secondary btn-sm">
//                       ...
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Schedule */}
//         <div className="col-4">
//           <div className="card p-3">
//             <div className="d-flex">
//               <div className="m-2">
//                 <a href="#">
//                   <h5>Schedule</h5>
//                 </a>
//               </div>
//               <div className="m-2">
//                 <a href="#">
//                   <h5>Insights</h5>
//                 </a>
//               </div>
//               <div className="m-2">
//                 <a href="#">
//                   <h5>Feed</h5>
//                 </a>
//               </div>
//             </div>
//             <p className="text-muted">Today, 25 December</p>
//             <hr />
//             <div>
//               <div className="mb-3">
//                 <p>
//                   <strong>2 To-do tasks</strong>
//                 </p>
//                 <p className="text-muted mb-0">08:00</p>
//               </div>
//               <div className="mb-3">
//                 <p>
//                   <strong>Prospecting new business</strong>
//                 </p>
//                 <p className="text-muted mb-0">11:00</p>
//               </div>
//               <div className="mb-3">
//                 <p>
//                   <strong>Deep Work Focus Time</strong>
//                 </p>
//                 <p className="text-muted mb-0">13:00</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* Bootstrap JS */}
//     {/* Feedback Link */}
//   </div>
//   {/* Bootstrap JS */}

//     </div>
//   )
// }

// export default CrmDashboard;

import React from "react";
import Chart from "react-apexcharts";

const CrmDashboard = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      backgroundColor: "#f7f8fa",
      minHeight: "100vh",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      color:"#5db9cb"
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    buttonGroup: {
      display: "flex",
      gap: "10px",
    },
    button: {
      padding: "8px 16px",
      fontSize: "14px",
      backgroundColor: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: "6px",
      cursor: "pointer",
      color:"#5db9cb",
      transition: "all 0.2s ease",
    },
    filters: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "20px",
    },
    filterButton: {
      fontSize: "14px",
      color: "#5db9cb",
      cursor: "pointer",
    },
    chartsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px",
    },
    chartCard: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "16px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    },
    chartTitle: {
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    chartSubtitle: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "10px",
    },
  };

  // Chart Configurations
  const forecastWonOptions = {
    chart: { type: "bar" },
    xaxis: { categories: ["Oct 2024", "Nov 2024", "Dec 2024"] },
    tooltip: { theme: "light" },
  };
  const forecastWonSeries = [
    { name: "Pipeline", data: [400000, 200000, 300000] },
    { name: "Closed won", data: [75725, 129977.5, 313320] },
  ];

  const forecastRevenueOptions = {
    chart: { type: "bar", horizontal: true },
    xaxis: { categories: ["Benjamin Price", "Andrew Ashraf", "Ezzat Kiwan"] },
    tooltip: { theme: "light" },
  };
  const forecastRevenueSeries = [
    { name: "Pipeline", data: [308060, 3090, 2170] },
  ];

  const dealClosedOptions = {
    chart: { type: "line" },
    xaxis: { categories: ["25 Nov", "30 Nov", "5 Dec", "10 Dec"] },
    tooltip: { theme: "light" },
  };
  const dealClosedSeries = [
    { name: "Closed Amount", data: [20000, 30000, 50000, 60000] },
    { name: "Revenue Goal", data: [50000, 50000, 50000, 50000] },
  ];

  const dealsCreatedOptions = {
    chart: { type: "bar", horizontal: true },
    xaxis: { categories: ["Benjamin Price", "Unknown user", "Ezzat Kiwan"] },
    tooltip: { theme: "light" },
  };
  const dealsCreatedSeries = [{ name: "Deals", data: [28, 2, 1] }];

  return (
    <div className="page-wrapper">
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Sales</h1>
        <div style={styles.buttonGroup}>
          <button style={styles.button}>Create dashboard</button>
          <button style={styles.button}>Actions</button>
          <button style={styles.button}>Share</button>
          <button style={styles.button}>Add report</button>
        </div>
      </div>

      {/* Filters */}
      <div style={styles.filters}>
        <div>
          <span style={styles.filterButton}>+ Quick filters</span>
          <span style={styles.filterButton}>| Advanced filters</span>
        </div>
        <span style={{ color: "#5db9cb", fontSize: "14px" }}>Manage dashboards</span>
      </div>

      {/* Charts Grid */}
      <div style={styles.chartsGrid}>
        {/* Forecast Won This Month */}
        <div style={styles.chartCard}>
          <div style={styles.chartTitle}>Forecast Won This Month</div>
          <div style={styles.chartSubtitle}>THIS ENTIRE QUARTER | MONTHLY</div>
          <Chart
            options={forecastWonOptions}
            series={forecastWonSeries}
            type="bar"
            height={250}
          />
        </div>

        {/* Forecast Revenue This Month */}
        <div style={styles.chartCard}>
          <div style={styles.chartTitle}>Forecast Revenue This Month</div>
          <div style={styles.chartSubtitle}>THIS ENTIRE MONTH</div>
          <Chart
            options={forecastRevenueOptions}
            series={forecastRevenueSeries}
            type="bar"
            height={250}
          />
        </div>

        {/* Deal Closed Totals vs Goal */}
        <div style={styles.chartCard}>
          <div style={styles.chartTitle}>Deal Closed Totals vs Goal</div>
          <div style={styles.chartSubtitle}>IN THE LAST 30 DAYS</div>
          <Chart
            options={dealClosedOptions}
            series={dealClosedSeries}
            type="line"
            height={250}
          />
        </div>

        {/* Deals Created */}
        <div style={styles.chartCard}>
          <div style={styles.chartTitle}>Deals Created</div>
          <div style={styles.chartSubtitle}>THIS ENTIRE MONTH</div>
          <Chart
            options={dealsCreatedOptions}
            series={dealsCreatedSeries}
            type="bar"
            height={250}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default CrmDashboard;
