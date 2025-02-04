import React from 'react'
import SideBar from './SideBar';

// const commonOptions = {
//   responsive: true,
//   maintainAspectRatio: false,
//   plugins: {
//       legend: {
//           position: 'bottom',
//       }
//   }
// };

// // Tickets Created Over Time Chart
// const ticketsCtx = document.getElementById('ticketsChart').getContext('2d');
// new Chart(ticketsCtx, {
//   type: 'bar',
//   data: {
//       labels: ['Dec 2023', 'Feb 2024', 'Apr 2024', 'Jun 2024', 'Aug 2024', 'Oct 2024', 'Dec 2024'],
//       datasets: [{
//           label: 'Count of Tickets',
//           data: [153, 177, 168, 149, 230, 155, 114],
//           backgroundColor: '#ff9f87',
//           borderRadius: 4
//       }]
//   },
//   options: {
//       ...commonOptions,
//       scales: {
//           y: {
//               beginAtZero: true,
//               grid: {
//                   drawBorder: false
//               }
//           },
//           x: {
//               grid: {
//                   display: false
//               }
//           }
//       }
//   }
// });

// // First Reply Average Chart
// const replyTimeCtx = document.getElementById('replyTimeChart').getContext('2d');
// new Chart(replyTimeCtx, {
//   type: 'bar',
//   data: {
//       labels: ['Dec 2023', 'May 2024', 'Oct 2024'],
//       datasets: [{
//           label: 'Average Time to First Reply',
//           data: [0, 5.1, 2.5],
//           backgroundColor: '#ff9f87',
//           borderRadius: 4
//       }]
//   },
//   options: {
//       ...commonOptions,
//       scales: {
//           y: {
//               beginAtZero: true,
//               title: {
//                   display: true,
//                   text: 'Days'
//               }
//           }
//       }
//   }
// });

// // SLA Completion Status Chart
// const slaCtx = document.getElementById('slaChart').getContext('2d');
// new Chart(slaCtx, {
//   type: 'bar',
//   data: {
//       labels: ['Dec 2023', 'Feb 2024', 'Apr 2024', 'Jun 2024', 'Aug 2024', 'Oct 2024', 'Dec 2024'],
//       datasets: [
//           {
//               label: 'SLA completed on time',
//               data: [0, 0, 0, 15, 6, 4, 3],
//               backgroundColor: '#36a2eb',
//               borderRadius: 4
//           },
//           {
//               label: 'SLA completed late',
//               data: [0, 0, 1, 4, 2, 1, 2],
//               backgroundColor: '#ff9f87',
//               borderRadius: 4
//           }
//       ]
//   },
//   options: {
//       ...commonOptions,
//       scales: {
//           y: {
//               beginAtZero: true,
//               stacked: true
//           },
//           x: {
//               stacked: true
//           }
//       }
//   }
// });

// // Messages Received Chart
// const messagesCtx = document.getElementById('messagesChart').getContext('2d');
// new Chart(messagesCtx, {
//   type: 'bar',
//   data: {
//       labels: ['Jun 2024', 'Aug 2024', 'Oct 2024', 'Dec 2024'],
//       datasets: [{
//           label: 'Count of messages received',
//           data: [391, 386, 252, 123],
//           backgroundColor: '#ff9f87',
//           borderRadius: 4
//       }]
//   },
//   options: {
//       ...commonOptions,
//       scales: {
//           y: {
//               beginAtZero: true
//           }
//       }
//   }
// });


