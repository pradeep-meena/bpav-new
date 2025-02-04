import React from "react";

const OrderDetails = () => {
  return (
    <div className="page-wrapper">
    <div className="container-fluid py-3">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
        <div className="d-flex align-items-center">
          <h4 className="mb-0">Orders &gt; #1</h4>
          <span className="badge bg-warning text-dark ms-3">1 picked up</span>
        </div>
        <div>
          <button className="btn btn-success me-2">Return</button>
          <button className="btn btn-outline-secondary">...</button>
        </div>
      </div>

      <div className="row g-4">
        {/* Left Column */}
        <div className="col-md-8">
          <div className="row g-4">
            {/* Customer Card */}
            <div className="col-md-6">
              <div className="p-3 bg-white rounded shadow-sm">
                <h5>Customer</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center me-3"
                      style={{ width: "50px", height: "50px", fontWeight: "bold" }}
                    >
                      BTS
                    </div>
                    <div>
                      <p className="mb-0 fw-bold">BTS Big</p>
                      <p className="mb-0 text-muted small">info@bpav.global</p>
                    </div>
                  </div>
                  <button className="btn btn-outline-secondary">✖</button>
                </div>
              </div>
            </div>

            {/* Rental Period Card */}
            <div className="col-md-6">
              <div className="p-3 bg-white rounded shadow-sm">
                <h5>Rental Period</h5>
                <div>
                  <p className="mb-1 text-muted small">Pick up</p>
                  <p className="mb-0">27-12-2024 08:15</p>
                </div>
                <div className="mt-3">
                  <p className="mb-1 text-muted small">Return</p>
                  <p className="mb-0">31-12-2024 14:30</p>
                </div>
              </div>
            </div>
          </div>

          {/* Instructional Text */}
          <p className="text-muted text-center mt-4">
            Send emails and handle documents, payments, tags, and notes right here
          </p>

          {/* Products Table */}
          <div className="p-3 bg-white rounded shadow-sm">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search to add products"
              />
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Available</th>
                  <th>Quantity</th>
                  <th>Charge</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="badge bg-success">2 left</span>
                  </td>
                  <td>
                    {/* Quantity Selector */}
                    <div className="input-group">
                      <button className="btn btn-outline-secondary">-</button>
                      <input
                        type="number"
                        className="form-control"
                        defaultValue="1"
                      />
                      <button className="btn btn-outline-secondary">+</button>
                    </div>
                  </td>
                  <td>£250.00</td>
                  <td>£250.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-4">
          {/* Information Card */}
          <div className="p-3 bg-white rounded shadow-sm mb-4">
            <h5>Information</h5>
            <p className="text-muted small">
              You haven’t set up any custom fields yet. Set up custom fields to
              collect additional data about orders.
            </p>
            <button className="btn btn-outline-primary">Set up custom fields</button>
          </div>

          {/* Actions Card */}
          <div className="p-3 bg-white rounded shadow-sm mb-4">
            <h5>Actions</h5>
            <div className="mb-3">
              <button className="btn btn-outline-primary w-100">Send Email</button>
            </div>
            <div className="mb-3">
              <button className="btn btn-outline-primary w-100">New Contract</button>
            </div>
            <div className="mb-3">
              <button className="btn btn-outline-primary w-100">New Quote</button>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="accordion" id="accordionExample">
            {/* Documents Accordion */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Documents
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">No documents available</div>
              </div>
            </div>

            {/* Payments Accordion */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Payments
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">No payments available</div>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className="mt-4">
            <textarea
              className="form-control"
              placeholder="Add a new note"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OrderDetails;
