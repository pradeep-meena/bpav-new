import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const ClientProject = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="page-wrapper">
          <div className="container my-4 text-dark text-start">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-6">
          {/* Project Overview Card */}
          <div className="card mb-4 px-3">
            <div>
            <div className="card-header fw-bold">
              👨‍💻 [Client Name] - 🛠 [Project Name], 📄 [Project Brief
              Description]
            </div>
            <div className="p-4 row">
              {/* Details Section */}
              <div className="col-md-6">
                <div className="mb-3">
                  <h6 className="fw-bold">
                    <i className="fas fa-info-circle"></i> Status:
                  </h6>
                </div>
                <div className="mb-3">
                  <h6 className="fw-bold">
                    <i className="fas fa-user"></i> Assignees:
                  </h6>
                </div>
                <div className="mb-3">
                  <h6 className="fw-bold">
                    <i className="fas fa-calendar"></i> Dates:
                  </h6>
                </div>
                <div className="mb-3">
                  <h6 className="fw-bold">
                    <i
                      className="fa-solid fa-font-awesome"
                      style={{ color: "#000000" }}
                    ></i>{" "}
                    Priority:
                  </h6>
                </div>
                <div className="mb-3">
                  <h6 className="fw-bold">
                    <i className="fas fa-clock"></i> Time Estimate:
                  </h6>
                </div>
                <div className="mb-3">
                  <h6 className="fw-bold">
                    <i className="fas fa-hourglass-half"></i> Track Time:
                  </h6>
                </div>
                <div className="mb-3">
                  <h6 className="fw-bold">
                    <i className="fas fa-tags"></i> Tags:
                  </h6>
                </div>
                <div className="mb-3">
                  <h6 className="fw-bold">
                    <i
                      className="fa-solid fa-arrow-right-arrow-left fa-rotate-by"
                     
                    ></i>
                    Relationships:
                  </h6>
                </div>
              </div>

              {/* Action Section */}
              <div className="col-md-6">
                <div className="mb-3">
                  <button className="btn badge bg-primary">
                    <i className="fas fa-chart-line"></i> PLANNING
                  </button>
                </div>
                <div className="mb-3">
                  <h6 className="fw-bold">Empty</h6>
                </div>
                <div className="mb-3">
                  <h6 className="fw-bold">Empty</h6>
                </div>
                <div className="mb-3">
                  <h6 className="fw-bold">
                    <i
                      className="fa-solid fa-font-awesome"
                      style={{ color: "#0000a0" }}
                    ></i>{" "}
                    Normal
                  </h6>
                </div>
                <div className="mb-3">
                  <h6 className="fw-bold">Empty</h6>
                </div>
                <div className="mb-3">
                  <h6 className="fw-bold">
                    <i
                      className="fa-solid fa-circle-play"
                      style={{ color: "#0475d0" }}
                    ></i>{" "}
                    Add time
                  </h6>
                </div>
                <div className="mb-3">
                  <h6 className="fw-bold">Empty</h6>
                </div>
                <div className="mb-3">
                  <h6 className="fw-bold">Empty</h6>
                </div>
              </div>
          </div>
