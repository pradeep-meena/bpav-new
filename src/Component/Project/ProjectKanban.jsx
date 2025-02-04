import React,{ useState } from 'react'
// import { all_routes } from '../router/all_routes';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import AddTask from './ProjectAddTask';

const ProjectKanban = () => {
  const navigate = useNavigate();
 const [showModal, setShowModal] = useState(false);
  const clickHandler = () =>{
    console.log('projectaddtask btn clickecd');
    navigate('/projectaddtask');
  }

  const handleAddProject = () => {
    setShowModal(true);
  };
  return (
    <div className='page-wrapper'>

  <div className="card mt-2">
    <div className="card-header d-flex flex-wrap justify-content-between align-items-center">
      <div className="mb-2 mb-lg-0">
        <span className="fw-semibold text-secondary">
          <span>
            <i className="fa-solid fa-bars-staggered" />
          </span>{" "}
          Staff Scheduling
        </span>
        <span className="ms-3 fw-semibold text-secondary">
          <span>
            <i className="fa-solid fa-list-ul" />
          </span>{" "}
          Billing Last Week
        </span>
        <span className="ms-3 fw-semibold">
          <span>
            <i className="fa-solid fa-table-columns" />
          </span>{" "}
          Board
        </span>
        <span className="ms-3 fw-semibold text-secondary">12 more...</span>
        <span className="ms-3 fw-semibold text-secondary">
          <span>
            <i className="fa-solid fa-plus" />
          </span>{" "}
          View
        </span>
      </div>
      <div className="d-flex flex-wrap align-items-center">
        <span className="fw-semibold text-secondary me-2">
          <span>
            <i className="fa-solid fa-magnifying-glass" />
          </span>{" "}
          Search
        </span>
        <button type="button" className="btn btn-primary ms-2 mb-2 mb-sm-0">
          {" "}
          <i className="fa-solid fa-bars-progress" /> Hide . 1
        </button>
        <span className="ms-2 fw-semibold text-secondary">
          <span>
            <i className="fa-solid fa-gear" />
          </span>{" "}
          Customize
        </span>
        <div className="dropdown ms-3 d-flex">
          
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={handleAddProject}
          >
            Add Task
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
        <span className="mx-2 bg-secondary rounded-circle p-2 text-white">
          <i className="fa-solid fa-chevron-down" />
        </span>
      </div>
    </div>
  </div>
  <div className="row ms-2 mt-3">
  {/* Left Column */}
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
  {/* Right Column */}
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

<div className="row ms-2 mt-4">
  <div className="col-12 d-flex flex-wrap justify-content-center justify-content-md-start">
    
    <div className="col-12 col-md-6 col-lg-2">
      <div className="me-3 mb-3 text-center">
        <span
          className="fw-semibold  d-block py-2"
          style={{ backgroundColor: "#f0f0f2" }}
        >
         Planning
        </span>
        {/* <Link to={all_routes.addtask} > */}
        <p className="fw-semibold text-secondary mt-2" onClick={handleAddProject}>
          <span>
            <i className="fa-solid fa-plus" />
          </span>{" "}
          Add Task
        </p>
        {/* </Link> */}
      </div>
    </div>
    
    <div className="col-12 col-md-6 col-lg-2">
      <div className="me-3 mb-3 text-center">
        <span
          className="fw-semibold  d-block py-2"
          style={{ backgroundColor: "#f0f0f2" }}
        >
         InProgress
        </span>
        {/* <Link to={all_routes.addtask} > */}
         <p className="fw-semibold text-secondary mt-2" onClick={handleAddProject}>
          <span>
            <i className="fa-solid fa-plus" />
          </span>{" "}
          Add Task
        </p>
        {/* </Link> */}
      </div>
    </div>
    {/* Interviewed */}
    <div className="col-12 col-md-6 col-lg-2">
      <div className="me-3 mb-3 text-center">
        <span
          className="fw-semibold  d-block py-2"
          style={{ backgroundColor: "#f0f0f2" }}
        >
       On Hold
        </span>
        {/* <Link to={all_routes.addtask} > */}
         <p className="fw-semibold text-secondary mt-2" onClick={handleAddProject}>
          <span>
            <i className="fa-solid fa-plus" />
          </span>{" "}
          Add Task
        </p>
        {/* </Link> */}
      </div>
    </div>
    {/* Shortlisted Offer Sent */}
    <div className="col-12 col-md-6 col-lg-2">
      <div className="me-3 mb-3 text-center">
        <span
          className="fw-semibold  d-block py-2"
          style={{ backgroundColor: "#f0f0f2" }}
        >
         Completed
        </span>
        {/* <Link to={all_routes.addtask} > */}
         <p className="fw-semibold text-secondary mt-2" onClick={handleAddProject}>
          <span>
            <i className="fa-solid fa-plus" />
          </span>{" "}
          Add Task
        </p>
        {/* </Link> */}
      </div>
    </div>
    {/* Hired */}
    <div className="col-12 col-md-6 col-lg-2">
      <div className="me-3 mb-3 text-center">
        <div className="dropdown">
          <button
            className="btn btn-light fw-semibold dropdown-toggle w-100 py-2"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           Billing
          </button>
        
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                315317-Triton Partners <br /> -EU &amp; NYC - RFP for... <br />
                <span className="fs-6 text-secondary">
                  In{" "}
                  <span>
                    <i className="fa-solid fa-briefcase" />
                  </span>{" "}
                  All Project
                </span>
              </a>
            </li>
          </ul>
        </div>
        {/* <Link to={all_routes.addtask} > */}
         <p className="fw-semibold text-secondary mt-2" onClick={handleAddProject}>
          <span>
            <i className="fa-solid fa-plus" />
          </span>{" "}
          Add Task
        </p>
        {/* </Link> */}
      </div>
    </div>
    {/* Unsuccessful */}
   
  </div>
</div>

<Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddTask />
        </Modal.Body>
      </Modal>

    </div>

  )
}

export default ProjectKanban;