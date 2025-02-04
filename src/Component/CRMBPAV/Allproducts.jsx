import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Allproducts = () => {
  return (
    <div className="page-wrapper">
      <div className="container-fluid mt-5">
        {/* Header Section */}
        <div className="row align-items-center mb-3">
          <div className="col-12 col-md-6">
            <div className="dropdown">
              <button className="btn dropdown-toggle text-secondary" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="fw-bold text-info">Products</span>
                
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                <li><a className="dropdown-item active" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex flex-wrap justify-content-md-end gap-2 mt-3 mt-md-0">
            <div className="dropdown">
              <button className="btn dropdown-toggle text-info border border-info" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Action
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <button className="btn border border-info text-info">Import</button>
            <button className="btn text-white" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: "#0080A0" }}>
              Create Product
            </button>
          </div>
        </div>

        {/* Modal for Create Product */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-info text-white">
                <h5 className="modal-title">Create Product</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name *</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">SKU</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows="3"></textarea>
                  </div>
                  <div className="d-flex justify-content-end gap-2">
                    <button type="submit" className="btn btn-light">Create Product</button>
                    <button type="submit" className="btn btn-light">Create & Add Another</button>
                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-4" />

        {/* Table and Filters Section */}
        <div className="row mb-4">
          <div className="col-12 col-md-4 d-flex justify-content-between align-items-center">
            <p className="mb-0">All products</p>
            <i className="fa-solid fa-xmark text-danger" style={{ cursor: "pointer" }}></i>
          </div>
          <div className="col-12 col-md-4 mt-2 mt-md-0">
            <input type="text" className="form-control" placeholder="Search products..." />
          </div>
          <div className="col-12 col-md-4 text-md-end mt-2 mt-md-0">
            <Link to="#" className="text-info fw-bold">Add View (2/50)</Link>
          </div>
        </div>

        {/* Table Section */}
        <div className="card">
          <div className="card-header d-flex flex-column flex-md-row justify-content-between">
            <input type="search" className="form-control mb-2 mb-md-0" placeholder="Search name, description" />
            <div className="d-flex gap-2">
              <button className="btn btn-outline-secondary">Export</button>
              <button className="btn btn-outline-secondary">Edit Columns</button>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-light">
                  <tr>
                    <th><input type="checkbox" /></th>
                    <th>Name</th>
                    <th>SKU</th>
                    <th>Create Date (GMT)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>Administration Per Hour</td>
                    <td>ADMINISTRATION-HOUR</td>
                    <td>6 Dec 2024 15:46 GMT</td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>[ControlLabs] Commissioning-Hour</td>
                    <td>Commissioning-Hour</td>
                    <td>6 Dec 2024 12:04 GMT</td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>Control & Automation Consultant</td>
                    <td>Control-Automation-Consultant</td>
                    <td>6 Dec 2024 10:49 GMT</td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>Product Name 6</td>
                    <td>Product Name 6</td>
                    <td>11 Nov 2024 10:50 GMT</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Allproducts;
