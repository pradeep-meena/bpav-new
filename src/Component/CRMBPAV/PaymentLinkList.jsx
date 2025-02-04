import React from 'react'
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
// import { all_routes } from '../router/all_routes';

const PaymentLinkList = () => {
  const navigate = useNavigate();
  return (
    <div className='page-wrapper'>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header my-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center bg-white">
            <h4 className="fw-bold mb-3 mb-md-0">Payment Links</h4>
            <div className="btngrp d-flex flex-column flex-md-row">
              <button
                type="button"
                className="btn btn-outline me-md-3 mb-2 mb-md-0"
                style={{ borderColor: "#gray", borderWidth: 2,}}
              >
                Go to Commerce
              </button>
              <div>
           
                  <button
                    className="btn btn-primary"
                    
                    onClick={() => navigate("/createpayment")}
                  >
                    Create a Payment Link
                  </button>
                 
              </div>
            </div>
          </div>
          <div className="card-body">
            <div
              className="row mt-2"
              style={{
                backgroundColor: "#fff",
                border: "2px solid #dee2e6",
                borderRadius: 5,
                padding: 15
              }}
            >
              <div className="col-md-4">
                <form className="d-flex">
                  <input
                    className="form-control me-2 p-2"
                    type="search"
                    placeholder="Search all payment links"
                    aria-label="Search"
                    style={{ backgroundColor: "#ebfaff" }}
                  />
                </form>
              </div>
              <div className="col-md-1">
                <div className="d-flex align-items-baseline">
                  <span>State:</span>
                  <div className="dropdown mb-5 d-flex justify-content-start align-items-start">
                    <button
                      className="btn dropdown-toggle text-info fw-bold"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      On
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-2 d-flex mt-2 ms-2">
                <span className="text-info fw-bold">
                  <a href="#" />
                  Clear Filter
                </span>
              </div>
            </div>
            <table className="table table-bordered table-hover mt-0">
              <thead className="table-light">
                <tr>
                  <th>LINK NAME</th>
                  <th>LINE ITEMS</th>
                  <th>
                    TOTAL{" "}
                    <i className="fa-solid fa-circle-info mx-1 text-secondary" />
                  </th>
                  <th>LAST MODIFIED</th>
                  <th>
                    VIEWS{" "}
                    <i className="fa-solid fa-circle-info mx-1 text-secondary" />
                  </th>
                  <th>
                    CHECKOUTS{" "}
                    <i className="fa-solid fa-circle-info mx-1 text-secondary" />
                  </th>
                  <th>
                    VIEW TO CHEKOUT RATE{" "}
                    <i className="fa-solid fa-circle-info mx-1 text-secondary" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-info fw-semibold">Product Name 7</td>
                  <td>Product Name</td>
                  <td>£50.00</td>
                  <td>Nov 11, 2024</td>
                  <td>11</td>
                  <td>0</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td className="text-info fw-semibold">Test</td>
                  <td>Add line item ...</td>
                  <td>£1.00</td>
                  <td>Jul 6, 2024</td>
                  <td>4</td>
                  <td>0</td>
                  <td>0%</td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-center align-items-center">
              <p className="mb-0">
                <span className="text-secondary fw-semibold">
                  <span>
                    <i className="fa-solid fa-chevron-left mx-2" />
                  </span>
                  Prev
                </span>{" "}
                <button type="button" className="btn btn-outline-info mx-2 fw-bold">
                  1
                </button>
                <span className="text-secondary fw-semibold">
                  Next{" "}
                  <span>
                    <i className="fa-solid fa-chevron-right" />
                  </span>{" "}
                </span>
              </p>
              <div className="dropdown">
                <button
                  className="btn text-info fw-bold dropdown-toggle ms-4"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  10 per page
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a className="dropdown-item active" href="#">
                      20 per page
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      30 per page
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      50 per page
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      70 per page
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentLinkList;
