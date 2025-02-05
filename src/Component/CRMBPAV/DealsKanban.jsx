import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Dealskanban() {
  return (
    <div className="deal-content-section mt-5">
      <div className="container">
        <div className="deal-main">
          {/* Header Section */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h3>Deals - Sales</h3>
              <p className="text-muted">Dashboard / Deal</p>
            </div>
            <div>
              <select className="form-select d-inline w-auto">
                <option>Sales</option>
              </select>
              <button className="btn btn-primary mx-1">📄</button>
              <button className="btn btn-success mx-1">📊</button>
              <button className="btn btn-warning mx-1">📥</button>
              <button className="btn btn-danger mx-1">➕</button>
            </div>
          </div>

          {/* Summary Section */}
          <div className="row mb-4">
            {[
              { title: "Total Deals", amount: "$396,000.00", color: "primary" },
              {
                title: "This Month Total Deals",
                amount: "$0.00",
                color: "success",
              },
              {
                title: "This Week Total Deals",
                amount: "$0.00",
                color: "warning",
              },
              {
                title: "Last 30 Days Total Deals",
                amount: "$0.00",
                color: "danger",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-3">
                <div
                  className={`card text-white bg-${item.color} shadow-sm p-3`}
                >
                  <h5>{item.title}</h5>
                  <p className="fw-bold">{item.amount}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Deals Board */}
          <div className="row">
            {/* Initial Contact Stage */}
            <div className="col-md-3">
              <div className="card shadow-sm bg-white p-3">
                <p className="fw-bold">
                  Initial Contact{" "}
                  <button className="btn btn-sm btn-success ms-2">4</button>
                </p>
                {["Win", "Win", "Win", "Win"].map((status, index) => (
                  <div key={index} className="card p-2 mt-2 shadow-sm">
                    <button className="btn btn-sm btn-success">{status}</button>
                    <p className="fw-bold mt-2">Expansion Deal</p>
                    <p>💲 $50,000.00</p>
                    <p>👥 2 Users</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Qualification Stage */}
            <div className="col-md-3">
              <div className="card shadow-sm bg-white p-3">
                <p className="fw-bold">Qualification</p>
                <div className="card p-2 mt-2 shadow-sm">
                  <button className="btn btn-sm btn-warning">Pending</button>
                  <p className="fw-bold mt-2">Competitive Win</p>
                  <p>💲 $55,000.00</p>
                  <p>👥 1 User</p>
                </div>
              </div>
            </div>

            {/* Meeting Stage */}
            <div className="col-md-3">
              <div className="card shadow-sm bg-white p-3">
                <p className="fw-bold">Meeting</p>
                <div className="card p-2 mt-2 shadow-sm">
                  <div className="d-flex gap-1 w-100">
                    <button className="btn btn-sm btn-info">New</button>
                    <button className="btn btn-sm btn-warning">Pending</button>
                    <button className="btn btn-sm btn-success">Win</button>
                  </div>

                  <p className="fw-bold mt-2">Key Account Acquisition</p>
                  <p>💲 $30,000.00</p>
                  <p>👥 4 Users</p>
                </div>
              </div>
            </div>

            {/* Proposal Stage */}
            <div className="col-md-3">
              <div className="card shadow-sm bg-white p-3">
                <p className="fw-bold">Proposal</p>
                <div className="card p-2 mt-2 shadow-sm">
                <div className="d-flex gap-1 w-100">
                  <button className="btn btn-sm btn-secondary">On Hold</button>
                  <button className="btn btn-sm btn-info ms-1">New</button>
                  <button className="btn btn-sm btn-warning ms-1">
                    Pending
                  </button>
                  </div>
                  <p className="fw-bold mt-2">Solution Customization</p>
                  <p>💲 $35,000.00</p>
                  <p>👥 3 Users</p>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dealskanban;
