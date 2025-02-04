import React,{ useState} from "react";
import Chart from "react-apexcharts";
// import { all_routes } from "../router/all_routes";
import { Link } from "react-router-dom";
import OutgoingsOverview from './OutgoingsOverview';


const AccountsPayable = () => {
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
      color:"#26a0fc"
    },
    content: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
    },
    summaryCards: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    card: {
      flex: 1,
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "16px",
      textAlign: "center",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
      
    },
    justfiy:{
        justifyContent:"space-between"
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
    expenseClaims: {
      display: "flex",
      gap: "20px",
      color: "#26a0fc"
    },
    chart: {
      flex: 1,
      backgroundColor: "#fff",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    },
    expenseStats: {
      flex: 1,
      backgroundColor: "#fff",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    },
    expensesGraph: {
      backgroundColor: "#fff",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    },
  };

  const summaryCards = [
    { title: "Total Invoice", value: "$3,237.94", change: "+32.40%", progress: 32.4, color: "#1a73e8" },
    { title: "Outstanding", value: "$3,237.94", change: "-4.40%", progress: 4.4, color: "#e91e63" },
    { title: "Draft", value: "$3,237.94", change: "+12%", progress: 12, color: "#ffb300" },
    { title: "Total Overdue", value: "$3,237.94", change: "-15.40%", progress: 15.4, color: "#f44336" },
  ];

  const billsChartOptions = {
    chart: { type: "bar" },
    xaxis: { categories: ["Older", "15-21 Dec", "29 Dec-4 Jan", "5-11 Jan", "Future"] },
    tooltip: { theme: "light" },
  };

  const billsChartData = [{ data: [0, 0, 3, 1, 0] }];

  const expensesChartOptions = {
    chart: { type: "area" },
    xaxis: { categories: ["Dec", "Feb", "Apr", "Jun", "Aug", "Oct"] },
    tooltip: { theme: "light" },
  };

  const expensesChartData = [{ name: "Expenses", data: [10000, 15000, 20000, 35000, 60000, 40000] }];

   const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div className="contenar">
    <div style={styles.container}>
      {/* Header */}
 <div className="page-wrapper">
  <div className="container my-3">
    {/* Header Section */}
    <div className="row align-items-center justify-content-between mb-3">
      <div className="col-12 col-md-6">
        <h1 className="fw-bold">Outgoings Overview</h1>
      </div>
      <div className="col-12 col-md-6 d-flex flex-column flex-md-row gap-2 justify-content-md-end">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={toggleDropdown}
          >
            + New
          </button>
          <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
            <li><Link to='/allbills' className="dropdown-item">Bills</Link></li>
            <li><Link to='/allcreditnotes' className="dropdown-item">Credit Notes</Link></li>
            <li><Link to='/allremitance' className="dropdown-item">Remittance Slip</Link></li>
            <li><Link to='/expenses' className="dropdown-item">Expense</Link></li>
            <li><Link to='/allpurchase' className="dropdown-item">Purchase Order</Link></li>
            <div className="dropdown-divider"></div>
            <li className="dropdown-item">Add Contact Group</li>
          </ul>
        </div>
        <button className="btn btn-outline-primary">Send Statements</button>
        <button className="btn btn-outline-primary">Import</button>
        <button className="btn btn-outline-primary">Search</button>
      </div>
    </div>

    {/* Summary Cards Section */}
    <div className="row g-3">
      {summaryCards.map((card, index) => (
        <div key={index} className="col-12 col-sm-6 col-lg-3">
          <div className="card p-3 text-center shadow-sm">
            <p className="text-muted">{card.title}</p>
            <h4 className="fw-bold">{card.value}</h4>
            <div className="progress my-2" style={{ height: "5px" }}>
              <div className="progress-bar" style={{ width: `${card.progress}%`, backgroundColor: card.color }}></div>
            </div>
            <p className={`mb-0 ${card.change.includes("+") ? "text-success" : "text-danger"}`}>
              {card.change.includes("+") ? "⬆" : "⬇"} {card.change}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Bills & Expense Claims Section */}
    <div className="row g-3 my-3">
      <div className="col-12 col-md-6">
        <div className="card p-3 shadow-sm">
          <h3>Bills you need to pay</h3>
          <Chart options={billsChartOptions} series={billsChartData} type="bar" height={200} />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="card p-3 shadow-sm">
          <h3>Expense claims</h3>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
            <button className="btn btn-primary mb-2">Create new expense</button>
            <ul className="list-unstyled mb-0">
              <li>No drafts:</li>
              <li>Nothing to review:</li>
              <li>6 to pay:</li>
            </ul>
            <ul className="list-unstyled mb-0">
              <li>£0.00</li>
              <li>£0.00</li>
              <li>£203.65</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Expenses Graph Section */}
    <div className="card p-3 shadow-sm">
      <h3>Expenses</h3>
      <p>£1234 (⬆ 133.0% from last year)</p>
      <p>Cost of goods sold: £1234</p>
      <p>Operating expenses: £1234</p>
      <Chart options={expensesChartOptions} series={expensesChartData} type="area" height={200} />
    </div>
  </div>
  <OutgoingsOverview />
</div>


      {/* Summary Cards */}
      {/* <Link to={ all_routes.homeincoming} > */}
      
      {/* </Link> */}

      {/* Bills Section */}

      {/* Expenses Graph */}
    
    </div>
    </div>
  );
};

export default AccountsPayable;