const AnalyticView = () => {
  return (
    <div>
         {/* <div className="container mt-5">
    <aside className="sidebar">
      <div className="logo">Help Desk</div>
      <div className="search-box">
        <input type="text" placeholder="Search" />
      </div>
      <nav className="nav-menu">
        <div className="nav-item active">
          <span className="nav-icon">📊</span>
          <span>Summary</span>
        </div>
        <div className="nav-item">
          <span className="nav-icon">📈</span>
          <span>Analyze</span>
        </div>
        <div className="nav-item">
          <span className="nav-icon">📥</span>
          <span>Unassigned</span>
          <span className="count">0</span>
        </div>
        <div className="nav-item">
          <span className="nav-icon">👤</span>
          <span>Assigned To Me</span>
          <span className="count">37</span>
        </div>
      </nav>
    </aside>
    <main className="main-content">
      <header className="top-bar">
        <div className="filters">
          <select className="filter-select">
            <option>Team</option>
          </select>
          <select className="filter-select">
            <option>Support Rep</option>
          </select>
          <select className="filter-select">
            <option>Channel</option>
          </select>
          <select className="filter-select">
            <option>Pipeline</option>
          </select>
          <select className="filter-select">
            <option>Category</option>
          </select>
        </div>
        <button className="dashboard-filters">Dashboard filters</button>
      </header>
      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">
            <h3>Tickets created over time</h3>
            <div className="card-period">IN THE LAST 365 DAYS | MONTHLY</div>
            <div className="card-actions">
              <button className="card-action-btn">⋮</button>
            </div>
          </div>
          <div className="chart-container">
            <canvas id="ticketsChart" />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>First reply average over time</h3>
            <div className="card-period">IN THE LAST 365 DAYS | MONTHLY</div>
            <div className="card-actions">
              <button className="card-action-btn">⋮</button>
            </div>
          </div>
          <div className="chart-container">
            <canvas id="replyTimeChart" />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>First response SLA completion status</h3>
            <div className="card-period">IN THE LAST 365 DAYS | MONTHLY</div>
            <div className="card-actions">
              <button className="card-action-btn">⋮</button>
            </div>
          </div>
          <div className="chart-container">
            <canvas id="slaChart" />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>Messages received over time</h3>
            <div className="card-period">IN THE LAST 365 DAYS | MONTHLY</div>
            <div className="card-actions">
              <button className="card-action-btn">⋮</button>
            </div>
          </div>
          <div className="chart-container">
            <canvas id="messagesChart" />
          </div>
        </div>
      </div>
    </main>
  </div> */}
  <div className="d-flex">
        <div
          className="sticky bg-light border-end vh-100"
          // style={{ width: "250px", position: "sticky", top: 0 }}
        >
          <SideBar />
        </div>

        <div className="flex-grow-1">
        <div className="container">
    <header>
      <div className="header-left">
        <h1>Help Desk</h1>
      </div>
      <div className="header-right">
        <div className="filters">
          <select id="team">
            <option>Team</option>
          </select>
          <select id="supportRep">
            <option>Support Rep</option>
          </select>
          <select id="channel">
            <option>Channel</option>
          </select>
          <select id="pipeline">
            <option>Pipeline</option>
          </select>
          <select id="category">
            <option>Category</option>
          </select>
          <button className="dashboard-filters">Dashboard filters</button>
        </div>
      </div>
    </header>
    <div className="dashboard-grid">
      {/* Tickets Created Over Time */}
      <div className="chart-container">
        <div className="chart-header">
          <h2>Tickets created over time</h2>
          <p className="subtitle">IN THE LAST 365 DAYS | MONTHLY</p>
        </div>
        <canvas id="ticketsChart" />
      </div>
      {/* First Reply Average */}
      <div className="chart-container">
        <div className="chart-header">
          <h2>First reply average over time</h2>
          <p className="subtitle">IN THE LAST 365 DAYS | MONTHLY</p>
        </div>
        <canvas id="replyTimeChart" />
      </div>
      {/* SLA Completion Status */}
      <div className="chart-container">
        <div className="chart-header">
          <h2>First response SLA completion status over time</h2>
          <p className="subtitle">IN THE LAST 365 DAYS | MONTHLY</p>
        </div>
        <canvas id="slaChart" />
      </div>
      {/* Messages Received */}
      <div className="chart-container">
        <div className="chart-header">
          <h2>Messages received over time</h2>
          <p className="subtitle">IN THE LAST 365 DAYS | MONTHLY</p>
        </div>
        <canvas id="messagesChart" />
      </div>
    </div>
       </div>
        </div>

  </div>

    </div>
  )
}

export default AnalyticView;