</div>
            {/* New Project Section */}
            <div className="card border-secondary m-3 p-3">
              <div
                className="text-dark text-center py-3 rounded-0 mb-4"
                style={{ background: "#84eab3" }}
              >
                <h2 className="m-0">🚀 NEW PROJECT 🎉</h2>
              </div>

              {/* Visible Top Two Buttons */}
              <div className="mb-3">
                <button
                  className="btn text-dark px-3 py-2 rounded-2"
                  style={{ backgroundColor: "#524F81" }}
                >
                  Client Name:
                </button>
                <p className="ms-3">.</p>
              </div>
              <div className="mb-3">
                <button
                  className="btn text-dark px-3 py-2 rounded-2"
                  style={{ backgroundColor: "#524F81" }}
                >
                  Project Goal:
                </button>
                <p className="ms-3">.</p>
              </div>

              {/* Hidden Content */}
              {showMore && (
                <div>
                  <div className="mb-3">
                    <button
                      className="btn text-dark px-3 py-2 rounded-2"
                      style={{ backgroundColor: "#524F81" }}
                    >
                      Scope of Work:
                    </button>
                    </div> <div className="mb-3">
                    <button
                      className="btn text-dark px-3 py-2 rounded-2"
                      style={{ backgroundColor: "#524F81" }}
                    >
                      Client Requirments:
                    </button> </div> <div className="mb-3">

                    <button
                      className="btn text-dark px-3 py-2 rounded-2"
                      style={{ backgroundColor: "#524F81" }}
                    >
                      Assigned Team member:
                    </button>
                    </div> <div className="mb-3">
                    <button
                      className="btn text-dark px-3 py-2 rounded-2"
                      style={{ backgroundColor: "#524F81" }}
                    >
                      Helpful link & Resources:
                    </button>
                    <p className="ms-3">.</p>
                  </div>
                  <div>
                    <button
                      className="btn btn-light-danger text-dark"
                      style={{ backgroundColor: "#FF817E" }}
                    >
                      Important Notes
                    </button>
                    <ul className="mt-3">
                      <li>
                        Project Documentation & Resources can be found at the
                        bottom of the main ClickUp task.
                      </li>
                      <li>
                        Please ensure to leave detailed end-of-day reports in
                        ClickUp in the relevant subtask.
                      </li>
                      <li>
                        Ensure QA is complete before any code is uploaded to
                        processors.
                      </li>
                    </ul>
                  </div>
                  <div
                    className="alert alert-success text-center rounded-0"
                    style={{ background: "#84eab3" }}
                  >
                    ❗ Please keep information within ClickUp up to date at all times.
                  </div>
                </div>
              )}

              {/* Show Button */}
              <button
                onClick={toggleContent}
                className="border-0 bg-transparent text-primary"
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>
          
          <div className="card border-0 p-3">
            {/* Tabs */}
            <ul className="nav nav-tabs mb-3 border-bottom">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Subtasks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Action Items
                </a>
              </li>
            </ul>

            {/* Custom Fields */}
            <div className="card-body">
              <h5 className="card-title border-bottom pb-2 mb-4">
                Custom Fields
              </h5>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>
                      <i className="bi bi-telephone-fill text-danger"></i>{" "}
                      Contact Phone
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="bi bi-exclamation-triangle-fill text-warning"></i>{" "}
                      Live status
                    </td>
                    <td>
                      <span className="badge bg-warning text-dark">TBC</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="bi bi-building text-info"></i> Organisation
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="bi bi-person-badge text-primary"></i> BPAV
                      Project
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="bi bi-envelope-fill text-success"></i>{" "}
                      Contact Email
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="bi bi-type text-secondary"></i> Contact Name
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="bi bi-link-45deg text-warning"></i> Progress
                    </td>
                    <td>
                      <div className="progress">
                        {/* <div className="progress-bar bg-success w-25" role="progressbar" aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div> */}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Attachments Section */}
              <div className="mt-5">
                <h5 className="card-title border-bottom pb-1 mb-3">
                  Attachments
                </h5>
                <div className="border border-secondary rounded text-center py-1">
                  Drop your files here to upload
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6">
          <div className="card d-flex flex-column" style={{ height: "98%" }}>
            <div className="card-header fw-bold d-flex justify-content-between">
              <span>Activity</span>
              <div>
                <i className="fas fa-search mx-2"></i>
                <i className="fas fa-bell mx-2"></i>
                <i className="fas fa-bars mx-2"></i>
              </div>
            </div>
            <div
              className="card-body d-flex flex-column"
              style={{ overflowY: "auto" }}
            >
              <p>Show more</p>
              <p>
                You set Live status to{" "}
                <span className="badge bg-warning text-dark">TBC</span>
              </p>
            </div>
            <div className="card-footer p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write a Comment..."
                />
                <button className="btn btn-primary">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ClientProject;