import React from "react";

const CandidateScoreCard = () => {
  return (
    // <div className="page-wrapper">
      <div className="container-fluid my-3">
        <header className="mx-2">
          <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center flex-wrap">
              <div className="text">
                <h4>
                  <i className="fa-solid fa-arrow-left"></i>
                </h4>
              </div>
              <div className="icon d-flex align-items-center">
                <span>
                  <i className="fa-solid fa-magnifying-glass mx-2"></i>
                </span>
                <span>
                  <i className="fa-solid fa-bell mx-2"></i>
                </span>
                <span>
                  <i className="fa-solid fa-braille mx-2"></i>
                </span>
                <select
                  className="mx-2"
                  style={{
                    padding: "7px",
                    borderRadius: "10px",
                    backgroundColor: "rgb(245 245 245)",
                    color: "black",
                    border: "none",
                  }}
                >
                  <option>Your Company Name</option>
                </select>
                <img
                  src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                  height="10px"
                  className="rounded-circle mx-2"
                  alt="Team Member 1" style={{height:"35px"}}
                />
              </div>
            </div>
          </div>
        </header>

        <div
          className="row my-4 mx-2 mx-md-4"
          style={{
            backgroundColor: "rgb(245, 245, 245)",
            padding: "25px 15px",
            borderRadius: 15,
          }}
        >
          <div className="col-12">
            <div className="img d-flex flex-wrap align-items-center">
              <div className="name">
                <h4>Bar raiser</h4>
                <div className="details">
                  <span className="d-flex align-items-center mt-3">
                    <i className="fa-solid fa-user mx-2 my-1"></i>
                    <h5>Wade Wilson</h5>
                  </span>
                  <span className="mx-2 text-secondary">
                    Mid Product Designer
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex flex-wrap mt-2">
              <div className="schedule my-2">
                <span
                  className="rounded-pill text-white d-inline-flex align-items-center"
                  style={{ backgroundColor: "gray", padding: "17px 20px" }}
                >
                  <i className="fa-solid fa-circle-info mx-2 text-white"></i>
                  Interview playbook
                </span>
              </div>
              <div className="schedule my-2 mx-0 mx-md-3">
                <span
                  className="rounded-pill text-danger d-inline-flex align-items-center"
                  style={{
                    backgroundColor: "rgb(98, 43, 43)",
                    padding: "17px 20px",
                  }}
                >
                  <i className="fa-regular fa-circle-xmark mx-2"></i>
                  Decline Feedback
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row mx-1">
          <div className="col-md-7">
            <div
              style={{
                backgroundColor: "rgb(245, 245, 245)",
                borderRadius: 15,
                padding: 10,
                marginTop: 20,
              }}
            >
              <h5 className="px-2 mt-2">
                <i className="fa-solid fa-circle-info mx-2" />
                Purpose
                <span />
              </h5>
              <p className="text-secondary pt-3 mx-3">
                Establish whether candidate meets the role's specific values
                hiring bar
              </p>
            </div>
            <div
              style={{
                backgroundColor: "rgb(245, 245, 245)",
                borderRadius: 15,
                padding: 10,
                marginTop: 20,
              }}
            >
              <div className="row my-4">
                <div className="col-md-9">
                  <h5 className="mx-3">
                    <span
                      className="mx-2"
                      style={{
                        color: "#86b7fe",
                        backgroundColor: "#34435a",
                        borderRadius: "50%",
                        padding: "10px 0px",
                      }}
                    >
                      <i className="fa-solid fa-gift mx-3 " />
                    </span>
                    Values
                  </h5>
                </div>
                <div className="col-md-3 text-success">
                  <h4>Performing</h4>
                </div>
              </div>
              <div
                className="getit mt-3"
                style={{
                  backgroundColor: "rgb(233, 230, 230)",
                  borderRadius: 15,
                  padding: 10,
                }}
              >
                <div className="row my-3">
                  <div className="col-12">
                    <h5 className="mx-4">Get It Done</h5>
                  </div>
                </div>
                <div className="btngrp my-4 text-white">
                  <div className="d-flex flex-wrap mx-2">
                    <span
                      className="rounded-pill text-center"
                      style={{
                        backgroundColor: "gray",
                        padding: "17px 25px",
                        margin: "5px",
                      }}
                    >
                      Don't Know
                    </span>
                    <span
                      className="rounded-pill text-center mx-1"
                      style={{
                        backgroundColor: "gray",
                        padding: "17px 25px",
                        margin: "5px",
                      }}
                    >
                      Poor
                    </span>
                    <span
                      className="rounded-pill text-center mx-1"
                      style={{
                        backgroundColor: "gray",
                        padding: "17px 25px",
                        margin: "5px",
                      }}
                    >
                      Basic
                    </span>
                    <span
                      className="rounded-pill text-center"
                      style={{
                        backgroundColor: "#86b7fe",
                        padding: "17px 30px",
                        margin: "5px",
                      }}
                    >
                      Intermediate
                    </span>
                    <span
                      className="rounded-pill text-center mx-1"
                      style={{
                        backgroundColor: "gray",
                        padding: "17px 30px",
                        margin: "5px",
                      }}
                    >
                      Advanced
                    </span>
                    <span
                      className="rounded-pill text-center mx-1"
                      style={{
                        backgroundColor: "gray",
                        padding: "17px 30px",
                        margin: "5px",
                      }}
                    >
                      Expert
                    </span>
                    <span
                      style={{
                        fontSize: "30px",
                        color: "gray",
                        margin: "5px",
                      }}
                    >
                      <i className="fa-solid fa-comment ms-4" />
                    </span>
                  </div>
                </div>
                <div className="text mx-3 mt-5">
                  <h5>Basic</h5>
                  <div className="text1 d-flex flex-wrap my-4 justify-content-between">
                    <div className="summary1">
                      <p>
                        a. Original thinker, can break from convention to
                        generate new ideas.
                      </p>
                    </div>
                    <div className="icon text-white d-flex">
                      <span
                        className="rounded-pill mx-1 px-4 py-2 text-center"
                        style={{ backgroundColor: "gray", margin: "5px" }}
                      >
                        <i className="fa-regular fa-circle" />
                      </span>
                      <span
                        className="rounded-pill mx-1 px-4 py-2 text-center"
                        style={{ backgroundColor: "gray", margin: "5px" }}
                      >
                        <i className="fa-solid fa-xmark" />
                      </span>
                      <span
                        className="rounded-pill mx-1 px-4 py-2 text-center"
                        style={{
                          backgroundColor: "rgb(94, 241, 182)",
                          margin: "5px",
                        }}
                      >
                        <i className="fa-solid fa-check" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text mx-3 mt-5">
                  <h5>Intermediate</h5>
                  <div className="text1 d-flex flex-wrap my-4 justify-content-between">
                    <div className="summary1">
                      <p>a. Abstracts ideas and applies them across domains</p>
                    </div>
                    <div className="icon text-white d-flex">
                      <span
                        className="rounded-pill mx-1 px-4 py-2 text-center"
                        style={{ backgroundColor: "gray", margin: "5px" }}
                      >
                        <i className="fa-regular fa-circle" />
                      </span>
                      <span
                        className="rounded-pill mx-1 px-4 py-2 text-center"
                        style={{ backgroundColor: "gray", margin: "5px" }}
                      >
                        <i className="fa-solid fa-xmark" />
                      </span>
                      <span
                        className="rounded-pill mx-1 px-4 py-2 text-center"
                        style={{
                          backgroundColor: "rgb(94, 241, 182)",
                          margin: "5px",
                        }}
                      >
                        <i className="fa-solid fa-check" />
                      </span>
                    </div>
                  </div>
                  <div className="text1 d-flex flex-wrap my-4 justify-content-between">
                    <div className="summary1">
                      <p>
                        b. Creates through both adding and subtracting parts of
                        a solution
                      </p>
                    </div>
                    <div className="icon text-white d-flex">
                      <span
                        className="rounded-pill mx-1 px-4 py-2 text-center"
                        style={{ backgroundColor: "gray", margin: "5px" }}
                      >
                        <i className="fa-regular fa-circle" />
                      </span>
                      <span
                        className="rounded-pill mx-1 px-4 py-2 text-center"
                        style={{ backgroundColor: "gray", margin: "5px" }}
                      >
                        <i className="fa-solid fa-xmark" />
                      </span>
                      <span
                        className="rounded-pill mx-1 px-4 py-2 text-center"
                        style={{
                          backgroundColor: "rgb(94, 241, 182)",
                          margin: "5px",
                        }}
                      >
                        <i className="fa-solid fa-check" />
                      </span>
                    </div>
                  </div>
                  <div className="text1 d-flex flex-wrap my-4 justify-content-between">
                    <div className="summary1">
                      <p>
                        c. Challenges fundamentals and reimagines assumptions
                        and constraints
                      </p>
                    </div>
                    <div className="icon text-white d-flex">
                      <span
                        className="rounded-pill mx-1 px-4 py-2 text-center"
                        style={{ backgroundColor: "gray", margin: "5px" }}
                      >
                        <i className="fa-regular fa-circle" />
                      </span>
                      <span
                        className="rounded-pill mx-1 px-4 py-2 text-center"
                        style={{ backgroundColor: "gray", margin: "5px" }}
                      >
                        <i className="fa-solid fa-xmark" />
                      </span>
                      <span
                        className="rounded-pill mx-1 px-4 py-2 text-center"
                        style={{
                          backgroundColor: "rgb(94, 241, 182)",
                          margin: "5px",
                        }}
                      >
                        <i className="fa-solid fa-check" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text mx-3 mt-5">
                  <h5>Advanced</h5>
                  <div className="text1 d-flex flex-wrap my-4 justify-content-between">
                    <div className="summary1">
                      <p>
                        a. Prolific at generating highly original ideas that are
                        elegant and practical
                      </p>
                    </div>
                    <div className="icon text-white d-flex">
                      <span
                        className="rounded-pill mx-1 px-4 py-2 text-center"
                        style={{ backgroundColor: "gray", margin: "5px" }}
                      >
                        <i className="fa-regular fa-circle" />
                      </span>
                      <span
                        className="rounded-pill mx-1 px-4 py-2 text-center"
                        style={{ backgroundColor: "#f25757", margin: "5px" }}
                      >
                        <i className="fa-solid fa-xmark" />
                      </span>
                      <span
                        className="rounded-pill mx-1 px-4 py-2 text-center"
                        style={{ backgroundColor: "gray", margin: "5px" }}
                      >
                        <i className="fa-solid fa-check" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-5 my-4"
            style={{
              backgroundColor: "rgb(245 245 245)",
              borderRadius: 15,
              padding: 10,
              marginTop: 20,
            }}
          >
            <div
              className="linkedin my-3"
              style={{
                backgroundColor: "rgb(233, 230, 230)",
                padding: "15px 15px",
                borderRadius: 15,
              }}
            >
              <div className="d-flex justify-content-between">
                <span
                  className="rounded-pill px-5 py-1"
                  style={{ backgroundColor: "gray", color: "white" }}
                >
                  CV
                </span>
                <span className="text-secondary">Candidate Profile</span>
                <span className="text-secondary">Previous feedback</span>
              </div>
            </div>
            <div
              className="linkedin mt-3"
              style={{
                backgroundColor: "rgb(233, 230, 230)",
                padding: "15px 15px",
                borderRadius: 15,
              }}
            >
              <div className="d-flex justify-content-between">
                <span>
                  <span style={{ color: "black" }}>
                    <i className="fa-brands fa-linkedin mx-2" />{" "}
                  </span>
                  Linkedin profile
                </span>
                <span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-secondary" />
                </span>
              </div>
            </div>
            <div
              className="summary my-3"
              style={{
                backgroundColor: "rgb(233, 230, 230)",
                padding: "15px 15px",
                borderRadius: 15,
              }}
            >
              <div className="details d-flex justify-content-between">
                <span>
                  <span>Candidate CV</span>
                </span>
                <span style={{ color: "#86b7fe" }}>Open in new tab</span>
              </div>
              <div className="summary mt-4 mx-2 d-flex justify-content-between text-secondary">
                <span>Email</span>
                <span>wade.wilson@gmail.com</span>
              </div>
              <div className="summary mt-4 mx-2 d-flex justify-content-between text-secondary">
                <span>Mobile</span>
                <span>+44 1234 5678 7890</span>
              </div>
              <div className="summary mt-4 mx-2 d-flex justify-content-between text-secondary">
                <span>Company</span>
                <span>Facebook</span>
              </div>
              <div className="summary mt-4 mx-2 d-flex justify-content-between text-secondary">
                <span>Current Country</span>
                <span>United Kingdom</span>
              </div>
              <div className="summary mt-4 mx-2 d-flex justify-content-between text-secondary">
                <span>Notice Period</span>
                <span>60 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default CandidateScoreCard;
