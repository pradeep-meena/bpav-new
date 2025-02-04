import React, { useEffect } from "react";
import { all_routes } from "../router/all_routes";
import { Link } from "react-router-dom";

const IndividualCandidatePage = () => {
  useEffect(() => {
    const headings = document.querySelectorAll(".headingarrow");

    if (headings.length > 0) {
      const firstHeading = headings[0];
      const firstArrow = firstHeading.querySelector(".toggle-arrow");
      const firstProfileRow = firstHeading.querySelector(".profile-row");

      // Ensure the first field is open by default
      if (firstProfileRow && firstArrow) {
        firstProfileRow.style.display = "flex";
        firstArrow.classList.add("arrow-rotated");
      }

      // Add toggle functionality to all rows
      const toggleFunctions = [];
      headings.forEach((heading) => {
        const arrow = heading.querySelector(".toggle-arrow");
        const profileRow = heading.querySelector(".profile-row");

        if (arrow && profileRow) {
          const toggleFunction = () => {
            const isHidden =
              profileRow.style.display === "none" ||
              profileRow.style.display === "";
            profileRow.style.display = isHidden ? "flex" : "none";
            arrow.classList.toggle("arrow-rotated");
          };

          arrow.addEventListener("click", toggleFunction);
          toggleFunctions.push({ arrow, toggleFunction });
        }
      });
      return () => {
        toggleFunctions.forEach(({ arrow, toggleFunction }) => {
          arrow.removeEventListener("click", toggleFunction);
        });
      };
    }
  }, []);

  return (
    <div className="page-wrapper">
      <div className="container-fluid my-3">
        <header className="mx-2">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-between">
              <div className="text">
                <h4>
                  <i className="fa-solid fa-arrow-left" />
                </h4>
              </div>
              <div className="icon">
                <span>
                  {" "}
                  <i className="fa-solid fa-magnifying-glass mx-2" />
                </span>
                <span>
                  <i className="fa-solid fa-bell mx-2" />
                </span>
                <span>
                  <i className="fa-solid fa-braille mx-2" />
                </span>
                <select
                  className="mx-2"
                  style={{
                    padding: 7,
                    borderRadius: 20,
                    backgroundColor: "rgb(245 245 245 )",
                    color: "black",
                    border: "none",
                  }}
                >
                  <option>Your Company Name</option>
                </select>
                <img
                  src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                  height="35px"
                  className="rounded-circle mb-1 mx-2"
                  alt="Team Member 1" style={{height:"35px"}}
                />
              </div>
            </div>
          </div>
        </header>
        <div
          className="row my-4 mx-2 mx-md-4"
          style={{
            backgroundColor: "rgb(245 245 245)",
            padding: "25px 15px",
            borderRadius: 15,
          }}
        >
          <div className="col-12">
            <div className="img d-flex flex-wrap align-items-center">
              <img
                src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                height="55px"
                className="rounded-circle mb-1 mx-2"
                alt="Team Member 1" style={{height:"55px"}}
              />
              <div className="name">
                <h4>Wade Wilson</h4>
                <div class-Name="details text-secondary">
                  <span className="d-block d-md-inline">
                    <i className="fa-solid fa-microphone mx-2" />
                    Current stage: Problem Solving . 4/9
                  </span>
                  <span className="mx-0 mx-md-2 d-block d-md-inline">
                    <i className="fa-solid fa-clock" /> activity at 12 Dec 2023,
                    16:00
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex flex-wrap mt-4 text-white">
              <div className="schedule my-2">
                <span
                  className="rounded-pill d-inline-flex align-items-center"
                  style={{ backgroundColor: "gray", padding: "17px 20px",}}
                >
                  <i className="fa-solid fa-calendar-day mx-2" />
                  Schedule interview
                </span>
              </div>
              <div className="schedule mx-0 mx-md-3 my-2">
                <span
                  className="rounded-pill d-inline-flex align-items-center"
                  style={{ backgroundColor: "gray", padding: "17px 20px" }}
                >
                  <i className="fa-solid fa-up-right-and-down-left-from-center mx-2" />
                  Change Stage
                </span>
              </div>
              <div className="schedule my-2">
                <span
                  className="rounded-pill d-inline-flex align-items-center"
                  style={{ backgroundColor: "gray", padding: "17px 20px" }}
                >
                  <i className="fa-solid fa-envelope mx-2" />
                  Send Email
                </span>
                <span
                  className="badge rounded-pill px-3 py-3 mx-2 d-inline-flex align-items-center"
                  style={{ backgroundColor: "gray", fontSize: 15 }}
                >
                  <i className="fa-solid fa-ellipsis" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row mx-2">
          <div
            className="col-12 d-flex flex-wrap justify-content-start"
            style={{ cursor: "pointer" }}
          >
            <span
              className="mx-2 my-2 rounded-pill d-flex align-items-center"
              style={{
                backgroundColor: "gray",
                padding: "5px 15px",
                color: "white",
              }}
            >
              <i className="fa-solid fa-user mx-2" />
              <Link to={all_routes.candidatescorecard}>
              <span className="px-1">Overview</span>
              </Link>
            </span>
            <span className="mx-2 my-2 d-flex align-items-center">
              <i className="fa-solid fa-arrow-up-right-dots mx-2" />
              Performance
            </span>
            <span className="mx-2 my-2 d-flex align-items-center">
              Document . 2
            </span>
            <span className="mx-2 my-2 d-flex align-items-center">
              <i className="fa-regular fa-file-lines mx-2" />
              Forms . 2
            </span>
            <span className="mx-2 my-2 d-flex align-items-center">
              <i className="fa-solid fa-envelope mx-2" />
              Emails . 12
            </span>
            <span className="mx-2 my-2 d-flex align-items-center">
              <i className="fa-solid fa-comments mx-2" />
              Comments . 10
            </span>
            <span className="mx-2 my-2 d-flex align-items-center">
              <i className="fa-solid fa-arrow-trend-up mx-2" />
              Timeline . 20
            </span>
          </div>
        </div>

        <div className="row mx-1">
          <div className="col-md-6">
            <div
              style={{
                backgroundColor: "rgb(245 245 245)",
                borderRadius: 15,
                padding: 10,
                marginTop: 20,
              }}
            >
              <h5 className="px-2 mt-2">
                Designer (Products){" "}
                <span>
                  <i className="fa-solid fa-chevron-down" />
                </span>
              </h5>
              <p className="text-secondary px-2">Opportunity</p>
            </div>
            <div
              style={{
                backgroundColor: "rgb(245 245 245)",
                borderRadius: 15,
                padding: 10,
                marginTop: 20,
              }}
            >
              <div className="row text-secondary">
                <div className="col-md-7">
                  <span>Stage</span>
                </div>
                <div className="col-md-3">
                  <span>Recommendation</span>
                </div>
                <div className="col-md-2">
                  <span>Rating</span>
                </div>
              </div>
              <div className="headingarrow mt-4">
                <span>
                  <i
                    className="fa-solid fa-chevron-down mx-2 text-secondary toggle-arrow"
                    style={{ cursor: "pointer" }}
                  />
                  CV Screening
                </span>
                <div className="row profile-row mt-4">
                  <div className="col-md-6 mx-4 d-flex">
                    <img
                      src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                      height="45px"
                      className="rounded-circle mb-1 mx-2"
                      alt="Team Member 1" style={{height:"40px"}}
                    />
                    <div>
                      <span className="mx-1">
                        Val Purvis <br />{" "}
                        <span className="text-secondary">10 days ago</span>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-2 mt-2 text-success text-end">
                    <span>
                      <i className="fa-solid fa-thumbs-up" />
                    </span>
                    <span className="mx-2">Hire</span>
                  </div>
                </div>
              </div>
              <div className="headingarrow mt-4">
                <span>
                  <i
                    className="fa-solid fa-chevron-down mx-2 text-secondary toggle-arrow"
                    style={{ cursor: "pointer" }}
                  />
                  Screen Call
                </span>
                <div className="row profile-row mt-4">
                  <div className="col-md-6 mx-4 d-flex">
                    <img
                      src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                      height="45px"
                      className="rounded-circle mb-1 mx-2"
                      alt="Team Member 1" style={{height:"40px"}}
                    />
                    <div>
                      <span className="mx-1">
                        Nathan Cooper <br />{" "}
                        <span className="text-secondary">6 days ago</span>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-2 mt-2 text-success text-end">
                    <span>
                      <i className="fa-solid fa-thumbs-up" />
                    </span>
                    <span className="mx-2">Hire</span>
                  </div>
                </div>
              </div>
              <div className="headingarrow mt-4">
                <span>
                  <span>
                    <i
                      className="fa-solid fa-chevron-down mx-2 text-secondary  toggle-arrow"
                      style={{ cursor: "pointer" }}
                    />
                  </span>
                  Portfolio Review
                </span>
                <div className="row profile-row mt-4">
                  <div className="col-md-6 mx-4 d-flex">
                    <img
                      src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                      height="45px"
                      className="rounded-circle mb-1 mx-2"
                      alt="Team Member 1" style={{height:"40px"}}
                    />
                    <div>
                      <span className="mx-1">
                        Jerrod Halbert <br />{" "}
                        <span className="text-secondary">4 days ago</span>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-2 mt-2 text-success text-end">
                    <span>
                      <i className="fa-solid fa-thumbs-up" />
                    </span>
                    <span className="mx-2">Hire</span>
                  </div>
                  <div className="col-md-3 mt-2 text-end">
                    <span className="badge rounded-pill bg-secondary">
                      Intermediate
                    </span>
                  </div>
                </div>
              </div>
              <div className="headingarrow mt-4">
                <span>
                  <span>
                    <i
                      className="fa-solid fa-chevron-down mx-2 text-secondary  toggle-arrow"
                      style={{ cursor: "pointer" }}
                    />
                  </span>
                  Design Skills
                </span>
                <div className="row profile-row mt-4">
                  <div className="col-md-6 mx-4 d-flex">
                    <img
                      src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                      height="45px"
                      className="rounded-circle mb-1 mx-2"
                      alt="Team Member 1" style={{height:"40px"}}
                    />
                    <div>
                      <span className="mx-1">
                        Serentiy Fisher <br />{" "}
                        <span className="text-secondary">3 days ago</span>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-2 mt-2 text-success text-end">
                    <span>
                      <i className="fa-solid fa-thumbs-up" />
                    </span>
                    <span className="mx-2">Hire</span>
                  </div>
                  <div className="col-md-3 mt-2 text-end">
                    <span className="badge rounded-pill bg-secondary">
                      Advanced
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-4">
            <div
              className="linkedin"
              style={{
                backgroundColor: "rgb(245 245 245)",
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
              <div className="mt-4 d-flex justify-content-between">
                <span>
                  <span style={{ color: "black" }}>
                    <i className="fa-solid fa-file-lines mx-2" />{" "}
                  </span>
                  Candidate CV
                </span>
                <span>
                  <i className="fa-solid fa-angle-right text-secondary" />
                </span>
              </div>
            </div>
            <div
              className="summary my-3"
              style={{
                backgroundColor: "rgb(245 245 245)",
                padding: "15px 15px",
                borderRadius: 15,
              }}
            >
              <div className="tag">
                <span
                  className="badge rounded-pill px-3 py-2"
                  style={{ backgroundColor: "#86b7fe" }}
                >
                  <i className="fa-solid fa-tag mx-1" />
                  Add tag
                </span>
                <span
                  className="badge rounded-pill px-3 py-2 mx-1"
                  style={{ backgroundColor: "#697990", color: "#86b7fe" }}
                >
                  Relevant_Experience
                  <i className="fa-solid fa-xmark px-2" />
                </span>
                <span
                  className="badge rounded-pill px-3 py-2 my-2"
                  style={{ backgroundColor: "#697990", color: "#86b7fe" }}
                >
                  Relocate
                  <i className="fa-solid fa-xmark mx-1" />
                </span>
              </div>
            </div>
            <div
              className="summary my-3"
              style={{
                backgroundColor: "rgb(245 245 245)",
                padding: "15px 15px",
                borderRadius: 15,
              }}
            >
              <div className="details d-flex justify-content-between">
                <span>
                  <span style={{ color: "black" }}>
                    <i className="fa-solid fa-user mx-2" />
                  </span>
                  <span className="mx-4">Personal Details</span>
                </span>
                <span>Edit</span>
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
            <div
              className="summary my-3"
              style={{
                backgroundColor: "rgb(245 245 245)",
                padding: "15px 15px",
                borderRadius: 15,
              }}
            >
              <div className="details d-flex justify-content-between">
                <span>
                  <span style={{ color: "black" }}>
                    <i className="fa-solid fa-microphone mx-2" />
                  </span>
                  <span className="mx-4">Opportunity Details</span>
                </span>
                <span>Edit</span>
              </div>
              <div className="summary mt-4 mx-2 d-flex justify-content-between text-secondary">
                <span>Seniority</span>
                <span>Senior</span>
              </div>
              <div className="summary mt-4 mx-2 d-flex justify-content-between text-secondary">
                <span>Recruiter Assigned</span>
                <span>
                  <img
                    src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                    height="20px"
                    className="rounded-circle mb-1 mx-2"
                    alt="Team Member 1" style={{height:"20px"}}
                  />
                  Harry Peter
                </span>
              </div>
              <div className="summary mt-4 mx-2 d-flex justify-content-between text-secondary">
                <span>Hiring Manager</span>
                <span>
                  <img
                    src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                    height="20px"
                    className="rounded-circle mb-1 mx-2"
                    alt="Team Member 1" style={{height:"20px"}}
                  />
                  Keneth Conroy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualCandidatePage;
