import React from 'react'
import "../CRMBPAV/App.css";
import { Link, useNavigate } from "react-router-dom";
// import { all_routes } from "../router/all_routes";

const AllBills = () => {
  const navigate = useNavigate();
  return (
    <div  className='py-50px'>
        <header >
    <div className="container d-flex justify-content-between align-items-cneter">
      <a className="navbar-brand" style={{ color: "black" }} href="#">
        <h4>All Bills</h4>
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
        {/* <Link to={all_routes.createbill}> */}
        <button className ="btn btn-primary"onClick={()=> navigate('/createbill')}>
          Create Bills
        </button>
        {/* </Link> */}
      </div>
    </div>
  </header>
  <hr />
  <div className="header">
    <div className="container">
      <div className=" row head-content">
        <div className="col-md-3 col-sm-6">
          <div className="head-search">
            <form className="d-block">
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

export default AllBills