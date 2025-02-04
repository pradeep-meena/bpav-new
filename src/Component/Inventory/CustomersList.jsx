import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const CustomersPage = () => {
  return (
    <div className='page-wrapper'>
    <div className="container-fluid bg-light ">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center border-bottom bg-white shadow-sm px-4">
        <h4 className="fw-bold">Customers</h4>
        <div className="d-flex gap-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            style={{ maxWidth: "300px" }}
          />
          <button className="btn btn-primary">Add customer</button>
        </div>
      </div>

      <div className="row mt-3">
        {/* Sidebar Section */}
        <div className="col-lg-2 col-md-3 col-sm-12 p-3">
          <div className="d-grid gap-3">
            <button className="btn btn-outline-secondary text-start">📥 Import</button>
            <button className="btn btn-outline-secondary text-start">📤 Export</button>
          </div>
        </div>

        {/* Customers Table Section */}
        <div className="col-lg-10 col-md-9 col-sm-12 p-3">
          <div className="card p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center gap-3">
                <select className="form-select w-auto">
                  <option>Actions</option>
                  <option>Delete</option>
                  <option>Export</option>
                </select>
                <span className="text-muted">
                  <strong>0</strong> customers selected
                </span>
                <a href="#" className="text-primary">Select all 1 customer</a>
              </div>
              <span className="text-muted">Showing 1 - 1 of 1</span>
            </div>

            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col">
                    <input type="checkbox" />
                  </th>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center" style={{ width: "35px", height: "35px" }}>
                        BTS
                      </div>
                      <span>BTS Big</span>
                    </div>
                  </td>
                  <td>info@bpav.global</td>
                </tr>
              </tbody>
            </table>

            <div className="d-flex justify-content-between">
              <span className="text-muted">Showing 1 - 1 of 1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="position-fixed bottom-0 end-0 p-3">
        <button className="btn btn-primary rounded-circle" style={{ width: "50px", height: "50px" }}>
          💬
        </button>
      </div>
    </div>
    </div>
  );
};

export default CustomersPage;