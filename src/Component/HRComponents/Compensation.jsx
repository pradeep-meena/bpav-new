import React from "react";
import Chart from "react-apexcharts";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
// import { all_routes } from "../router/all_routes";

const Compensation =() => {
  const navigate = useNavigate();
  // Donut Chart Configuration (Total Compensation)
  const donutOptions = {
    labels: ["Base Salary", "Vested Equity", "Cash Bonus"],
    colors: ["#4e8dff", "#3ee6c7", "#ff6b81"],
    legend: { position: "bottom" },
    tooltip: { theme: "dark" },
  };

  const donutSeries = [118213, 44498, 8152];

  // Bar Chart Configuration (Compensation Over Time)
  const barOptions = {
    chart: { stacked: true, toolbar: { show: false } },
    colors: ["#4e8dff", "#3ee6c7", "#ff6b81"],
    xaxis: {
      categories: ["2020", "2021", "2022", "2023", "2024", "2025", "2026"],
      title: { text: "Year", style: { color: "#fff" } },
    },
    yaxis: {
      title: { text: "Compensation (in £)", style: { color: "#fff" } },
      labels: { style: { colors: "#fff" } },
    },
    grid: { borderColor: "#444" },
    tooltip: { theme: "dark" },
    legend: { position: "top", labels: { colors: "#fff" } },
  };

  const barSeries = [
    { name: "Base Salary", data: [50000, 60000, 65000, 70000, 75000, 0, 0] },
    { name: "Vested Equity", data: [15000, 20000, 25000, 30000, 35000, 0, 0] },
    { name: "Cash Bonus", data: [5000, 6000, 7000, 8000, 9000, 0, 0] },
  ];

  return (
    <div className="page-wrapper">
    <div className="container-fluid py-4">
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
                className="d-flex align-items-center mx-2 my-2 rounded-pill p-2 text-white" onClick={ () => {
                 console.log('performance')
                  navigate('/performance')}} 
                style={{ backgroundColor: "gray" }}
              >
                <i className="fa-solid fa-arrow-up-right-dots mx-2" />
                Performance
              </span>
         
              <span className="d-flex align-items-center mx-2 my-2" onClick={ () => {
                navigate('/mygoals')}} >
                <i className="fa-solid fa-bullseye mx-2" />
                Goals . 78%
              </span>
         
              
        
              <span className="d-flex align-items-center mx-2 my-2"  onClick={ () => {
                console.log("/roadmap")
                navigate('/roadmap')
              }}>
                <i className="fa-solid fa-map mx-2" />
                Roadmap
              </span>
             
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
              <span className="d-flex align-items-center mx-2 my-2" onClick={() => { navigate('/documents')}}>
                <i className="fa-regular fa-file-lines mx-2" />
                Documents
              </span>
              <span className="d-flex align-items-center mx-2 my-2"  onClick={ () => {
        navigate('/timeoff')
      }}>
                
                <i className="fa-solid fa-stopwatch mx-2"  />
                Time off
              </span>

              <span className="d-flex align-items-center mx-2 my-2"  onClick={ () => {
        
                navigate('/hrcompensation')
              }}>
                <i className="fa-brands fa-galactic-republic mx-2" />
                Compensation
              </span>
    
            </div>
          </div>
        </div>
        
        </div>

     

      {/* Main Dashboard Content */}
      <div className="row ">
        {/* Donut Chart (Total Compensation) */}
        <div className="col-md-4">
          <div className="card bg-secondary text-white">
            <div className="card-body">
              <h6>Total Compensation</h6>
              <Chart
                options={donutOptions}
                series={donutSeries}
                type="donut"
                height={250}
              />
              <div className="text-center mt-3">
                <h5>£125,321</h5>
                <span>in GBP</span>
              </div>
            </div>
          </div>
            {/* Equity Section */}
      <div className="card bg-secondary text-white mt-4">
        <div className="card-body">
          <h6>All-Time Equity</h6>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5>£193,482</h5>
              <span>Vested: £114,213 · Unvested: £79,498</span>
            </div>
            <div className="progress w-50">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
        </div>

        {/* Bar Chart (Compensation Over Time) */}
        <div className="col-md-8">
          <div className="card bg-secondary text-white">
            <div className="card-body">
              <h6>Compensation Over Time</h6>
              <Chart
                options={barOptions}
                series={barSeries}
                type="bar"
                height={470}
              />
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Compensation;
