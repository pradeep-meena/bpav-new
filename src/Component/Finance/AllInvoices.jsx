import React from 'react'
import "../CRMBPAV/App.css";
import { Link, useNavigate } from 'react-router-dom';
// import { all_routes } from '../router/all_routes';

const AllInvoices = () => {
  const navigate = useNavigate();
  return (
    <div className="page-wrapper">
        <header className="">
        <div className="container d-flex justify-content-between align-items-cneter">
      <a className="navbar-brand" style={{ color: "black" }} href="#">
        <h4>Quotes</h4>
      </a>
      <div className="d-flex head-data">
        <ul
          className="navbar-nav"
          style={{ border: "2px solid",  marginRight: 15 }}
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
              Action
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <button  className='btn btn-primary' onClick={()=> navigate('/crm/crminvoiceCard')}>
  
          Create quote
      
        </button>
      </div>
    </div>
  </header>
  <hr />
  {/* nav-section-end */}
  {/* card-section */}
  <div className="card-section">
    <div className="container my-1">
      <div className="row g-1">
        {/* Card 1 */}
        <div className="col-md-3">
          <div className="card incard p-3 text-center">
            <h6>Total Invoice</h6>
            <h4>$3,237.94</h4>
            <div className="progress my-2" style={{ height: 5 }}>
              <div
                className="progress-bar progress-bar-pink"
                style={{ width: "80%" }}
              />
            </div>
            <p className="text-green mb-0">~ +32.40% from last month</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-3">
          <div className="card incard p-3 text-center">
            <h6>Outstanding</h6>
            <h4>$3,237.94</h4>
            <div className="progress my-2" style={{ height: 5 }}>
              <div
                className="progress-bar progress-bar-purple"
                style={{ width: "60%" }}
              />
            </div>
            <p className="text-red mb-0">~ -4.40% from last month</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-3">
          <div className="card incard p-3 text-center">
            <h6>Draft</h6>
            <h4>$3,237.94</h4>
            <div className="progress my-2" style={{ height: 5 }}>
              <div
                className="progress-bar progress-bar-yellow"
                style={{ width: "70%" }}
              />
            </div>
            <p className="text-green mb-0">~ 12% from last month</p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="col-md-3">
          <div className="card incard p-3 text-center">
            <h6>Total Overdue</h6>
            <h4>$3,237.94</h4>
            <div className="progress my-2" style={{ height: 5 }}>
              <div
                className="progress-bar progress-bar-red"
                style={{ width: "50%" }}
              />
            </div>
            <p className="text-red mb-0">~ -15.40% from last month</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* card-section end */}
  {/* heaer section start */}
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
                  placeholder="Search all quots"
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
              <span>All</span>
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
            <h5>Owners:</h5>
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>All Users</span>
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
        <div className="col-md-3 col-sm-6">
          <div className="btn-group">
            <h5>Archive status:</h5>
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>Active</span>
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
      </div>
    </div>
  </div>
  {/* heaer section end */}
  {/* table-section-start */}
  <div className="table-section">
    <div className="container">
      <div className="tab-content table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">QUOTE</th>
              <th scope="col">QUOTE AMOUNT</th>
              <th scope="col">STATUS</th>
              <th scope="col">QUOTE OWNER</th>
              <th scope="col">CREATE DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="ad">name</td>
              <td>$ 25</td>
              <td>pending</td>
              <td>@benjelim</td>
              <td>Today at 23:17</td>
            </tr>
            <tr>
              <td className="ad">name</td>
              <td>$ 45</td>
              <td>pending</td>
              <td>@benjelim</td>
              <td>DEC 2024</td>
            </tr>
            <tr>
              <td className="ad">name</td>
              <td>$ 45</td>
              <td>pending</td>
              <td>@benjelim</td>
              <td>DEC 2022</td>
            </tr>
            <tr>
              <td className="ad">name</td>
              <td>$ 25</td>
              <td>pending</td>
              <td>@benjelim</td>
              <td>Today at 23:17</td>
            </tr>
            <tr>
              <td className="ad">name</td>
              <td>$ 45</td>
              <td>pending</td>
              <td>@benjelim</td>
              <td>DEC 2024</td>
            </tr>
            <tr>
              <td className="ad">name</td>
              <td>$ 45</td>
              <td>pending</td>
              <td>@benjelim</td>
              <td>DEC 2022</td>
            </tr>
            <tr>
              <td className="ad">name</td>
              <td>$ 45</td>
              <td>pending</td>
              <td>@benjelim</td>
              <td>DEC 2024</td>
            </tr>
            <tr>
              <td className="ad">name</td>
              <td>$ 45</td>
              <td>pending</td>
              <td>@benjelim</td>
              <td>DEC 2022</td>
            </tr>
            <tr>
              <td className="ad">name</td>
              <td>$ 45</td>
              <td>pending</td>
              <td>@benjelim</td>
              <td>DEC 2024</td>
            </tr>
            <tr>
              <td className="ad">name</td>
              <td>$ 45</td>
              <td>pending</td>
              <td>@benjelim</td>
              <td>DEC 2024</td>
            </tr>
            <tr>
              <td className="ad">name</td>
              <td>$ 45</td>
              <td>pending</td>
              <td>@benjelim</td>
              <td>DEC 2022</td>
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
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                5
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                6
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                7
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                8
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

export default AllInvoices;