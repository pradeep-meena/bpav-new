import React from "react";
import Chart from "react-apexcharts";

const CashFlowProjection = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      backgroundColor: "#f7f8fa",
      minHeight: "100vh",
    },
    header: {
     
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
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
      transition: "all 0.2s ease",
    },
    buttonHover: {
      backgroundColor: "#e5e7eb",
    },
    content: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
    },
    titleSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    statSection: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "20px",
    },
    statBox: {
      textAlign: "center",
      flex: 1,
    },
    statLabel: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "8px",
    },
    statValue: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    statPositive: {
      color: "#1a73e8",
    },
    statNegative: {
      color: "#e91e63",
    },
    statNeutral: {
      color: "#0f9d58",
    },
    chartContainer: {
      padding: "20px 0",
    },
    summaryCards: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
    },
    card: {
      flex: "1 1 calc(25% - 10px)",
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "16px",
      textAlign: "center",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
      minWidth: "250px",
    },
    cardTitle: {
      fontSize: "14px",
      marginBottom: "8px",
      color: "#666",
    },
    cardValue: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "8px",
    },
    cardChange: {
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "4px",
    },
    progressBarContainer: {
      height: "6px",
      borderRadius: "4px",
      backgroundColor: "#e0e0e0",
      margin: "10px 0",
      overflow: "hidden",
    },
    progressBar: {
      height: "100%",
      borderRadius: "4px",
    },
    dropdownSection: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
      fontSize: "14px",
      color: "#666",
      marginTop: "10px",
      marginBottom: "20px",
    },
    dropdown: {
      padding: "8px",
      fontSize: "14px",
      border: "1px solid #e5e7eb",
      borderRadius: "6px",
      cursor: "pointer",
    },
    link: {
      fontSize: "14px",
      color: "#0066ff",
      textDecoration: "none",
    },
  };

  const chartOptions = {
    chart: {
      id: "cash-flow-chart",
    },
    xaxis: {
      categories: [
        "Today",
        "1 Jan",
        "6 Jan",
        "11 Jan",
        "16 Jan",
        "21 Jan",
        "26 Jan",
      ],
    },
    stroke: {
      curve: "smooth",
    },
    tooltip: {
      theme: "light",
    },
  };

  const chartSeries = [
    {
      name: "Projected End Balance",
      data: [10000, 15000, 5000, 7000, 8000, 12000, 15000],
    },
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
    

      {/* Short-term Cash Flow Section */}
      <div style={styles.content}>
        <div style={styles.titleSection}>
          <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
            Short-term cash flow projection <span style={{ fontSize: "12px", color: "#388e3c" }}>Plus</span>
          </h2>
          <a href="#" style={styles.link}>
            Watch video tutorial
          </a>
        </div>
        {/* Dropdown Section */}
        <div style={styles.dropdownSection}>
          <div>
            Bank accounts included:
            <select style={styles.dropdown}>
              <option>13 bank accounts</option>
            </select>
          </div>
          <div>
            Projection time frame:
            <select style={styles.dropdown}>
              <option>Next 30 days</option>
            </select>
          </div>
          <button style={{ ...styles.button, fontWeight: "bold" }}>
            Edit projection
          </button>
        </div>
        <div style={styles.statSection}>
          <div style={styles.statBox}>
            <p style={styles.statLabel}>Total money in</p>
            <p style={{ ...styles.statValue, ...styles.statPositive }}>
              £24,072
            </p>
          </div>
          <div style={styles.statBox}>
            <p style={styles.statLabel}>Total money out</p>
            <p style={{ ...styles.statValue, ...styles.statNegative }}>
              -£22,042
            </p>
          </div>
          <div style={styles.statBox}>
            <p style={styles.statLabel}>Projected end balance</p>
            <p style={{ ...styles.statValue, ...styles.statNeutral }}>
              £13,295
            </p>
          </div>
        </div>
        <div style={styles.chartContainer}>
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="line"
            height={300}
          />
        </div>
      </div>

      {/* Summary Cards */}
      <div style={styles.summaryCards}>
        <div style={styles.card}>
          <p style={styles.cardTitle}>Total Invoice</p>
          <p style={styles.cardValue}>$3,237.94</p>
          <div style={styles.progressBarContainer}>
            <div
              style={{
                ...styles.progressBar,
                width: "32.4%",
                backgroundColor: "#1a73e8",
              }}
            ></div>
          </div>
          <p style={{ ...styles.cardChange, color: "#1a73e8" }}>
            <span>⬆ 32.40%</span> from last month
          </p>
        </div>
        <div style={styles.card}>
          <p style={styles.cardTitle}>Outstanding</p>
          <p style={styles.cardValue}>$3,237.94</p>
          <div style={styles.progressBarContainer}>
            <div
              style={{
                ...styles.progressBar,
                width: "4.4%",
                backgroundColor: "#673ab7",
              }}
            ></div>
          </div>
          <p style={{ ...styles.cardChange, color: "#e91e63" }}>
            <span>⬇ 4.40%</span> from last month
          </p>
        </div>
        <div style={styles.card}>
          <p style={styles.cardTitle}>Draft</p>
          <p style={styles.cardValue}>$3,237.94</p>
          <div style={styles.progressBarContainer}>
            <div
              style={{
                ...styles.progressBar,
                width: "12%",
                backgroundColor: "#ffb300",
              }}
            ></div>
          </div>
          <p style={{ ...styles.cardChange, color: "#0f9d58" }}>
            <span>⬆ 12%</span> from last month
          </p>
        </div>
        <div style={styles.card}>
          <p style={styles.cardTitle}>Total Overdue</p>
          <p style={styles.cardValue}>$3,237.94</p>
          <div style={styles.progressBarContainer}>
            <div
              style={{
                ...styles.progressBar,
                width: "15.4%",
                backgroundColor: "#f44336",
              }}
            ></div>
          </div>
          <p style={{ ...styles.cardChange, color: "#e91e63" }}>
            <span>⬇ 15.40%</span> from last month
          </p>
        </div>
      </div>
    </div>
  );
};

export default CashFlowProjection;
