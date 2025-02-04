import React from 'react'
import { useNavigate } from 'react-router-dom';

const NewGoal = () => {

  return (
    <div className="page-wrapper">
        <div className="container mt-5">
  <div
    className="form-section"
    style={{
      marginBottom: 30,
      borderBottom: "1px solid #007bff",
      paddingBottom: 20
    }}
  >
    <div className="d-flex align-items-start mb-3">
      <div
        style={{
          backgroundColor: "rgb(214, 210, 210)",
          borderRadius: "100%",
          padding: "0.5rem"
        }}
      >
        <i className="fa-solid fa-trophy" style={{ color: "#2B5570" }} />
      </div>
      <div className="mx-3">
        <h5 className="mb-1">Goal name</h5>
        <p className="mb-0">
          What do you want to do? Goals are high-level containers that can be
          broken down into smaller <b>Targets</b>.{" "}
          <a href="#" className="text-info">
            Learn more
          </a>
        </p>
      </div>
    </div>
    <input type="text" className="form-control text-white" placeholder="" />
    <div className="text-end mt-2">
      <button
        className="btn btn-ok"
        style={{
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: 5,
          fontSize: "0.9rem"
        }}
      >
        OK <i className="fa-solid fa-check" />
      </button>
    </div>
  </div>
  <div
    className="form-section"
    style={{
      marginBottom: 30,
      borderBottom: "1px solid #007bff",
      paddingBottom: 20
    }}
  >
    <div className="d-flex align-items-start mb-3">
      <div
        style={{
          backgroundColor: "rgb(214, 210, 210)",
          borderRadius: "100%",
          padding: "0.5rem"
        }}
      >
        <i className="fa-solid fa-trophy" style={{ color: "#2B5570" }} />
      </div>
      <div className="mx-3">
        <h5 className="mb-1">Owner</h5>
        <p className="mb-0">
          This is optional. Who is responsible for this Goal?
        </p>
      </div>
    </div>
    <input
      type="file"
      className="form-control text-white"
      placeholder="Choose owner(s)"
    />
    <div className="text-end mt-2">
      <button
        className="btn btn-ok"
        style={{
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: 5,
          fontSize: "0.9rem"
        }}
      >
        OK <i className="fa-solid fa-check" />
      </button>{" "}
      <span style={{ color: "#007bff" }}>press ENTER</span>
    </div>
  </div>
  <div>
    <div className="d-flex align-items-start mb-3">
      <div
        style={{
          backgroundColor: "rgb(214, 210, 210)",
          borderRadius: "100%",
          padding: "0.5rem"
        }}
      >
        <i className="fa-solid fa-trophy" style={{ color: "#2B5570" }} />
      </div>
      <div className="mx-3">
        <h5 className="mb-1">Who has access to this Goal?</h5>
      </div>
    </div>
    <div className="row g-4 col-md-10 offset-md-1">
      <div className="col-md-6">
        <div
          className="access-card"
          style={{
            border: "1px solid #007bff",
            borderRadius: 10,
            textAlign: "center",
            padding: 20,
            cursor: "pointer"
          }}
        >
          <p className="mb-2">
            <i
              className="fa-solid fa-person-military-to-person"
              style={{ fontSize: "2rem" }}
            />
          </p>
          <h6 className="mb-0">BPAV Technology Group Ltd Workspace</h6>
        </div>
      </div>
      <div className="col-md-6">
        <div
          className="access-card"
          style={{
            border: "1px solid #007bff",
            borderRadius: 10,
            textAlign: "center",
            padding: 20,
            cursor: "pointer"
          }}
        >
          <p className="mb-2">
            <i className="fa-solid fa-lock" style={{ fontSize: "2rem" }} />
          </p>
          <h6 className="mb-0">Private</h6>
        </div>
      </div>
    </div>
  </div>
  <div
    className="form-section mt-5"
    style={{
      marginBottom: 30,
      borderBottom: "1px solid #007bff",
      paddingBottom: 20
    }}
  >
    <div className="d-flex align-items-start mb-3">
      <div
        style={{
          backgroundColor: "rgb(214, 210, 210)",
          borderRadius: "100%",
          padding: "0.5rem"
        }}
      >
        <i className="fa-solid fa-trophy" style={{ color: "#2B5570" }} />
      </div>
      <div className="mx-3">
        <p className="fs-5">
          Is there a date this Goal should be completed by?
        </p>
      </div>
    </div>
    <input
      type="text"
      className="form-control text-white"
      placeholder="End Date"
    />
    <div className="text-end mt-2">
      <button
        className="btn btn-ok"
        style={{
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: 5,
          fontSize: "0.9rem"
        }}
      >
        OK <i className="fa-solid fa-check" />
      </button>{" "}
      <span style={{ color: "#007bff" }}>press ENTER</span>
    </div>
  </div>
  <div
    className="form-section"
    style={{
      marginBottom: 30,
      borderBottom: "1px solid #007bff",
      paddingBottom: 20
    }}
  >
    <div className="d-flex align-items-start mb-3">
      <div
        style={{
          backgroundColor: "rgb(214, 210, 210)",
          borderRadius: "100%",
          padding: "0.5rem"
        }}
      >
        <i className="fa-solid fa-trophy" style={{ color: "#2B5570" }} />
      </div>
      <div className="mx-3">
        <h5 className="mb-1">Description</h5>
        <p className="mb-0">
          This is optional. A short explanation why this Goal is set and how it
          should be achieved
        </p>
      </div>
    </div>
    <input type="text" className="form-control text-white" placeholder="" />
    <div className="text-end mt-2">
      <button
        className="btn btn-ok"
        style={{
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: 5,
          fontSize: "0.9rem"
        }}
      >
        OK <i className="fa-solid fa-check" />
      </button>{" "}
      <span style={{ color: "#007bff" }}>press ENTER</span>
    </div>
  </div>
</div>
    </div>
  )
}

export default NewGoal;