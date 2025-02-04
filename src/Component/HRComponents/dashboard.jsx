import React from "react";
import "./App.css";

const HRDashboard = () => {
  return (
    <div className="page-wrapper">
           <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <header>
              <div className="container-fluid my-2">
                <div className="product-slider">
                  <div className="slider-wrapper">
                    {/* Product Images */}
                    <div className="row d-flex">
                      <div className="col-md-6">
                        <div className="product">
                          <img
                            src="https://i.ibb.co/p3ZmWPP/Screenshot-2025-01-03-163622.png"
                            alt="Product 1"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="product">
                          <img
                            src="https://i.ibb.co/0YxzyjT/Screenshot-2025-01-03-165427.png"
                            alt="Product 1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div
              className="mx-4 mb-4"
              style={{borderRadius: 15,backgroundColor: "rgb(245 245 245)" }}
            >
              <div className="row text-dark p-2 my-2 mx-1">
                <div
                  className="col-md-1"
                  style={{
                    backgroundColor: "lightgray",
                    borderRadius: "16px",
                    padding: "5px 17px",
                  }}
                >
                  <span>
                    6 <br /> <span>To do's</span>
                  </span>
                </div>
                <div className="col-md-2 text-dark">
                  <span>
                    2<br /> <span>Performance</span>
                  </span>
                </div>
                <div className="col-md-2  text-dark">
                  <span>
                    2<br /> <span >Recruiment</span>
                  </span>
                </div>
                <div className="col-md-1  text-dark">
                  <span>
                    2<br /> <span >HR</span>
                  </span>
                </div>
              </div>
              <table className="table table-striped HR_table text-center">
                <tbody>
                  <tr>
                    <td className="px-4">
                      <span
                        className="badge rounded-pill"
                        style={{ backgroundColor: "lightgray",color: "black" }}
                      >
                        <i className="fa-solid fa-users p-2" />
                      </span>
                    </td>
                    <td className="text-dark">Legal action relating to implement</td>
                    <td className="text-danger">Due in 1 day</td>
                    <td>
                      <span
                        className="badge rounded-pill"
                        style={{ backgroundColor: "lightgray", color: "black" }}
                      >
                        Training
                      </span>
                    </td>
                    <td>
                      <img
                        src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                        height="30px"
                        className="rounded-circle mb-1 mx-2"
                        alt="Team Member 1" style={{height: "30px"}}
                      />
                      Jane Doe
                    </td>
                    <td>
                      <span
                        className="badge rounded-pill px-2 py-1"
                        style={{ backgroundColor: "lightgray",color:"black" }}
                      >
                        Take action
                      </span>
                    </td>
                    <td>
                      <span
                        className="badge rounded-pill"
                        style={{ backgroundColor: "lightgray",color:"black"  }}
                      >
                        <i className="fa-solid fa-ellipsis" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4">
                      <span
                        className="badge rounded-pill"
                        style={{ backgroundColor: "lightgray",color:"black"  }}
                      >
                        <i className="fa-solid fa-bullhorn p-2" />
                      </span>
                    </td>
                    <td>Pending feedback for Screen Call Interview</td>
                    <td className="text-warning">Due in 5 days</td>
                    <td>
                      <span
                        className="badge rounded-pill"
                        style={{ backgroundColor: "lightgray", color:"black" }}
                      >
                        Interview
                      </span>
                    </td>
                    <td>
                      <img
                        src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                        height="30px"
                        className="rounded-circle mb-1 mx-2"
                        alt="Team Member 1" style={{height: "30px"}}
                      />
                      Jane Doe
                    </td>
                    <td>
                      <span
                        className="badge rounded-pill px-3 py-2"
                        style={{ backgroundColor: "lightgray",color:"black"  }}
                      >
                        Add feedback
                      </span>
                    </td>
                    <td>
                      <span
                        className="badge rounded-pill"
                        style={{ backgroundColor: "lightgray",color:"black"  }}
                      >
                        <i className="fa-solid fa-ellipsis" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4">
                      <span
                        className="badge rounded-pill"
                        style={{ backgroundColor: "lightgray",color:"black"  }}
                      >
                        <i className="fa-solid fa-arrow-up-right-dots p-2" />
                      </span>
                    </td>
                    <td>KPI Monthly revenue($m)</td>
                    <td className="text">Due in 11 day</td>
                    <td>
                      <span
                        className="badge rounded-pill"
                        style={{ backgroundColor: "lightgray", color: "black" }}
                      >
                        Performance
                      </span>
                    </td>
                    <td>
                      <img
                        src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                        height="30px"
                        className="rounded-circle mb-1 mx-2"
                        alt="Team Member 1" style={{height: "30px"}}
                      />
                      Jane Doe
                    </td>
                    <td>
                      <span
                        className="badge rounded-pill px-2 py-1"
                        style={{ backgroundColor: "lightgray",color:"black"  }}
                      >
                        Take action
                      </span>
                    </td>
                    <td>
                      <span
                        className="badge rounded-pill"
                        style={{ backgroundColor: "lightgray",color:"black"  }}
                      >
                        <i className="fa-solid fa-ellipsis" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4">
                      <span
                        className="badge rounded-pill"
                        style={{ backgroundColor: "lightgray",color:"black"  }}
                      >
                        <i className="fa-solid fa-book p-2" />
                      </span>
                    </td>
                    <td>Upcoming Screen Call interview</td>
                    <td className="text">Due in 25 day</td>
                    <td>
                      <span
                        className="badge rounded-pill"
                        style={{ backgroundColor: "lightgray", color: "black" }}
                      >
                        Interview
                      </span>
                    </td>
                    <td>
                      <img
                        src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                        height="30px"
                        className="rounded-circle mb-1 mx-2"
                        alt="Team Member 1" style={{height: "30px"}}
                      />
                      Jane Doe
                    </td>
                    <td>
                      <span
                        className="badge rounded-pill px-2 py-1"
                        style={{ backgroundColor: "lightgray",color:"black"  }}
                      >
                        Add feedback
                      </span>
                    </td>
                    <td>
                      <span
                        className="badge rounded-pill"
                        style={{ backgroundColor: "lightgray",color:"black"  }}
                      >
                        <i className="fa-solid fa-ellipsis" />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-3 my-4">
            <div
              style={{
                backgroundColor: "rgb(245 245 245)",
                borderRadius: 15,
                padding: 20,
              }}
            >
              <div className="text-dark d-flex justify-content-between">
                <span style={{ color: "gray", cursor: "pointer" }}>
                  In your team
                </span>
                <span style={{ color: "#4c50b3", cursor: "pointer" }}>
                  See all
                </span>
              </div>
              <div className="row mb-4 my-4">
                <div className="col-md-3 text-center">
                  <img
                    src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                    height="65px"
                    className="rounded-circle mb-1"
                    alt="Team Member 1"
                  />
                  <span className="text-dark">John</span>
                </div>
                <div className="col-md-3 text-center">
                  <img
                    src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                    height="65px"
                    className="rounded-circle mb-1"
                    alt="Team Member 2"
                  />
                  <span className="text-dark">Alice</span>
                </div>
                <div className="col-md-3 text-center">
                  <img
                    src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                    height="65px"
                    className="rounded-circle mb-1"
                    alt="Team Member 3"
                  />
                  <span className="text-dark">Emma</span>
                </div>
                <div className="col-md-3 text-center">
                  <img
                    src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                    height="65px"
                    className="rounded-circle mb-1"
                    alt="Team Member 4"
                  />
                  <span className="text-dark">Mike</span>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "rgb(245 245 245)",
                borderRadius: 15,
                padding: 20,
                marginTop: 20,
              }}
            >
              <div className="text-dark mb-2 d-flex justify-content-between">
                <span style={{ color: "gray", cursor: "pointer" }}>
                  Favourites
                </span>
                <span style={{ color: "#4c50b3", cursor: "pointer" }}>
                  <i className="fa-solid fa-pen" />
                </span>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex align-items-center mb-3 my-4">
                    <img
                      src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                      height="40px"
                      className="rounded-circle me-2"
                      alt="Favourite 1" style={{height: "30px"}}
                    />
                    <span className="text-dark">
                      Sophia <br /> (Product Designer)
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-3 my-4">
                    <img
                      src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                      height="40px"
                      className="rounded-circle me-2"
                      alt="Favourite 2" style={{height: "30px"}}
                    />
                    <span className="text-dark">
                      James <br /> (Executive)
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-3 my-3">
                    <img
                      src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                      height="40px"
                      className="rounded-circle me-2"
                      alt="Favourite 3" style={{height: "30px"}}
                    />
                    <span className="text-dark">
                      Olivia <br /> (HR)
                    </span>
                  </div>
                  <div className="d-flex align-items-center my-4">
                    <img
                      src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                      height="40px"
                      className="rounded-circle me-2"
                      alt="Favourite 4" style={{height: "30px"}}
                    />
                    <span className="text-dark">
                      Liam <br /> (Manager)
                    </span>
                  </div>
                  <div className="d-flex align-items-center my-4">
                    <img
                      src="https://i.ibb.co/0jDtZjF/6773bd1f5c33b1735638303.jpg"
                      height="40px"
                      className="rounded-circle me-2"
                      alt="Favourite 4" style={{height: "30px"}}
                    />
                    <span className="text-dark">
                      Liam <br /> (Manager)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
