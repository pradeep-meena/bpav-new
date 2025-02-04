import React from 'react'
// import { all_routes } from '../router/all_routes';
import { Link,useNavigate } from 'react-router-dom';

const MyGoals = () => {
  const navigate = useNavigate();
  return (
    <div className='page-wrapper'>
        <div className="container-fluid py-5">
  <div className="row">
    <div className="col-md-6">
      <h2>Goals</h2>
    </div>
    <div className="row col-md-6">
      <div className="col-md-3 col-sm-6">Sort by:Updated</div>
      <div className="col-md-3 col-sm-6">
        <button
          style={{
            backgroundColor: "#615a5a",
            border: "none",
            borderRadius: "0.5rem",
            color: "rgb(230, 227, 227)"
          }}
        >
          <i className="fa-regular fa-folder" /> &nbsp;Folders:Hide
        </button>
      </div>
      <div className="col-md-3 col-sm-6">
        <i className="fa-solid fa-trash" /> &nbsp;Archived: Hide
      </div>
      <div className="col-md-3 col-sm-6">
        {/* <Link to={all_routes.newgoal}> */}
        <button
          style={{
            backgroundColor: "#279BE4",
            border: "none",
            borderRadius: "0.5rem",
            color: "white",
            padding: 6
          }}
          onClick= {() => navigate("/newgoal")}
        >
          + New Goal
        </button>
        {/* </Link> */}
      </div>
    </div>
  </div>
  <hr />
  <div className="row g-4">
    <div className="col-md-6 d-flex">
      <div className="col-sm-6 col-md-4">
        <div
          className="goal-card"
          style={{
            backgroundColor: "#858383",
            borderRadius: 10,
            padding: 20,
            textAlign: "center"
          }}
        >
          <i
            className="fa-regular fa-folder"
            style={{ fontSize: "2rem", color: "#615a5a" }}
          />
          <h5 style={{ color: "white", fontSize: "1rem" }}>New Folder (0)</h5>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 mx-3">
        <div
          className="goal-card"
          style={{
            backgroundColor: "#858383",
            borderRadius: 10,
            padding: 20,
            textAlign: "center"
          }}
        >
          <i
            className="fa-regular fa-folder"
            style={{ fontSize: "2rem", color: "#615a5a" }}
          />
          <h5 style={{ color: "white", fontSize: "1rem" }}>Add Folder</h5>
        </div>
      </div>
      <div className="col-md-6" />
    </div>
  </div>
  <div className="col-sm-6 col-md-4 mt-3">
    <div
      className="goal-card"
      style={{
        backgroundColor: "#858383",
        borderRadius: 10,
        padding: 20,
        textAlign: "center"
      }}
    >
      <div
        className="circle"
        style={{
          width: 70,
          height: 70,
          border: "5px solid white",
          borderRadius: "50%",
          margin: "0 auto 15px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <span style={{ color: "#007bff", fontSize: "1.25rem" }}>0%</span>
      </div>
      <h5 style={{ color: "white", fontSize: "1rem" }}>
        Qsc developer partner status
      </h5>
      <a href="#" className="text-info">
        0 targets
      </a>
      <p className="mt-3 text-muted">Mar 13 at 7:38 pm</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default MyGoals