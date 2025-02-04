import React from 'react'
import './App.css';

const Invoicecard = () => {
  return (
    <div>
      <>
  <div className="container my-5">
    <div className="d-flex justify-content-between align-ems-center mb-3">
      <div className="dropdown">
        <button
          className="btn dropdown-toggle text-secondary"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className=" fw-bold text-info">Invoices</span>
        </button>
        <ul
          className="dropdown-menu dropdown-menu"
          aria-labelledby="dropdownMenuButton2"
        >
          <li>
            <a className="dropdown-item active" href="#">
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
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Separated link
            </a>
          </li>
        </ul>
      </div>
      <div className="d-flex">
        <div className="dropdown me-2">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              borderColor: "#ff846b",
              borderWidth: 2,
              color: "#ff846b",
              borderRadius: 5
            }}
          >
            Action
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
        <button
          className="btn me-2"
          type="button"
          style={{
            borderColor: "#ff846b",
            borderWidth: 2,
            color: "#ff846b",
            borderRadius: 5
          }}
        >
          Import
        </button>
        <button
          className="btn me-2 text-white"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style={{
            backgroundColor: "#ff846b",
            borderWidth: 2,
            borderRadius: 5
          }}
        >
          Create Product
        </button>
      </div>
    </div>
    {/* Modal */}
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header" style={{ backgroundColor: "#19b6bf" }}>
            <h5 className="modal-title text-white" id="exampleModalLabel">
              INVOICE-755477
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="dropdown d-flex justify-content-end">
              <button
                className="btn dropdown-toggle text-secondary"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className=" fw-bold text-info">Actions</span>
              </button>
              <ul
                className="dropdown-menu dropdown-menu"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a className="dropdown-item active" href="#">
                    View invoice{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square  text-secondary" />
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    View property history{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square text-secondary" />
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Copy link
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Send
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Download
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Clone
                  </a>
                </li>
              </ul>
            </div>
            <div className="text">
              <span className="fw-bold fs-4 text-secondary">
                INVOICE-755477
              </span>
              <p className="mt-3">
                <span>Amount billed: 75</span>
              </p>
              <p>
                <span>
                  Invoice status:{" "}
                  <i className="fa-solid fa-circle text-danger" /> Voided
                </span>
              </p>
            </div>
          </div>
          <hr />
          <div className="about mx-4 mb-2">
            <span className="text-secondary fw-semibold fs-5">
              <span>
                <i className="fa-solid fa-chevron-down text-info me-3" />
              </span>{" "}
              About this invoice
            </span>
            <div className="summary mt-4">
              <span>Owner</span>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle text-secondary"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="fs-6 fw-semibold">Benjamin Price</span>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a className="dropdown-item active" href="#">
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
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>
              <div className="balance mt-3">
                <span>Balance due</span>
                <p className="fs-6 fw-semibold mx-2 text-secondary">
                  <span>0.00</span>
                </p>
              </div>
              <div className="date mt-3">
                <span>Due date</span>
                <p className="fs-6 fw-semibold mx-2 text-secondary">
                  <span>24/01/2025 23:59 GMT</span>
                </p>
              </div>
              <div className="lastdate mt-3">
                <span>Last sent date</span>
                <p className="fs-6 fw-semibold mx-2 text-secondary">
                  <span>--</span>
                </p>
              </div>
              <div className="date mt-3">
                <span>Number</span>
                <p className="fs-6 fw-semibold mx-2 text-secondary">
                  <span>INVOICE-755477</span>
                </p>
              </div>
              <div className="reminderdate mt-3">
                <span>Last reminder sent date</span>
                <p className="fs-6 fw-semibold mx-2 text-secondary">
                  <span>--</span>
                </p>
              </div>
              <div className="date mt-3">
                <span>PO number</span>
                <p className="fs-6 fw-semibold mx-2 text-secondary">
                  <span>--</span>
                </p>
              </div>
              <div className="date mt-3">
                <span>Invoice external create date/time</span>
                <p className="fs-6 fw-semibold mx-2 text-secondary">
                  <span>--</span>
                </p>
              </div>
              <div className="date mt-3">
                <span>Received by recipient date (QuickBooks Online)</span>
                <p className="fs-6 fw-semibold mx-2 text-secondary">
                  <span>--</span>
                </p>
              </div>
              <div className="date mt-3">
                <span>Currency</span>
                <p className="fs-6 fw-semibold mx-2 text-secondary">
                  <span>GBP</span>
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="ms-4 mb-2 me-2">
            <button
              type="submit"
              className="btn me-2 p-3"
              style={{ backgroundColor: "aliceblue" }}
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-cancel p-3"
              data-bs-dismiss="modal"
              style={{ backgroundColor: "aliceblue" }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr className="mt-4" />
    <div className="row mb-4">
      <div className="col-md-3 d-flex justify-content-between">
        <span>
          <p>Draft</p>
        </span>
        <span>
          <i className="fa-solid fa-xmark" style={{ cursor: "pointer" }} />
        </span>
      </div>
      <div className="col-md-3">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Upcoming"
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ backgroundColor: "rgb(249, 253, 255)" }}
          />
        </div>
      </div>
      <div className="col-md-3">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Paid"
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ backgroundColor: "rgb(249, 253, 255)" }}
          />
        </div>
      </div>
      <div className="col-md-3">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Overdue"
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ backgroundColor: "rgb(249, 253, 255)" }}
          />
        </div>
      </div>
    </div>
    <div className="row mb-4">
      <div className="col-12 col-md-8 d-flex flex-wrap align-items-center">
        <div className="dropdown me-2 mb-2">
          <button
            className="btn dropdown-toggle text-secondary"
            type="button"
            id="dropdownMenuButtonStatus"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="fw-bold text-info">Invoices status</span>
          </button>
          <ul
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButtonStatus"
          >
            <li>
              <a className="dropdown-item active" href="#">
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
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown me-2 mb-2">
          <button
            className="btn dropdown-toggle text-secondary"
            type="button"
            id="dropdownMenuButtonData"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="fw-bold text-info">Invoices data</span>
          </button>
          <ul
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButtonData"
          >
            <li>
              <a className="dropdown-item active" href="#">
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
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown me-2 mb-2">
          <button
            className="btn dropdown-toggle text-secondary"
            type="button"
            id="dropdownMenuButtonDueDate"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="fw-bold text-info">Due date</span>
          </button>
          <ul
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButtonDueDate"
          >
            <li>
              <a className="dropdown-item active" href="#">
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
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>
        <span className="fw-bold mt-2 mb-2">
          <a href="#" className="text-decoration-none text-info">
            <i className="fa-solid fa-plus text-secondary ms-3 me-1" />
            More
          </a>
        </span>
        <span className="fw-bold mt-2 mb-2">
          <a href="#" className="text-decoration-none text-info">
            <i className="fa-solid fa-bars-staggered text-secondary ms-3 me-2" />
            <span
              className="px-3 py-2 d-inline-block"
              style={{ backgroundColor: "rgb(217, 241, 249)" }}
            >
              Advanced filters{" "}
              <i className="fa-solid fa-xmark ms-3 text-secondary" />
            </span>
          </a>
        </span>
      </div>
      <div className="col-12 col-md-4 text-end mt-3 mt-md-0">
        <span className="bg-light p-2 rounded cursor-pointer">
          <i className="fa-solid fa-reply" />
        </span>
        <span className="cursor-pointer mx-2">
          <i className="fa-regular fa-file" />
        </span>
        <span className="bg-light p-2 rounded cursor-pointer">
          <i className="fa-solid fa-print" />
        </span>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 mb-3 mb-md-0 d-flex">
            <form className="d-flex">
              <input
                className="form-control"
                type="search"
                placeholder="Search ID, number or "
                aria-label="Search"
              />
            </form>
            <p className="mt-2 text-secondary ms-1">1 selected</p>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle text-secondary"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className=" fw-bold text-info">More</span>
              </button>
              <ul
                className="dropdown-menu dropdown-menu"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a className="dropdown-item active" href="#">
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
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-7 text-md-end">
            <button
              type="button"
              className="btn btn-outline-secondary text-secondary mb-2 mb-md-0"
              style={{ backgroundColor: "#fff" }}
            >
              Export
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary text-secondary ms-md-2"
              style={{ backgroundColor: "#fff" }}
            >
              Edit columns
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>NUMBER</th>
                <th>INVOICE → COMPANIES</th>
                <th>INVOICE → CONTACTS</th>
                <th>TITLE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Example 1</td>
                <td>XYZ</td>
                <td>(123) 4567 890</td>
                <td>--</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Example 2</td>
                <td>XYZ</td>
                <td>(123) 4567 890</td>
                <td>--</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Example 3</td>
                <td>XYZ</td>
                <td>(123) 4567 890</td>
                <td>--</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Example 4</td>
                <td>XYZ</td>
                <td>(123) 4567 890</td>
                <td>--</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Example 5</td>
                <td>XYZ</td>
                <td>(123) 4567 890</td>
                <td>--</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Example 6</td>
                <td>XYZ</td>
                <td>(123) 4567 890</td>
                <td>--</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  {/* Bootstrap 5 JS */}
</>

    </div>
  )
}

export default Invoicecard
