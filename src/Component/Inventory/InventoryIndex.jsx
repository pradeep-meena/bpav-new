import React from "react";
import Chart from "react-apexcharts";

const InventoryIndex = () => {
  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f7f8fa",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    chartsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)", // Two charts per row
      gap: "20px", // Spacing between charts
    },
    chartBox: {
      backgroundColor: "white",
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    },
  };

  // Chart Options and Data
  const barChartOptions = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Landing", "Site", "App", "Board", "Bill"],
    },
  };

  const barChartSeries = [
    {
      name: "Series 1",
      data: [30, 40, 50, 60, 70],
    },
  ];

  const pieChartOptions = {
    labels: ["Title 1", "Title 2"],
  };

  const pieChartSeries = [50, 50];

  const funnelChartOptions = {
    chart: {
      type: "funnel",
    },
    labels: ["Landing", "Site", "App", "Board", "Bill"],
  };

  const funnelChartSeries = [70, 60, 50, 40, 30];

  return (
    <div
      className="inventory-dashbord"
      style={{padding: "10px 20px"}}
    >
      <div className="container">
        <h1 style={styles.header}>Dashboard</h1>
        <div style={styles.chartsContainer}>
          {/* Horizontal Bar Chart */}
          <div style={styles.chartBox}>
            <Chart
              options={barChartOptions}
              series={barChartSeries}
              type="bar"
              height={300}
            />
          </div>

          {/* Vertical Bar Chart */}
          <div style={styles.chartBox}>
            <Chart
              options={{
                ...barChartOptions,
                plotOptions: { bar: { horizontal: false } },
              }}
              series={barChartSeries}
              type="bar"
              height={300}
            />
          </div>

          {/* Pie Chart */}
          <div style={styles.chartBox}>
            <Chart
              options={pieChartOptions}
              series={pieChartSeries}
              type="pie"
              height={300}
            />
          </div>

          {/* Line Chart */}
          <div style={styles.chartBox}>
            <Chart
              options={{
                chart: { type: "line" },
                xaxis: {
                  categories: ["Landing", "Site", "App", "Board", "Bill"],
                },
              }}
              series={barChartSeries}
              type="line"
              height={300}
            />
          </div>

          {/* Funnel Chart */}
          {/* <div style={styles.chartBox}>
      <Chart options={funnelChartOptions} series={funnelChartSeries} type="funnel" height={300} />
    </div> */}

          {/* Another Horizontal Bar Chart */}
          <div style={styles.chartBox}>
            <Chart
              options={barChartOptions}
              series={barChartSeries}
              type="bar"
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryIndex;
