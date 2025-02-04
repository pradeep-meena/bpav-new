import React from "react";
import Chart from "react-apexcharts";
import "bootstrap/dist/css/bootstrap.min.css";

const OutgoingsOverview = () => {
  const cashFlowOptions = {
    chart: { type: "bar" },
    xaxis: { categories: ["July", "August", "September", "October", "November", "December"] },
    tooltip: { theme: "light" },
  };

  const cashFlowSeries = [
    { name: "Cash In", data: [10000, 12000, 15000, 25000, 20000, 15000] },
    { name: "Cash Out", data: [8000, 10000, 13000, 22000, 18000, 14000] },
  ];

  const suppliers = [
    { name: "Client x", amount: "£123" },
    { name: "Client y", amount: "£123" },
    { name: "Client z", amount: "£123" },
    { name: "Client a", amount: "£123" },
    { name: "Client b", amount: "£123" },
  ];

  return (
    <div className="container-fluid bg-light py-4">
     <div className="d-flex align-items-center bg-secondary text-white px-3 py-2 rounded mb-4" style={{ gap: "10px" }}>
  <div className="bg-white text-dark px-2 py-1 rounded" style={{ fontWeight: "bold" }}>
    Suppliers
  </div>
  <div className="fw-bold">Expenses</div>
</div>


      {/* Suppliers and Expenses Section */}
      <div className="row g-4 mb-4">
        {/* Customers Card */}
        <div className="col-md-4">
          <div className="card shadow-sm text-center">
            <div className="card-header bg-secondary text-white">Customers</div>
            <div className="card-body">
              <h2 className="fw-bold">200</h2>
            </div>
          </div>
        </div>

        {/* Owing Card */}
        <div className="col-md-4">
          <div className="card shadow-sm text-center">
            <div className="card-header bg-secondary text-white">Owing</div>
            <div className="card-body">
              <h2 className="fw-bold">£1234</h2>
            </div>
          </div>
        </div>

        {/* Top Suppliers To Pay */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-header bg-secondary text-white">Top Suppliers To Pay</div>
            <div className="card-body">
              {suppliers.map((supplier, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between border-bottom py-2"
                >
                  <span>{supplier.name}</span>
                  <strong>{supplier.amount}</strong>
                </div>
              ))}
              <div className="text-end mt-2">
                <a href="#" className="text-primary text-decoration-none">
                  All
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Total Cash In and Out Chart */}
      <div className="card shadow-sm">
        <div className="card-header bg-secondary text-white">
          Total Cash In and Out
        </div>
        <div className="card-body">
          <Chart options={cashFlowOptions} series={cashFlowSeries} type="bar" height={300} />
        </div>
      </div>
    </div>
  );
};

export default OutgoingsOverview;
