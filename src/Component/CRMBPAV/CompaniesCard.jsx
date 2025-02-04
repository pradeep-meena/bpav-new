import React from 'react'
import { PiNotePencilDuotone } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { FaCalendar } from "react-icons/fa6";
import { GrTasks } from "react-icons/gr";
// import './crm.css'
// import ContactListHead from './ContactListHead'

const CompaniesCard = () => {
  return (
    <div>
 <div className="container-fluid">
  <div className="row mt-3">
    {/* Sidebar */}
    <div className="col-md-3 mt-3 mb-4" style={{ backgroundColor: "white" }}>
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <div className="mb-3 d-flex justify-content-between">
            <h5 className="text-info fw-semibold">
              <span>
                <i className="fa-solid fa-chevron-left fs-6 me-2" />
              </span>{" "}
              Companies
            </h5>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle text-info fw-semibold"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Actions
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
          <div className="mb-3 text-center">
            <h5>zohoinvoice.com</h5>
            <a href="#" className="text-decoration-none text-info fw-semibold">
              zohoinvoice.com
            </a>
            <div className="mt-4 d-flex mx-3">
              <span className="me-2">
              <PiNotePencilDuotone />
                <br />
                <span style={{ fontSize: 12 }}>Notes</span>
              </span>
              <span className="me-2">
              <MdEmail />
                <br />
                <span style={{ fontSize: 12 }}>Email</span>
              </span>
              <span className="me-2">
              <IoCall />
                <br />
                <span style={{ fontSize: 12 }}>Call</span>
              </span>
              <span className="me-2">
         
              <GrTasks />
                <br />
                <span style={{ fontSize: 12 }}>Task</span>
              </span>
              <span className="me-2">
              <FaCalendar />
                <br />
                <span style={{ fontSize: 12 }}>Meeting</span>
              </span>
              <span className="me-2">
              <IoIosMore />
                <br />
                <span style={{ fontSize: 12 }}>More</span>
              </span>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h6 className="mt-2">
              <span>
                <i className="fa-solid fa-chevron-right me-2 text-info" />
              </span>{" "}
              About this company
            </h6>
            <div className="dropdown ">
              <button
                className="btn dropdown-toggle text-info fw-semibold"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Actions
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
              <span>
                <i className="fa-solid fa-gear text-info fs-6" />
              </span>
            </div>
          </div>
          <hr />
          <div className="mb-4">
            <h6>
              <span>
                <i className="fa-solid fa-chevron-right me-2 text-info" />
              </span>{" "}
              Buyer Intent
            </h6>
          </div>
          <hr />
        </div>
      </div>
    </div>
    {/* Main content */}
    <div className="col-md-6 content">
      <h6 className="text-end text-info fw-semibold">
        <span>
          <i className="fa-solid fa-gear text-secondary fs-6 me-1" />
        </span>{" "}
        Customize record
      </h6>
      <ul className="nav nav-tabs mt-3">
        <li className="nav-item">
          <button
            className="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#overview"
          >
            Overview
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#activities"
          >
            Activities
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#intelligence"
          >
            Intelligence
          </button>
        </li>
      </ul>
      <div className="tab-content">
        {/* Overview Tab */}
        <div className="tab-pane fade show active" id="overview">
          <div className="card shadow-sm p-3">
            <div className=" d-flex justify-content-between my-2">
              <h6 className="fw-bold">Company Summary</h6>
              <span>
                <i className="fa-solid fa-gear rounded bg-light p-2 border fs-6" />
              </span>
            </div>
            <hr />
            <div className="notes">
              <h6 className="fw-semibold mb-3">
                Company summary notes{" "}
                <span>
                  <i className="fa-solid fa-circle-info ms-2 text-secondary" />
                </span>
              </h6>
              <textarea
                className="form-control mb-3 bg-light"
                defaultValue={""}
              />
            </div>
            <hr />
            <div className="d-flex">
              <h6 className="fw-semibold">
                Frequently Contacted{" "}
                <span>
                  <i className="fa-solid fa-circle-info ms-2 text-secondary" />
                </span>
              </h6>
              <span className="ms-4 text-info fw-semibold">
                Nikunj{" "}
                <span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-secondary" />
                </span>
              </span>
            </div>
            <hr />
            <div className="mt-3">
              <h6>Company Profile</h6>
              <p>
                <span className="text-secondary">Lifecycle stage</span>
                <span className="ms-5">
                  Lead for 2 days{" "}
                  <a
                    href="#"
                    className="text-decoration-none text-info fw-semibold"
                  >
                    History details{" "}
                    <span>
                      <i className="fa-solid fa-chevron-right text-secondary fs-6" />
                    </span>
                  </a>
                </span>
              </p>
            </div>
            <hr />
            <div className="mt-3 d-flex">
              <h6 className="fw-semibold">Products</h6>
              <p className="text-secondary ms-5">
                No products yet. Try adding products to your{" "}
                <a
                  href="#"
                  className="text-decoration-none fw-semibold text-info"
                >
                  deals
                </a>
                . <br />
                <span className="text-center">
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </span>
              </p>
            </div>
            <hr />
            <div className="mt-3 d-flex">
              <h6>
                Key Tickets{" "}
                <span>
                  <i className="fa-solid fa-circle-info text-secondary ms-2" />
                </span>
              </h6>
              <p className="ms-5 text-secondary">
                No key tickets assigned yet.
              </p>
            </div>
          </div>
          <div className="card shadow-sm p-3 mt-3">
            <h6 className="fw-bold">
              Company research insights <span className="badge-beta">BETA</span>
            </h6>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-between mx-3 mt-3">
              <button className="btn btn-outline-secondary rounded-pill px-4 py-2 btn-sm fw-bold me-2 mt-2">
                Retrieve Company
              </button>
              <button className="btn btn-outline-secondary rounded-pill px-4 py-2 btn-sm fw-bold me-2 mt-2">
                Find Company
              </button>
              <button className="btn btn-outline-secondary rounded-pill px-4 py-2 btn-sm fw-bold mt-2">
                List Tech this Com...
              </button>
            </div>
          </div>
          <div className="card shadow-sm p-3 mt-3">
            <h6 className="fw-bold">Customer spend trends</h6>
            <div className="mt-3">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="reportType" className="form-label">
                    Report type{" "}
                    <span>
                      <i className="fa-solid fa-circle-info text-secondary" />
                    </span>
                  </label>
                  <select id="reportType" className="form-select mb-3 bg-light">
                    <option>Revenue Trend Line</option>
                    <option>Spending Summary</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="dateRange" className="form-label">
                    Date Range
                  </label>
                  <select id="dateRange" className="form-select bg-light">
                    <option>All Time</option>
                    <option>Last 6 Months</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Other tabs */}
        <div className="tab-pane fade" id="activities">
          Activities content...
        </div>
        <div className="tab-pane fade" id="intelligence">
          Intelligence content...
        </div>
      </div>
    </div>
    <div className="col-md-3 mt-4 mb-4">
      <div className="card shadow-sm h-100">
        <div className="sidebar-menu p-3">
          <div className="menu-item">
            <span>
              <span>
                <i className="fa-solid fa-chevron-right fs-6 text-info me-3" />
              </span>{" "}
              Account Overview
            </span>
          </div>
          <div className="menu-item">
            <span>
              <span>
                <i className="fa-solid fa-chevron-right fs-6 text-info me-3" />
              </span>{" "}
              Companies (0)
            </span>
            <a href="#" className="text-info">
              + Add
            </a>
          </div>
          <div className="menu-item">
            <span>
              <span>
                <i className="fa-solid fa-chevron-right fs-6 text-info me-3" />
              </span>{" "}
              Contacts (1)
            </span>
            <a href="#" className="text-info">
              + Add
            </a>
          </div>
          <div className="menu-item">
            <span>
              <span>
                <i className="fa-solid fa-chevron-right fs-6 text-info me-3" />
              </span>{" "}
              Leads (0)
            </span>
            <span className="text-muted">+ Add</span>
          </div>
          <div className="menu-item">
            <span>
              <span>
                <i className="fa-solid fa-chevron-right fs-6 text-info me-3" />
              </span>{" "}
              Deals (0)
            </span>
            <a href="#" className="text-info">
              + Add
            </a>
          </div>
          <div className="menu-item">
            <span>
              <span>
                <i className="fa-solid fa-chevron-right fs-6 text-info me-3" />
              </span>{" "}
              Tickets (2)
            </span>
            <a href="#" className="text-info">
              + Add
            </a>
          </div>
          <div className="menu-item">
            <span>
              <span>
                <i className="fa-solid fa-chevron-right fs-6 text-info me-3" />
              </span>{" "}
              Invoices (0)
            </span>
            <a href="#" className="text-info">
              Add
            </a>
          </div>
          <div className="menu-item">
            <span>
              <span>
                <i className="fa-solid fa-chevron-right fs-6 text-info me-3" />
              </span>{" "}
              Health Score
            </span>
          </div>
          <div className="menu-item">
            <span>
              <span>
                <i className="fa-solid fa-chevron-right fs-6 text-info me-3" />
              </span>{" "}
              Lead Score
            </span>
          </div>
          <div className="menu-item">
            <span>
              <span>
                <i className="fa-solid fa-chevron-right fs-6 text-info me-3" />
              </span>{" "}
              Payments (0)
            </span>
            <a href="#" className="text-info">
              + Add
            </a>
          </div>
          <div className="menu-item">
            <span>
              <span>
                <i className="fa-solid fa-chevron-right fs-6 text-info me-3" />
              </span>{" "}
              Attachments
            </span>
            <a href="#" className="text-info"></a>
            <div className="dropdown">

                <button
                  className="btn dropdown-toggle text-info fw-semibold"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Add
                </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <a href="#" className="text-info"></a>
                <li>
                  <a href="#" className="text-info" />
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
          <div className="menu-item">
            <span>
              <span>
                <i className="fa-solid fa-chevron-right fs-6 text-info me-3" />
              </span>{" "}
              Portant - Document Automation (1)
            </span>
          </div>
          <div className="menu-item">
            <span>
              <span>
                <i className="fa-solid fa-chevron-right fs-6 text-info me-3" />
              </span>{" "}
              Portant | Latest Document
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>

  )
}

export default CompaniesCard;