import React from 'react'
import { Link } from 'react-router-dom';
import { all_routes } from '../router/all_routes';
import "../CRMBPAV/App.css";

const PaymentLink = () => {
  return (
    <div className='page--wrapper'>
        <header className="navbar navbar-expand-lg ">
    <div className="container">
      <a className="navbar-brand" style={{ color: "black" }} href="#">
        <h4>Payment Links</h4>
      </a>
      <div className="d-flex head-data">
        <ul
          className="navbar-nav"
         
        >
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
           
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Go to Commerce
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Go to Commerce
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Create a payment Link
                </a>
              </li>
            </ul>
          </li>
        </ul>
        
        <button className='btn btn-primary'>
          Create a payment Link
        </button>
      </div>
    </div>
  </header>
  <hr />
  <div className="header">
    <div className="container">
      <div className="row head-content">
        <div className="col-md-3 col-sm-6">
          <div className="head-search">
            <form className="d-flex">
              <span className="input-group-text">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search all payment links"
                  aria-label="Search"
                />
                <i className="fa fa-search" aria-hidden="true" />
              </span>
            </form>
          </div>
        </div>
        <div className="col-md-2 col-sm-6">
          <div className="btn-group">
            <h5>Status:</h5>
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>On</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  Menu item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Menu item
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Menu item
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-sm-6">
          <div className="btn-group">
            <h6>
              <span>Clear filters</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="table-section">
    <div className="container">
      <div className="tab-content table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Link Name</th>
              <th scope="col">Line Items</th>
              <th scope="col">TOTAL</th>
              <th scope="col">LAST MODIFIED</th>
              <th scope="col">Views</th>
              <th scope="col">Checkouts</th>
              <th scope="col">View to checkout rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="ad"> product name 7</td>
              <td>items </td>
              <td>$ 25</td>
              <td>Today at 23:17</td>
              <td>11</td>
              <td>0</td>
              <td>0%</td>
            </tr>
            <tr>
              <td className="ad"> product name 7</td>
              <td>items </td>
              <td>$ 25</td>
              <td>Today at 23:17</td>
              <td>11</td>
              <td>0</td>
              <td>0%</td>
            </tr>
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a
                className="page-link"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
    </div>
  )
}

export default PaymentLink