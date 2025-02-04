import React from 'react'
// import { all_routes } from '../router/all_routes';
import { Link } from 'react-router-dom';


const SupportDash = () => {
  return (
    <div className='page-wrapper'>
         <div className="container-fluid">
    <div className="row">
      {/* Sidebar */}
      <div className="col-md-3 col-lg-2 sidebar">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="m-0">Help Desk</h4>
          <div>
            <button className="btn btn-sm btn-light">...</button>
            <button className="btn btn-sm btn-light">+</button>
          </div>
        </div>
        <div className="input-group mb-4">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <nav className="nav flex-column">
          <a className="nav-link active" href="#">
            <span>
              <i className="fas fa-chart-bar" />
              Summary
            </span>
          </a>
          <a className="nav-link" href="#">
            <span>
              <i className="fas fa-chart-line" />
              Analyze
            </span>
          </a>
          <a className="nav-link" href="#">
            <span>
              <i className="fas fa-inbox" />
              Unassigned
            </span>
            <span className="badge bg-secondary">0</span>
          </a>
          <a className="nav-link" href="#">
            <span>
              <i className="fas fa-tasks" />
              Assigned to Me
            </span>
            <span className="badge bg-primary">37</span>
          </a>
          {/* Add more menu items as needed */}
        </nav>
      </div>
      {/* Main Content */}
      <div className="col-md-9 col-lg-10 p-4">
        {/* Stats Row */}
        <div className="row mb-4">
          <div className="col-md-2 col-sm-6">
            <div className="stats-card">
              <div className="stats-number">0</div>
              <div className="stats-label">All Open Tickets</div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="stats-card">
              <div className="stats-number">0</div>
              <div className="stats-label">Tickets Closed</div>
            </div>
          </div>
          {/* Add more stat cards */}
        </div>
        {/* Team Availability and SLA Progress */}
        <div className="row">
          <div className="col-lg-6">
            <div className="dashboard-card">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>Team availability</h5>
                <button className="btn btn-outline-secondary btn-sm">
                  All users
                </button>
              </div>
              <div className="team-member">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Benjamin Price"
                  className="avatar"
                />
                <div className="member-info">
                  <div className="member-name">Benjamin Price</div>
                  <div className="member-tickets">Assigned: 37 tickets</div>
                </div>
                <div className="status">
                  <span className="status-dot" />
                  Available
                </div>
              </div>
              <div className="team-member">
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="Seif Ashraf"
                  className="avatar"
                />
                <div className="member-info">
                  <div className="member-name">Seif Ashraf</div>
                  <div className="member-tickets">Assigned: 5 tickets</div>
                </div>
                <div className="status">
                  <span className="status-dot" />
                  Available
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="dashboard-card">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>SLA Progress</h5>
                <button className="btn btn-outline-secondary btn-sm">
                  Time to close
                </button>
              </div>
              <div className="sla-container">
                <div className="sla-item">
                  <i className="fas fa-exclamation-circle sla-icon overdue" />
                  <div>Overdue</div>
                  <div className="stats-number">0</div>
                </div>
                <div className="sla-item">
                  <i className="fas fa-clock sla-icon due-soon" />
                  <div>Due soon</div>
                  <div className="stats-number">0</div>
                </div>
                <div className="sla-item">
                  <i className="fas fa-check-circle sla-icon active" />
                  <div>Active</div>
                  <div className="stats-number">0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Channels and Calling Performance */}
        <div className="row">
          <div className="col-lg-6">
            <div className="dashboard-card">
              <h5>Today's tickets by channel</h5>
              <div className="channel-row">
                <i className="fas fa-comment channel-icon" />
                <span>Live chat</span>
                <span className="ms-auto">0</span>
                <span className="ms-4">0</span>
              </div>
              {/* Add more channels */}
              <div className="col-lg-6">
                <div className="dashboard-card">
                  <h5>Today's tickets by channel</h5>
                  {/* Live chat */}
                  <div className="channel-row">
                    <i className="fas fa-comment channel-icon text-primary" />
                    <span>Live chat</span>
                    <span className="ms-auto">0</span>
                    <span className="ms-4">0</span>
                  </div>
                  {/* Email */}
                  <div className="channel-row">
                    <i className="fas fa-envelope channel-icon text-primary" />
                    <span>Email</span>
                    <span className="ms-auto">0</span>
                    <span className="ms-4">0</span>
                  </div>
                  {/* Forms */}
                  <div className="channel-row">
                    <i className="fas fa-file-alt channel-icon text-primary" />
                    <span>Forms</span>
                    <span className="ms-auto">0</span>
                    <span className="ms-4">0</span>
                  </div>
                  {/* Calling */}
                  <div className="channel-row">
                    <i className="fas fa-phone-alt channel-icon text-primary" />
                    <span>Calling</span>
                    <span className="ms-auto">0</span>
                    <span className="ms-4">0</span>
                  </div>
                </div>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n.ticket-row {\n    display: flex;\n    padding: 15px 0;\n    border-bottom: 1px solid #eef1f5;\n}\n\n.ticket-row:last-child {\n    border-bottom: none;\n}\n\n.ticket-priority {\n    width: 4px;\n    margin-right: 15px;\n    border-radius: 2px;\n}\n\n.ticket-priority.high {\n    background-color: #ff5c5c;\n}\n\n.ticket-priority.medium {\n    background-color: #ffb84d;\n}\n\n.ticket-priority.low {\n    background-color: #92a2bd;\n}\n\n.ticket-content {\n    flex: 1;\n}\n\n.ticket-header {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 5px;\n}\n\n.ticket-id {\n    color: var(--primary-color);\n    font-weight: 500;\n}\n\n.ticket-time {\n    color: var(--text-muted);\n    font-size: 0.85rem;\n}\n\n.ticket-title {\n    font-weight: 500;\n    margin-bottom: 5px;\n}\n\n.ticket-meta {\n    display: flex;\n    justify-content: space-between;\n    color: var(--text-muted);\n    font-size: 0.85rem;\n}\n\n.ticket-status {\n    padding: 2px 8px;<!-- Assigned to Me Section -->\n    <div class="col-lg-6">\n        <div class="dashboard-card">\n            <div class="d-flex justify-content-between align-items-center mb-4">\n                <h5 class="m-0">Assigned to Me</h5>\n                <div class="dropdown">\n                    <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">\n                        Sort by: Priority\n                    </button>\n                    <ul class="dropdown-menu">\n                        <li><a class="dropdown-item" href="#">Priority</a></li>\n                        <li><a class="dropdown-item" href="#">Date</a></li>\n                        <li><a class="dropdown-item" href="#">Status</a></li>\n                    </ul>\n                </div>\n            </div>\n    \n            <!-- Ticket Items -->\n            <div class="assigned-tickets">\n                <!-- Ticket 1 -->\n                <div class="assigned-ticket">\n                    <div class="ticket-left">\n                        <div class="ticket-icon">\n                            <i class="fas fa-envelope text-primary"></i>\n                        </div>\n                        <div class="ticket-info">\n                            <div class="ticket-header">\n                                <span class="ticket-number">#2024</span>\n                                <span class="ticket-time">2h ago</span>\n                            </div>\n                            <div class="ticket-subject">Unable to access email</div>\n                            <div class="ticket-customer">\n                                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Customer" class="customer-avatar">\n                                <span>John Cooper</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="ticket-right">\n                        <span class="priority-badge high">High</span>\n                        <span class="status-badge">Open</span>\n                    </div>\n                </div>\n    \n                <!-- Ticket 2 -->\n                <div class="assigned-ticket">\n                    <div class="ticket-left">\n                        <div class="ticket-icon">\n                            <i class="fas fa-comment text-primary"></i>\n                        </div>\n                        <div class="ticket-info">\n                            <div class="ticket-header">\n                                <span class="ticket-number">#2023</span>\n                                <span class="ticket-time">4h ago</span>\n                            </div>\n                            <div class="ticket-subject">Payment failed on checkout</div>\n                            <div class="ticket-customer">\n                                <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Customer" class="customer-avatar">\n                                <span>Sarah Wilson</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="ticket-right">\n                        <span class="priority-badge medium">Medium</span>\n                        <span class="status-badge">In Progress</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <style>\n    .assigned-tickets {\n        display: flex;\n        flex-direction: column;\n        gap: 15px;\n    }\n    \n    .assigned-ticket {\n        display: flex;\n        justify-content: space-between;\n        padding: 15px;\n        background-color: #f8fafc;\n        border-radius: 8px;\n        transition: all 0.3s ease;\n    }\n    \n    .assigned-ticket:hover {\n        background-color: #f1f5f9;\n        transform: translateY(-2px);\n    }\n    \n    .ticket-left {\n        display: flex;\n        gap: 15px;\n    }\n    \n    .ticket-icon {\n        width: 40px;\n        height: 40px;\n        background-color: #e5f5f8;\n        border-radius: 8px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    \n    .ticket-icon i {\n        font-size: 1.2rem;\n    }\n    \n    .ticket-info {\n        display: flex;\n        flex-direction: column;\n        gap: 5px;\n    }\n    \n    .ticket-header {\n        display: flex;\n        gap: 10px;\n        align-items: center;\n    }\n    \n    .ticket-number {\n        color: var(--primary-color);\n        font-weight: 500;\n    }\n    \n    .ticket-time {\n        color: var(--text-muted);\n        font-size: 0.85rem;\n    }\n    \n    .ticket-subject {\n        font-weight: 500;\n        color: #1e293b;\n    }\n    \n    .ticket-customer {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        color: var(--text-muted);\n        font-size: 0.9rem;\n    }\n    \n    .customer-avatar {\n        width: 24px;\n        height: 24px;\n        border-radius: 50%;\n    }\n    \n    .ticket-right {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-end;\n        gap: 8px;\n    }\n    \n    .priority-badge {\n        padding: 4px 8px;\n        border-radius: 4px;\n        font-size: 0.8rem;\n        font-weight: 500;\n    }\n    \n    .priority-badge.high {\n        background-color: #fee2e2;\n        color: #ef4444;\n    }\n    \n    .priority-badge.medium {\n        background-color: #fef3c7;\n        color: #f59e0b;\n    }\n    \n    .status-badge {\n        padding: 4px 8px;\n        background-color: #e5f5f8;\n        color: var(--primary-color);\n        border-radius: 4px;\n        font-size: 0.8rem;\n        font-weight: 500;\n    }\n    \n    @media (max-width: 768px) {\n        .assigned-ticket {\n            flex-direction: column;\n            gap: 15px;\n        }\n    \n        .ticket-right {\n            flex-direction: row;\n            justify-content: flex-start;\n            gap: 10px;\n        }\n    }}\n</body>\n</html>\n'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default SupportDash
