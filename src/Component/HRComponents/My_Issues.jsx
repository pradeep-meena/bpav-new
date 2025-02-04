import React from "react";

const My_Issues = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="top d-flex justify-content-between align-items-center mb-4">
          <div className="heading">
            <h4 className="fw-bold">My Issues</h4>
            <p className="text-muted">
              <i className="fa-solid fa-house" /> / Performance / My Issues
            </p>
          </div>
          <div>
            <button className="btn add-goal-btn">
              <span>
                <i className="fa-solid fa-circle-plus mx-1" />
              </span>
              Add Goal
            </button>
            <span className="mx-2">
              <i
                className="fa-solid fa-angles-up"
                style={{
                  backgroundColor: "#fff",
                  border: "2px solid #f0f0f0",
                  borderRadius: 5,
                  padding: 10,
                  fontSize: 10,
                }}
              />
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="card-title mb-0 fw-bold">Goal Tracking List</h6>
              <div>
                <select
                  id="rowPerPage"
                  className="form-select form-select-sm d-inline-block"
                  style={{ width: "auto" }}
                >
                  <option value={10}>Sort By: Last 7 Days</option>
                  <option value={10}>Sort By: Last 10 Days</option>
                  <option value={10}>Sort By: Last 20 Days</option>
                  <option value={10}>Sort By: Last 25 Days</option>
                </select>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <label htmlFor="rowPerPage" className="form-label me-2">
                  Row Per Page:
                </label>
                <select
                  id="rowPerPage"
                  className="form-select form-select-sm d-inline-block"
                  style={{ width: "auto" }}
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <label htmlFor="rowPerPage" className="form-label me-2 mx-1">
                  Entries
                </label>
              </div>
              <div className="search d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn add-goal-btn">
                  <i className="fa-solid fa-gear" />
                </button>
              </div>
            </div>
            <table className="table table-striped table-hover my-4">
              <thead className="table-light">
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Goal Type</th>
                  <th>Subject</th>
                  <th>Target Achievement</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Development Goals</td>
                  <td>Programming Skills</td>
                  <td>Complete a HTML course</td>
                  <td>14 Jan 2024</td>
                  <td>13 Mar 2024</td>
                  <td>Improve proficiency</td>
                  <td>
                    <span className="status-active">Active</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Project Goals</td>
                  <td>App Development</td>
                  <td>Deliver the app</td>
                  <td>21 Jan 2024</td>
                  <td>21 Feb 2024</td>
                  <td>Complete the app</td>
                  <td>
                    <span className="status-active">Active</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Project Goals</td>
                  <td>Web Development</td>
                  <td>Deliver the template</td>
                  <td>18 Feb 2024</td>
                  <td>18 Mar 2024</td>
                  <td>Complete the template</td>
                  <td>
                    <span className="status-active">Active</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-between align-items-center">
              <span>Showing 1 - 3 of 3 entries</span>
              <nav>
                <ul className="pagination pagination-sm mb-0">
                  <li className="page-item disabled mx-4" style={{cursor: "pointer"}}>
                    <a className="page-link" href="#" tabIndex={-1}>
                      ⮘
                    </a>
                  </li>
                  <li className="page-item active">
                    <a
                      className="page-link"
                      href="#"
                      style={{
                        borderRadius: "50%",
                        backgroundColor: "#ff6600",
                        border: "#ff6600",
                      }}
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item disabled mx-4" style={{cursor: "pointer"}}>
                    <a className="page-link" href="#">
                      ⮚
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default My_Issues;
