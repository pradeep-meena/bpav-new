import React from "react";
import Chart from "react-apexcharts";

const Analytics = () => {
  const styles = {
    container: {
      width: '100%',      
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      backgroundColor: "#f7f8fa",
      minHeight: "100vh",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      color:"#5db9cb"
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    buttonGroup: {
      display: "flex",
      gap: "10px",
    },
    button: {
      padding: "8px 16px",
      fontSize: "14px",
      backgroundColor: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: "6px",
      cursor: "pointer",
      color:"#5db9cb",
      transition: "all 0.2s ease",
    },
    filters: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "20px",
    },
    filterButton: {
      fontSize: "14px",
      color: "#5db9cb",
      cursor: "pointer",
    },
    chartsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px",
    },
    chartCard: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "16px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    },
    chartTitle: {
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    chartSubtitle: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "10px",
    },
  };

  // Chart Configurations
  const forecastWonOptions = {
    chart: { type: "bar" },
    xaxis: { categories: ["Oct 2024", "Nov 2024", "Dec 2024"] },
    tooltip: { theme: "light" },
  };
  const forecastWonSeries = [
    { name: "Pipeline", data: [400000, 200000, 300000] },
    { name: "Closed won", data: [75725, 129977.5, 313320] },
  ];

  const forecastRevenueOptions = {
    chart: { type: "bar", horizontal: true },
    xaxis: { categories: ["Benjamin Price", "Andrew Ashraf", "Ezzat Kiwan"] },
    tooltip: { theme: "light" },
  };
  const forecastRevenueSeries = [
    { name: "Pipeline", data: [308060, 3090, 2170] },
  ];

  const dealClosedOptions = {
    chart: { type: "line" },
    xaxis: { categories: ["25 Nov", "30 Nov", "5 Dec", "10 Dec"] },
    tooltip: { theme: "light" },
  };
  const dealClosedSeries = [
    { name: "Closed Amount", data: [20000, 30000, 50000, 60000] },
    { name: "Revenue Goal", data: [50000, 50000, 50000, 50000] },
  ];

  const dealsCreatedOptions = {
    chart: { type: "bar", horizontal: true },
    xaxis: { categories: ["Benjamin Price", "Unknown user", "Ezzat Kiwan"] },
    tooltip: { theme: "light" },
  };
  const dealsCreatedSeries = [{ name: "Deals", data: [28, 2, 1] }];

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Sales</h1>
        <div style={styles.buttonGroup}>
          <button style={styles.button}>Create dashboard</button>
          <button style={styles.button}>Actions</button>
          <button style={styles.button}>Share</button>
          <button style={styles.button}>Add report</button>
        </div>
      </div>

      {/* Filters */}
      <div style={styles.filters}>
        <div>
          <span style={styles.filterButton}>+ Quick filters</span>
          <span style={styles.filterButton}>| Advanced filters</span>
        </div>
        <span style={{ color: "#5db9cb", fontSize: "14px" }}>Manage dashboards</span>
      </div>

      {/* Charts Grid */}
      <div style={styles.chartsGrid}>
        {/* Forecast Won This Month */}
        <div style={styles.chartCard}>
          <div style={styles.chartTitle}>Forecast Won This Month</div>
          <div style={styles.chartSubtitle}>THIS ENTIRE QUARTER | MONTHLY</div>
          <Chart
            options={forecastWonOptions}
            series={forecastWonSeries}
            type="bar"
            height={250}
          />
        </div>

        {/* Forecast Revenue This Month */}
        <div style={styles.chartCard}>
          <div style={styles.chartTitle}>Forecast Revenue This Month</div>
          <div style={styles.chartSubtitle}>THIS ENTIRE MONTH</div>
          <Chart
            options={forecastRevenueOptions}
            series={forecastRevenueSeries}
            type="bar"
            height={250}
          />
        </div>

        {/* Deal Closed Totals vs Goal */}
        <div style={styles.chartCard}>
          <div style={styles.chartTitle}>Deal Closed Totals vs Goal</div>
          <div style={styles.chartSubtitle}>IN THE LAST 30 DAYS</div>
          <Chart
            options={dealClosedOptions}
            series={dealClosedSeries}
            type="line"
            height={250}
          />
        </div>

        {/* Deals Created */}
        <div style={styles.chartCard}>
          <div style={styles.chartTitle}>Deals Created</div>
          <div style={styles.chartSubtitle}>THIS ENTIRE MONTH</div>
          <Chart
            options={dealsCreatedOptions}
            series={dealsCreatedSeries}
            type="bar"
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
