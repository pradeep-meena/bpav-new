import React from 'react'
import { Link } from 'react-router-dom';
// import { all_routes } from '../router/all_routes';
 import TodoTaskCard from './TodoTaskCard'
const ToDOKAnban = () => {
  return (
    <div className='page-wrapper'>

  <div className="row ms-2 mt-3">

  <div className="col-12 col-lg-5 mb-3 mb-lg-0 d-flex flex-wrap align-items-center justify-content-lg-start justify-content-center">
    <span className="me-2 mb-2">
      <button
        type="button"
        className="btn btn-outline-secondary px-4 py-1 fw-semibold"
        style={{ borderRadius: 50 }}
      >
        <span>
          <i className="fa-brands fa-hive" />
        </span>{" "}
        Group: Status
      </button>
    </span>
    <span className="me-2 mb-2">
      <button
        type="button"
        className="btn btn-outline-secondary px-4 py-1 fw-semibold"
        style={{ borderRadius: 50 }}
      >
        Subtasks: Collapse all
      </button>
    </span>
  </div>
  
  <div className="col-12 col-lg-7 d-flex flex-wrap align-items-center justify-content-lg-end justify-content-center">
    <span className="me-2 mb-2">
      <button
        type="button"
        className="btn btn-outline-secondary px-4 py-1 fw-semibold"
        style={{ borderRadius: 50 }}
      >
        <span>
          <i className="fa-solid fa-arrow-up-wide-short" />
        </span>{" "}
        Filter
      </button>
    </span>
    <span className="me-2 mb-2">
      <button
        type="button"
        className="btn btn-outline-secondary px-4 py-1 fw-semibold"
        style={{ borderRadius: 50 }}
      >
        <span>
          <i className="fa-solid fa-sort" />
        </span>{" "}
        Sort
      </button>
    </span>
    <span className="me-2 mb-2">
      <button
        type="button"
        className="btn btn-outline-secondary px-4 py-1 fw-semibold"
        style={{ borderRadius: 50 }}
      >
        <span>
          <i className="fa-solid fa-user-group" />
        </span>{" "}
        Assignee
      </button>
    </span>
    <span className="me-2 mb-2">
      <button
        type="button"
        className="btn btn-outline-secondary px-4 py-1 fw-semibold"
        style={{ borderRadius: 50 }}
      >
        <span>
          <i className="fa-regular fa-circle-check" />
        </span>{" "}
        Closed
      </button>
    </span>
    <span className="mb-2">
      <input
        type="search"
        placeholder="Search..."
        className="form-control"
        style={{ maxWidth: 200, borderRadius: 5 }}
      />
    </span>
  </div>
  </div>

<div className="row g-3">
  <div className="col-12 d-flex flex-wrap justify-content-center justify-content-md-start">
   
    <div className="col-lg-3">
      <div className="me-3 mb-3 text-center">
        <span
          className="fw-semibold  d-block py-2"
          style={{ backgroundColor: "#f0f0f2" }}
        >
          TO DO
        </span>
        <TodoTaskCard />
        <Link to='/todoaddtask' >
        <p className="fw-semibold text-secondary mt-2">
          <span>
            <i className="fa-solid fa-plus" />
          </span>{" "}
          Add Task
        </p>
        </Link>
      </div>
    </div>
    
    <div className="col-lg-3">
      <div className="me-3 mb-3 text-center">
        <span
          className="fw-semibold  d-block py-2"
          style={{ backgroundColor: "#f0f0f2" }}
        >
         In Progress
        </span>
        <Link to='/todoaddtask'>
        <p className="fw-semibold text-secondary mt-2">
          <span>
            <i className="fa-solid fa-plus" />
          </span>{" "}
          Add Task
        </p>
        </Link>

      </div>
    </div>
    
    <div className="col-lg-3">
      <div className="me-3 mb-3 text-center">
        <span
          className="fw-semibold  d-block py-2"
          style={{ backgroundColor: "#f0f0f2" }}
        >
          On Hold
        </span>
        <Link to="/todoaddtask" >
        <p className="fw-semibold text-secondary mt-2">
          <span>
            <i className="fa-solid fa-plus" />
          </span>{" "}
          Add Task
        </p>
        </Link>
      </div>
    </div>

    <div className="col-lg-3">
      <div className="me-3 mb-3 text-center">
        <span
          className="fw-semibold  d-block py-2"
          style={{ backgroundColor: "#f0f0f2" }}
        >
          Complete
        </span>
        <Link to="/todoaddtask" >
        <p className="fw-semibold text-secondary mt-2">
          <span>
            <i className="fa-solid fa-plus" />
          </span>{" "}
          Add Task
        </p>
        </Link>
      </div>
    </div>
  
  </div>
</div>
    </div>
  )
}

export default ToDOKAnban;