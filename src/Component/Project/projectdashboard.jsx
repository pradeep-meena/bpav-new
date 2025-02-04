import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

// Register all necessary Chart.js components
Chart.register(...registerables);

const ProjectDashboard = () => {
  const pieChartRef = useRef(null); // Ref for Pie Chart
  const barChartRef = useRef(null); // Ref for Bar Chart

  useEffect(() => {
    let pieChartInstance;
    let barChartInstance;

    if (pieChartRef.current && barChartRef.current) {
      // Pie Chart
      const pieCtx = pieChartRef.current.getContext("2d");
      pieChartInstance = new Chart(pieCtx, {
        type: "pie",
        data: {
          labels: [
            "Benjamin Price",
            "Mahmoud Gamal",
            "Ezzat Kiwan",
            "Amar Geneid",
            "Mike Davis (Deactivated)",
            "Abdelrahman Shams (Deactivated)",
            "Bonface Mutunga",
            "Emmanuel Okpekpe (Deactivated)",
            "Seif Ashraf",
            "BPAV Technical",
            "Accounts",
            "Unassigned",
          ],
          datasets: [
            {
              data: [7.65, 10, 15.53, 8.93, 5.31, 7.44, 5.74, 5.31, 24.25],
              backgroundColor: [
                "#6c757d",
                "#007bff",
                "#28a745",
                "#ffc107",
                "#17a2b8",
                "#dc3545",
                "#fd7e14",
                "#20c997",
                "#6610f2",
                "#e83e8c",
                "#6f42c1",
                "#adb5bd",
              ],
            },
          ],
        },
        options: {
          plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
          },
          layout: {
            padding: 20,
          },
          elements: {
            arc: {
              borderWidth: 2,
              borderColor: "#000",
            },
          },
        },
      });

      // Bar Chart
      const barCtx = barChartRef.current.getContext("2d");
      barChartInstance = new Chart(barCtx, {
        type: "bar",
        data: {
          labels: [
            "Benjamin Price",
            "Mahmoud Gamal",
            "Ezzat Kiwan",
            "Amar Geneid",
            "Mike Davis (Deactivated)",
            "Abdelrahman Shams (Deactivated)",
            "Bonface Mutunga",
            "Emmanuel Okpekpe (Deactivated)",
            "Seif Ashraf",
            "BPAV Technical",
            "Accounts",
            "Unassigned",
          ],
          datasets: [
            {
              data: [7.65, 10, 15.53, 8.93, 5.31, 7.44, 5.74, 5.31, 24.25],
              backgroundColor: [
                "#6c757d",
                "#007bff",
                "#28a745",
                "#ffc107",
                "#17a2b8",
                "#dc3545",
                "#fd7e14",
                "#20c997",
                "#6610f2",
              ],
            },
          ],
        },
        options: {
          plugins: { legend: { display: false } },
          scales: { y: { beginAtZero: true } },
        },
      });
    }

    // Cleanup charts on component unmount
    return () => {
      if (pieChartInstance) pieChartInstance.destroy();
      if (barChartInstance) barChartInstance.destroy();
    };
  }, []);

  return (
    <div className="page-wrapper">
       <div>
      
      <div className="py-3">
        {/* Top Metrics */}
        <div className="row text-center mb-2 mx-4">
          <div className="col-md-4 my-3 ">
            <div className="p-3 rounded"  style={{backgroundColor:"rgb(245 245 245)"}}>
              <h4  className="text-start">Unassigned</h4>
              <h1>111</h1>
              <p>Unassigned Tasks</p>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <div className="p-3 rounded"  style={{backgroundColor:"rgb(245 245 245)"}}>
              <h4  className="text-start">In Progress</h4>
              <h1>33</h1>
              <p>Tasks in progress</p>
            </div>
          </div>
          <div className="col-md-4 my-3 ">
            <div className="p-3 rounded"  style={{backgroundColor:"rgb(245 245 245)"}}>
              <h4 className="text-start">Completed</h4>
              <h1>157</h1>
              <p>Tasks completed</p>
            </div>
          </div>
        </div>
        {/* Charts Section */}
        <div className="row g-3 mx-4">
          <div className="col-md-6">
            <div className="d-flex flex-column p-3 rounded" style={{backgroundColor:"rgb(245 245 245)",    height: "400px"}}>
              <h5 className="text-start">Total Tasks by Assignee</h5>
              <canvas ref={pieChartRef} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column p-3 rounded" style={{backgroundColor:"rgb(245 245 245)",height: "400px" }}>
              <h5 className="text-start">Open Tasks by Assignee</h5>
              <canvas ref={barChartRef} style={{ height: "350px",width:"300px" }} />
            </div>
          </div>
        </div>
        <div className="my-3 py-2 px-3 shadow rounded" style={{backgroundColor:"rgb(245 245 245)"}}>
          <strong>Workload by Status</strong>
        </div>
      </div>
    </div> 
    </div>
  );
};

export default ProjectDashboard;