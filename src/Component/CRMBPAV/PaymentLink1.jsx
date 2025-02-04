import React from 'react'
import { Link } from 'react-router-dom'
import PaymentLink3 from './Setting'

const PaymentLink1 = () => {
  return (
    <div className='page-wrapper'>
      <>
  {/* Header Navigation */}
  <div className="container-fluid text-dark py-2 px-4 d-flex justify-content-between align-items-center">
    <button className="btn btn-outline-light btn-sm px-4 py-2">Cancel</button>
    <h5 className="m-0 ">
      Add a payment link name{" "}
      <span>
        <i className="fa-solid fa-pencil ms-3" />
      </span>
    </h5>
    <button className="btn btn-light btn-sm px-4">Create</button>
  </div>
  {/* Tabs Section */}
  <div className="container mt-3">
    <div className="row">
      <div className="col-md-6 d-flex justify-content-end">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link active fw-semibold" to="paymentlink1">
              Line Items
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/payment/setting">
              Settings
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-secondary" >
              Preview
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-md-6 d-flex justify-content-end mt-2">
        <div className="form-check form-switch">
          <span>One-time use</span>
          <span>
            <i className="fa-solid fa-circle-info mx-3 text-secondary" />
          </span>
        </div>
        <div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Line Items Section */}
  <div className="container mt-4">
    <div className="row">
      <div className="col-md-6">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="fw-bold">
            Currency:{" "}
            <span className="text-info">British Pound Sterling (GBP) £</span>
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="d-flex justify-content-end">
          <span className="text-info fw-semibold me-3 mt-2">Edit columns</span>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                borderColor: "gainsboro",
                borderWidth: 2,
                color: "black",
                backgroundColor: "rgb(244, 244, 244)",
                borderRadius: 5
              }}
            >
              Add Line item
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
        </div>
      </div>
    </div>
    <div className="p-5 border rounded">
      <div className="row">
        <div className="col-md-3">&nbsp;</div>
        <div className="col-md-5">
          <h5 className="fw-semibold">Add line items to your payment link</h5>
          <p className="text-muted">
            Add line items for the products you are selling and share it with
            your customer to get paid easily.
          </p>
          <a
            href="#"
            className="text-info fw-semibold"
            style={{ textDecoration: "none" }}
          >
            Learn how you can sell through payment links{" "}
            <span>
              <i className="fa-solid fa-arrow-up-right-from-square text-secondary" />
            </span>
          </a>
          <div className="mt-3">
            <button className="btn btn-secondary me-2">
              Select from product library
            </button>
            <button className="btn btn-outline-secondary my-2">
              Create custom line item
            </button>
          </div>
        </div>
        <div className="col-md-3">
          <img
            src="https://i.ibb.co/4dgqfWH/Screenshot-2025-01-09-190649.png"
            width="300px"
            height="200px"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  {/* Summary Section */}
  <div className="container mb-4 mt-4">
    <div className="card shadow-sm">
      <div className="card-header p-4">
        <h5>Summary</h5>
      </div>
      <div className="card-body">
        <div className="summary-box bg-white">
          <div className="d-flex justify-content-between mb-2">
            <div className="d-flex">
              <span className="fw-semibold">
                Subtotal{" "}
                <span>
                  <i className="fa-solid fa-circle-info text-secondary ms-2" />
                </span>
              </span>
            </div>
            <span>--</span>
          </div>
          <div className="d-flex justify-content-between my-4">
            <span className="text-secondary fw-semibold">
              + Add discount, fee, or tax{" "}
              <span>
                <i className="fa-solid fa-circle-info text-secondary ms-2" />
              </span>
            </span>
            <span>--</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <strong>
              Total{" "}
              <span>
                <i className="fa-solid fa-circle-info text-secondary ms-2" />
              </span>
            </strong>
            <strong>--</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Bootstrap Bundle with Popper */}
</>

    </div>
  )
}

export default PaymentLink1
