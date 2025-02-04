import React from "react";
import { Link, useNavigate,Outlet } from "react-router-dom";
// import { all_routes } from "../router/all_routes";
// import { estimate_details } from "../../core/data/json/estimates-details";
// import ImageWithBasePath from "../../core/common/imageWithBasePath";
// import Table from "../../core/common/dataTable/index";
// import PredefinedDateRanges from "../../core/common/datePicker";
// import { payment_details } from "../../core/data/json/payments_details";
// import { expenses_details } from "../../core/data/json/expenses_details";
// import { DatePicker } from "antd";
// import CommonSelect from "../../core/common/commonSelect";
// import { provident_funds } from "../../core/data/json/provident_funds_details";
// import { taxs_details } from "../../core/data/json/taxs_details";
// import { employee_salary_details } from "../../core/data/json/employee_salary_details";
// import { render } from "react-dom";

// import CollapseHeader from "../../core/common/collapse-header/collapse-header";

const PerformanceLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="page-wrapper">
      <div className="container-fluid my-3">
        <header>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-6 col-md-6">
                <h4 className="mb-0">My Profile</h4>
              </div>
              <div className="col-6 col-md-6 text-end d-flex justify-content-end align-items-center">
                <div className="d-none d-md-flex">
                  <span>
                    <i className="fa-solid fa-magnifying-glass mx-2" />
                  </span>
                  <span>
                    <i className="fa-solid fa-bell mx-2" />
                  </span>
                  <span>
                    <i className="fa-solid fa-braille mx-2" />
                  </span>
                </div>
                <select
                  className="mx-2"
                  style={{
                    padding: "7px",
                    borderRadius: "20px",
                    backgroundColor: "rgb(245 245 245)",
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
                  alt="Team Member 1" style={{height: "35px"}}
                />
              </div>
            </div>
          </div>
        </header>

        <div
          className="row my-4 mx-3"
          style={{
            backgroundColor: "rgb(245,245,245)",
            padding: "25px 15px",
            borderRadius: 15,
          }}
        >
          <div className="col-md-12">
            <div className="img d-flex">
              <img
                src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                height="55px"
                className="rounded-circle mb-1 mx-2"
                    alt="Team Member 1"  style={{height: "40px"}}
              />
              <div className="name">
                <h4>Wade Wilson</h4>
                <div className="details text-secondary">
                  <span className="badge rounded-pill bg-success">Active</span>
                  <span>
                    <i className="fa-solid fa-wrench ms-3 me-1" />
                    Designer (Product)
                  </span>
                  <span>
                    <i className="fa-solid fa-user ms-3 me-1" />
                    Product . People Product . HR{" "}
                    <i className="fa-solid fa-location-dot mx-1" /> UK - Remote
                  </span>
                </div>
              </div>
            </div>
            <div className="feedback my-4">
              <span
                className="badge rounded-pill"
                style={{ backgroundColor: "gray", padding: "17px 20px",}}
              >
                <i className="fa-solid fa-comments mx-2" />
                Add feedback
              </span>
              <span
                className="badge rounded-pill px-4 py-3 mx-3"
                style={{ backgroundColor: "gray", fontSize: 15 }}
              >
                <i className="fa-solid fa-ellipsis" />
              </span>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row mx-3">
            <div className="col-12 d-flex flex-wrap">
              <span className="d-flex align-items-center mx-2 my-2">
                <i className="fa-solid fa-user mx-2" />
                Profile
              </span>
              <span
                className="d-flex align-items-center mx-2 my-2 rounded-pill p-2 text-white"
                style={{ backgroundColor: "gray" }}
              >
                <i className="fa-solid fa-arrow-up-right-dots mx-2" />
                Performance
              </span>
              {/* <Link to={all_routes.mygoals}> */}
              <span className="d-flex align-items-center mx-2 my-2" onClick={ () => {
                console.log("first")
                navigate('/performance')}} >
                <i className="fa-solid fa-bullseye mx-2" />
                Goals . 78%
              </span>
              {/* </Link> */}
              
              {/* <Link to={all_routes.roadmap}> */}
              <span className="d-flex align-items-center mx-2 my-2"  onClick={ () => {
                console.log("/roadmap")
                navigate('/roadmap')
              }}>
                <i className="fa-solid fa-map mx-2" />
                Roadmap
              </span>
              {/* </Link> */}
              <span className="d-flex align-items-center mx-2 my-2" onClick={ () => {
                console.log("first")
                navigate('/performance')
              }
              }>
                <i className="fa-solid fa-chart-simple mx-2" />
                Analytics
              </span>
              <span className="d-flex align-items-center mx-2 my-2">
                <i className="fa-solid fa-users mx-2" />
                Talent . 4 . 52%
              </span>
              <span className="d-flex align-items-center mx-2 my-2">
                <i className="fa-regular fa-file-lines mx-2" />
                Documents
              </span>
              <span className="d-flex align-items-center mx-2 my-2">
                
                <i className="fa-solid fa-stopwatch mx-2" />
                Time off
              </span>
              {/* <Link to={all_routes.compensation}> */}
              <span className="d-flex align-items-center mx-2 my-2"  onClick={ () => {
                console.log("hrcompensation")
                navigate('/hrcompensation')
              }}>
                <i className="fa-brands fa-galactic-republic mx-2" />
                Compensation
              </span>
              {/* </Link> */}
            </div>
          </div>
        </div>

      {/* <Outlet /> */}
        <>
        <div
          className="row my-4 mx-3"
          style={{
            backgroundColor: "rgb(245,245,245)",
            padding: "25px 15px",
            borderRadius: 15,
          }}
        >
          <div className="col-12">
            <div className="container">
              <div className="row gy-4">
                <div className="col-12 col-sm-6 col-lg-3 d-flex">
                  <div className="circle-container d-flex align-items-center w-100">
                    <div className="progress-circle">
                      <span>Q3</span>
                    </div>
                    <span className="mx-4">
                      <span
                        className="fw-bold text-center text-success"
                        style={{ fontSize: 25 }}
                      >
                        Exceeding <br />
                        <span
                          className="text-secondary fw-normal"
                          style={{ fontSize: 16 }}
                        >
                          Overall grade
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 d-flex">
                  <div className="circle-container1 d-flex align-items-center w-100">
                    <div className="progress-circle1">
                      <span>3/4</span>
                    </div>
                    <span className="mx-4">
                      <span style={{ fontSize: 17 }}>
                        Review cycles <br />
                        <span
                          className="text-secondary fw-normal"
                          style={{ fontSize: 16 }}
                        >
                          4 cycles required
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 d-flex">
                  <div className="circle-container2 d-flex align-items-center w-100">
                    <div className="progress-circle2">
                      <span>1/2</span>
                    </div>
                    <span className="mx-4">
                      <span style={{ fontSize: 17 }}>
                        Performing grades <br />
                        <span
                          className="text-secondary fw-normal"
                          style={{ fontSize: 16 }}
                        >
                          2 required
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 d-flex">
                  <div className="d-flex align-items-center w-100">
                    <div
                      className="rounded-circle px-4 py-4"
                      style={{ backgroundColor: "gray" }}
                    >
                      <span>
                        <i className="fa-solid fa-user text-white" />
                      </span>
                    </div>
                    <span className="mx-4">
                      <span style={{ fontSize: 17 }}>
                        Mid II <i className="fa-solid fa-arrow-right" /> Mid III{" "}
                        <br />
                        <span
                          className="text-secondary fw-normal"
                          style={{ fontSize: 16 }}
                        >
                          On track for Q1 '25
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-3 mx-3 d-flex ">
          <div className="review">
            <span
              className="badge rounded-pill fw-normal"
              style={{  
                backgroundColor: "gray",
                padding: "12px 20px",
                fontSize: 10,
              }}
            >
              Your review cycle
            </span>
            <span className="mx-4 text-secondary">Analytics</span>
          </div>
          <div className="request">
            <span
              className="badge rounded-pill fw-normal "
              style={{
                backgroundColor: "gray",
                padding: "12px 20px",
                fontSize: 10,
              }}
            >
              <span className="mx-2">
                <i className="fa-solid fa-plus" />
              </span>
              Request review
            </span>
            <span
              className="badge rounded-pill mx-1"
              style={{ backgroundColor: "gray", padding: "12px 20px"}}
            >
              <i className="fa-solid fa-ellipsis" />
            </span>
          </div>
        </div>
        <div className="row mx-1">
          <div className="col-md-3">
            <div
              style={{
                backgroundColor: "rgb(245,245,245)",
                color: "black",
                borderRadius: 15,
                padding: 20,
                marginTop: 20,
              }}
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex align-items-center mb-3 justify-content-between">
                    <div className="first d-flex">
                      <span
                        className="px-3 d-flex align-items-center text-white py-2 rounded-circle"
                        style={{ backgroundColor: "gray", fontWeight: 700 }}
                      >
                        Q4
                      </span>
                      <div className="mid mx-4 ">
                        <span>
                          Mid III <br /> Q4'24'
                        </span>
                      </div>
                    </div>
                    <div className="last">
                      <span className="text-secondary text-end">Pending</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3 justify-content-between">
                    <div className="first d-flex">
                      <span
                        className="px-3 d-flex align-items-center text-white py-2 rounded-circle"
                        style={{ backgroundColor: "gray", fontWeight: 700 }}
                      >
                        Q3
                      </span>
                      <div className="mid mx-4">
                        <span>
                          Mid III <br /> Q3'24'
                        </span>
                      </div>
                    </div>
                    <div className="last">
                      <span className="text-success text-end">Exceeding</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3 justify-content-between">
                    <div className="first d-flex">
                      <span
                        className="px-3 d-flex align-items-center text-white py-2 rounded-circle"
                        style={{ backgroundColor: "gray", fontWeight: 700 }}
                      >
                        Q2
                      </span>
                      <div className="mid mx-4">
                        <span>
                          Mid III <br /> Q2'24'
                        </span>
                      </div>
                    </div>
                    <div className="last">
                      <span className="text-success text-end">Performing</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3 justify-content-between">
                    <div className="first d-flex">
                      <span
                        className="px-3 d-flex align-items-center text-white  py-2 rounded-circle"
                        style={{ backgroundColor: "gray", fontWeight: 700 }}
                      >
                        Q1
                      </span>
                      <div className="mid mx-4">
                        <span>
                          Mid III <br /> Q1'24'
                        </span>
                      </div>
                    </div>
                    <div className="last">
                      <span className="text-success text-end">Exceeding</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3 justify-content-between">
                    <div className="first d-flex">
                      <span
                        className="px-3 d-flex align-items-center text-white  py-2 rounded-circle"
                        style={{ backgroundColor: "gray", fontWeight: 700 }}
                      >
                        Q4
                      </span>
                      <div className="mid mx-4">
                        <span>
                          Mid III <br /> Q4'24'
                        </span>
                      </div>
                    </div>
                    <div className="last">
                      <span className="text-success text-end">Performing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 my-4">
            <div
              className="performance"
              style={{
                backgroundColor: "rgb(245,245,245)",
                padding: "15px 15px",
                borderRadius: 15,
              }}
            >
              <div className="img d-flex">
                <div className="first">
                  <span style={{ fontWeight: "bold" }}>
                    Q2 2024{" "}
                    <span
                      className="badge rounded-pill mx-2"
                      style={{ backgroundColor: "gray",color:"#fff"}}
                    >
                      Current
                    </span>
                    <span className="text-secondary fw-0">
                      <br /> Performance Cycle
                    </span>
                  </span>
                </div>
                <div className="name mx-5">
                  <h5 className="text-success">
                    Performing{" "}
                    <span>
                      <i className="fa-solid fa-chart-simple text-secondary" />
                    </span>
                    <br />
                    <span className="text-secondary fs-0">Grade</span>
                  </h5>
                </div>
              </div>
              <div className="timeline my-4">
                <span>Timeline</span>
                <div className="row">
                  <div className="col-md-2">
                    <hr
                      style={{
                        height: 5,
                        borderRadius: 10,
                        color: "rgb(32 32 65)",
                      }}
                    />
                    <div className="text1 d-flex justify-content-center">
                      <span>
                        Goal setting <br />
                        <span className="text-secondary">Closed 1 Apr</span>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <hr
                      style={{
                        height: 5,
                        borderRadius: 10,
                        color: "rgb(32 32 65)",
                      }}
                    />
                    <div className="text1 d-flex justify-content-center">
                      <span>
                        Normination for promotion <br />
                        <span className="text-secondary d-flex justify-content-center">
                          Closed 17 Jun
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <hr
                      style={{
                        height: 5,
                        borderRadius: 10,
                        color: "rgb(32 32 65)",
                      }}
                    />
                    <div className="text1 d-flex justify-content-center">
                      <span>
                        Performance reciew <br />
                        <span className="text-secondary d-flex justify-content-center">
                          Closed 17 Jun
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <hr
                      style={{
                        height: 5,
                        borderRadius: 10,
                        color: "rgb(32 32 65)",
                      }}
                    />
                    <div className="text1 d-flex justify-content-center">
                      <span>
                        Calibration
                        <br />
                        <span className="text-secondary d-flex justify-content-center">
                          Closed 25 Jul
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <hr
                      style={{
                        height: 5,
                        borderRadius: 10,
                        color: "rgb(32 32 65)",
                      }}
                    />
                    <div className="text1 d-flex justify-content-center">
                      <span>
                        Published results
                        <br />
                        <span className="text-secondary d-flex justify-content-center">
                          Closed 2 Aug
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="summary my-3"
              style={{
                backgroundColor: "rgb(245,245,245)",
                padding: "15px 15px",
                borderRadius: 15,
              }}
            >
              <div className="top d-flex justify-content-between align-items-center flex-wrap">
                <div className="icon d-flex align-items-center">
                  <i className="fa-solid fa-chart-simple"></i>
                  <span className="mx-3">Performance Summary</span>
                </div>
                <div className="my-3">
                  <span
                    className="mx-4 rounded-pill p-3 text-white"
                    style={{ backgroundColor: "gray" }}
                  >
                    Details view
                  </span>
                </div>
              </div>

              <div className="gola d-flex justify-content-between align-items-center flex-wrap mx-4">
                <div className="aim d-flex align-items-center">
                  <i
                    className="fa-solid fa-bullseye rounded-circle p-2 mx-3"
                    style={{ backgroundColor: "#86b7fe" }}
                  ></i>
                  <span>Goals</span>
                </div>
                <div className="exu">
                  <span className="text-success fw-bold">Exceeding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      </div>
      </div>
  );
};

export default PerformanceLayout;
