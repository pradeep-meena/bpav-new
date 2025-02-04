import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { useState } from "react";
import { Bar } from "react-chartjs-2";

const HomeIncoming2 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const data = {
    labels: ["Dec", "Feb", "Apr", "Jun", "Aug", "Oct"],
    datasets: [
      {
        label: "Income",
        data: [10, 30, 20, 50, 40, 30],
        borderColor: "#d62788",
        backgroundColor: "rgba(214, 39, 136, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Projected Income",
        data: [5, 25, 15, 40, 35, 20],
        borderColor: "#999",
        borderDash: [5, 5],
        backgroundColor: "rgba(0,0,0,0)",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#666" } },
      y: { grid: { color: "#eaeaea" }, ticks: { color: "#666" } },
    },
  };

  const barChartData = {
    labels: ["Dec", "Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Money Coming In",
        data: [223, 234, 145, 256, 167],
        backgroundColor: "rgba(16, 224, 196, 0.6)",
        borderColor: "rgb(12, 136, 105)",
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#555" } },
      y: { grid: { color: "#eaeaea" }, ticks: { color: "#555" } },
    },
  };

  return (
    <div className="container py-4">
      {/* Header */}
      {/* <div className="mb-4">
        <h2 className="mb-3">Sales Overview</h2>

        <div className="d-flex justify-content-between align-items-center mb-4">
      
          <div className="d-flex">
            <div className="dropdown me-2">
              <button
                className="btn btn-primary dropdown-toggle"
                onClick={toggleDropdown}
                style={{ minWidth: "100px" }}
              >
                + New
              </button>
              {dropdownOpen && (
                <div className="dropdown-menu show">
                  <button className="dropdown-item">Quote</button>
                  <button className="dropdown-item">Statement</button>
                  <button className="dropdown-item">Payment Link</button>
                  <button className="dropdown-item">Invoice</button>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item disabled">Invoice to contact group</button>
                  <button className="dropdown-item">Add contact group</button>
                </div>
              )}
            </div>
            <button className="btn btn-primary me-2">Send Statements</button>
            <button className="btn btn-secondary">Import</button>
          </div>
        
          <button className="btn btn-primary">
            Search <i className="fas fa-search"></i>
          </button>
        </div>
      </div> */}

      {/* Sales Overview Section */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <h6>Money Coming In</h6>
          <div className="card shadow-sm p-3">
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <h6>Customers Owing the Most</h6>
          <div className="card shadow-sm p-4 text-center">
            <h6>Overall Cash Balance</h6>
            <h2 className="my-3">$34,559</h2>
            <ul className="list-unstyled">
              <li>Wise clearing to GBP: $15,712</li>
              <li>Tide Current Account: $10,414</li>
              <li>Tide Instant Saver: $7,434</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Income Section */}
      <div className="row align-items-center">
        <div className="col-md-4">
          <h6>Income</h6>
          <h2 className="text-success">$355,938</h2>
          <p className="text-success">▲ 89.9% from Dec 2022 – Nov 2023</p>
        </div>
        <div className="col-md-8">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default HomeIncoming2;