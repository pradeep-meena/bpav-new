import React from 'react'
import { Link } from 'react-router-dom'
import PaymentLink1 from './PaymentLink1'

const Setting = () => {
  return (
    <div className='page-wrapper'>
     
  {/* Header Navigation */}
  <div className="container-fluid bg-dark text-white py-2 px-4 d-flex justify-content-between align-items-center">
    <button className="btn btn-outline-light btn-sm px-4 py-2">Cancel</button>
    <h5 className="m-0">
      Add a payment link name{" "}
      <span>
        <i className="fa-solid fa-pencil ms-3" />
      </span>
    </h5>
    <button className="btn btn-light btn-sm px-4">Create</button>
  </div>
  {/* Tabs Section */}
  <div className="container-fluid mt-3 shadow-sm">
    <div className="row">
      <div className="col-md-6 d-flex justify-content-end">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link text-secondary" to="/createpayment">
              Line Items
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-dark fw-semibold active"
              to="/setting"
            >
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
  <div className="container my-5">
    <div className="form-section">
      <h5 className="fw-semibold">Contact info</h5>
      <p className="mt-3 text-secondary fw-semibold">
        Add from fields mto collect additional information from your customer.
      </p>
      <form>
        <div className="row">
          <div className="col-md-6">
            <input
              type="email"
              className="px-5 py-2"
              placeholder="Email"
              style={{ border: "none", backgroundColor: "rgb(238, 241, 244)" }}
            />
            <input
              type="checkbox"
              className="ms-4 text-secondary"
              defaultChecked=""
            />
            <span className="ms-2 text-secondary">
              Required{" "}
              <span>
                <i className="fa-solid fa-circle-info ms-2" />
              </span>
            </span>
          </div>
          <div className="col-md-6">&nbsp;</div>
        </div>
        <div className="mb-4 mt-4">
          <span className="fw-semibold">
            <a
              href="#"
              className="text-info"
              style={{ textDecoration: "none" }}
            >
              <span>
                <i className="fa-solid fa-plus text-secondary me-3" />
              </span>
              Contact property
            </a>
          </span>
          <span className="fw-semibold ms-5">
            <a
              href="#"
              className="text-info"
              style={{ textDecoration: "none" }}
            >
              <span>
                <i className="fa-solid fa-plus text-secondary me-3" />
              </span>
              Company property
            </a>
          </span>
        </div>
        <hr />
        <div className="top d-flex justify-content-between">
          <h5>Online Payments</h5>
          <div className="payment-icons mb-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
              height="30px"
            />
            <img
              src="https://i.ibb.co/dJZHxWW/mastercard-logo.webp"
              alt="mastercard-logo"
              className="mx-2"
              height="30px"
            />
            <img
              src="https://i.ibb.co/KL8S3Fq/images.png"
              alt="American Express"
              height="30px"
            />
            <button
              className="bg-primary text-white fw-semibold px-3 py-1"
              style={{ borderColor: "white", borderRadius: 5 }}
            >
              A C H
            </button>
          </div>
        </div>
        <p className="fw-semibold text-secondary">
          Collect credit, debit and bank debits from your customers through a
          checkout page.
        </p>
        <div className="pagesummary border p-4 rounded">
          <h5 className="text-secondary">
            Accepted forms of payment *{" "}
            <i className="fa-solid fa-circle-info" />
          </h5>
          <div className="form-check mt-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="creditDebit"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="creditDebit">
              Credit or debit card
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="bacs"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="bacs">
              BACS (direct debit)
            </label>
          </div>
          <h5 className="text-secondary mt-4">
            Billing address <i className="fa-solid fa-circle-info" />
          </h5>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="billingAddress"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="billingAddress">
              Collect billing address for credit card purchases
            </label>
          </div>
          <h5 className="text-secondary mt-4">
            Shipping address <i className="fa-solid fa-circle-info" />
          </h5>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="shippingAddress"
            />
            <label className="form-check-label" htmlFor="shippingAddress">
              Collect shipping address
            </label>
          </div>
          <h5 className="text-secondary mt-4">
            Store payment methods for future charges{" "}
            <i className="fa-solid fa-circle-info" />
            <span>
              <span className="badge bg-success ms-2">New</span>
            </span>
          </h5>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="storePaymentMethods"
            />
            <label className="form-check-label" htmlFor="storePaymentMethods">
              Collect your customer's payment details at checkout for future
              changes{" "}
              <span>
                <i className="fa-solid fa-circle-info text-secondary" />
              </span>
            </label>
          </div>
        </div>
      </form>
      <h5 className="mt-4 text-secondary">Checkout Confirmation</h5>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="confirmation"
          id="defaultPage"
          defaultChecked=""
        />
        <label className="form-check-label" htmlFor="defaultPage">
          Show the default confirmation page
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="confirmation"
          id="redirectPage"
        />
        <label className="form-check-label" htmlFor="redirectPage">
          Redirect to a different page
        </label>
      </div>
      <div className="mt-3  w-100">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle w-100 d-flex justify-content-between align-items-center text-secondary"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: "rgb(237, 243, 244)" }}
          >
            Please select or add a link
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


    </div>
  )
}

export default Setting;
