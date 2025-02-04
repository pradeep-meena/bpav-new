import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
const SalesOverview2 = () => {
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

  // Options for the chart
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#666",
        },
      },
      y: {
        grid: {
          color: "#eaeaea",
        },
        ticks: {
          color: "#666",
        },
      },
    },
  };
  const barChartData = {
    labels: ["Dec", "Jan", "Feb", "Mar", "Apr", ],
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

  // Options for the bar chart
  const barChartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#555",
        },
      },
      y: {
        grid: {
          color: "#eaeaea",
        },
        ticks: {
          color: "#555",
        },
      },
    },
  };

  return (
    <div className="page-wrapper" >
      <div className="dashboard-container">
      {/* Header */}
      <div className="sales-overview-container">
        {/* Title */}
        <h2 className="sales-title">Sales overview</h2>

        <div className="sales-overview-header">
          <div className="action-buttons">
            {/* Left Buttons */}
            <div className="left-buttons">
              {/* Dropdown Button */}
              <div className="dropdown-container">
                <button
                  className="btn btn-primary dropdown-btn"
                  onClick={toggleDropdown}
                >
                  + New
                </button>
                {dropdownOpen && (
                  <div className="dropdown-menu m-5">
                    <div className="dropdown-item">
                      <i className="icon icon-quote"></i> Quote
                    </div>
                    <div className="dropdown-item">
                      <i className="icon icon-statement"></i> Statement
                    </div>
                    <div className="dropdown-item">
                      <i className="icon icon-payment"></i> Payment Link
                    </div>
                    <div className="dropdown-item">
                      <i className="icon icon-invoice"></i> Invoice
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="dropdown-item-disabled">
                      Invoice to contact group
                    </div>
                    <div className="dropdown-item">
                      <i className="icon icon-add-contact"></i> Add contact group
                    </div>
                  </div>
                )}
              </div>
              <button className="btn btn-primary">Send Statements</button>
              <button className="btn btn-secondary">Import</button>
            </div>

            {/* Search Button */}
            <div className="right-buttons">
              <button className="btn btn-primary">
                Search <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Financepage Overview Section */}
     
      <div className="row mb-4">
        <div className="col-md-6">
          <h6>Money Coming In</h6>
          
          <div className="card p-3 shadow-sm">
          <Bar data={barChartData} options={barChartOptions} />
        </div>
        </div>
        <div className="col-md-6">
          <h6>Customers Owing the Most</h6>
          <div className="card cash-balance py-5">
          <h6>Overall cash balance</h6>
          <h2>34,559</h2>
          <ul>
            <li>Wise clearing to GBP: 15,712</li>
            <li>Tide Current Account: 10,414</li>
            <li>Tide Instant Saver: 7,434</li>
          </ul>
        </div>
        </div>
      </div>
      {/* Income Section with Chart */}
      <div className="income-section">
        <div className="income-details">
          <h6>Income</h6>
          <h2>355,938</h2>
          <p className="text-success">▲ 89.9% from Dec 2022 – Nov 2023</p>
        </div>
        <div className="income-chart">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  </div>
  );
};

export default SalesOverview2;