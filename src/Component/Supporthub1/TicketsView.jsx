import React from 'react'

const TicketsView = () => {
  return (
    <div className="page-wrapper" >
         <div className="container-fluid">
    <div className="row">
      {/* Sidebar */}
      <div className="col-md-3 col-lg-2 sidebar">
        <div className="sidebar-header">
          <h3>Help Desk</h3>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <i className="fas fa-chart-pie" /> Summary
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-chart-bar" /> Analyze
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-inbox" /> Unassigned{" "}
              <span className="badge bg-secondary">0</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-tasks" /> Assigned To Me{" "}
              <span className="badge bg-primary">37</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-folder-open" /> All Open{" "}
              <span className="badge bg-primary">77</span>
            </a>
          </li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="col-md-9 col-lg-10 main-content">
        <div className="row stats-cards mb-4">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h6>ALL OPEN TICKETS</h6>
                <h2>0</h2>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h6>TICKETS CLOSED</h6>
                <h2>0</h2>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h6>TIME TO FIRST REPLY</h6>
                <h2>--</h2>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h6>TIME TO CLOSE</h6>
                <h2>--</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Team Availability */}
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-header">
                <h5>Team availability</h5>
              </div>
              <div className="card-body">
                <div className="team-member d-flex align-items-center mb-3">
                  <img
                    src="https://via.placeholder.com/40"
                    className="rounded-circle me-2"
                  />
                  <div>
                    <h6 className="mb-0">Benjamin Price</h6>
                    <small>Assigned: 37 tickets</small>
                  </div>
                  <span className="ms-auto badge bg-success">Available</span>
                </div>
                <div className="team-member d-flex align-items-center">
                  <img
                    src="https://via.placeholder.com/40"
                    className="rounded-circle me-2"
                  />
                  <div>
                    <h6 className="mb-0">Seif Ashraf</h6>
                    <small>Assigned: 5 tickets</small>
                  </div>
                  <span className="ms-auto badge bg-success">Available</span>
                </div>
              </div>
            </div>
          </div>
          {/* SLA Progress */}
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-header">
                <h5>SLA progress</h5>
              </div>
              <div className="card-body">
                <h6>Current SLA status</h6>
                <div className="progress mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "0%" }}
                    aria-valuenow={0}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    0%
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col">
                    <div className="sla-stat">
                      <i className="fas fa-exclamation-circle text-danger" />
                      <h4>0</h4>
                      <small>Overdue</small>
                    </div>
                  </div>
                  <div className="col">
                    <div className="sla-stat">
                      <i className="fas fa-clock text-warning" />
                      <h4>0</h4>
                      <small>Due soon</small>
                    </div>
                  </div>
                  <div className="col">
                    <div className="sla-stat">
                      <i className="fas fa-check-circle text-primary" />
                      <h4>0</h4>
                      <small>Active</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default TicketsView