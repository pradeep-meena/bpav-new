import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css"; // Add custom CSS file if needed
import Datatable from "./Datatable";

const columns = [
  {
    title: "Name",
    dataIndex: "Name",
    render: (text, record) => (
      <div className="d-flex align-items-center file-name-icon">
        <a href="#" className="avatar avatar-md border avatar-rounded">
          <img
            style={{ borderRadius: "100%", outline: "none" }}
            src="https://via.placeholder.com/30"
            height={"30px"}
            width={"30px"}
          />
        </a>
        <div className="ms-2">
          <h6 className="fw-medium">
            <a href="#">{text}</a>
          </h6>
          <span className="fs-12 fw-normal">{record.Roll}</span>
        </div>
      </div>
    ),
    sorter: (a, b) => a.Name.length - b.Name.length,
  },
  { title: "Job Title", dataIndex: "jobtitle" },
  { title: "Email", dataIndex: "email" },
  { title: "Phone Number", dataIndex: "phone" },
  { title: "Company Name", dataIndex: "company" },
];

const data = [
  { id: 123, Name: "Murtaza", jobtitle: "--", email: "test@", phone: "---", company: "--" },
  { id: 33, Name: "Abdul", jobtitle: "--", email: "test@", phone: "---", company: "BPAV" },
  { id: 40, Name: "Punnet", jobtitle: "--", email: "test@", phone: "8965403343", company: "--" },
];

const Companies = () => {
  const [activeTab, setActiveTab] = useState("All contacts");

  const tabs = [
    "All contacts",
    "Open opportunities",
    "Need follow up",
    "In progress",
    "Recently assigned",
  ];

  return (
    <div className="page-wrapper">
      <div className="container-fluid p-4">
        {/* Header Section */}
        <header className="d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div>
            <h4 className="m-0 fw-bold">
              Companies <i className="bi bi-chevron-down"></i>
            </h4>
            <span className="text-muted">24,700 records</span>
          </div>
          <div className="d-flex flex-wrap gap-2">
            <a href="#" className="text-primary fw-bold text-decoration-none">
              Data Quality
            </a>
            <button className="btn btn-outline-primary">Actions <i className="bi bi-chevron-down"></i></button>
            <button className="btn btn-outline-primary">Import</button>
            <button className="btn btn-primary">Create Contact</button>
          </div>
        </header>

        {/* Filter Tabs */}
        <div className="d-flex flex-wrap mt-3">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`btn me-2 ${activeTab === tab ? "btn-primary" : "btn-outline-secondary"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filters Section */}
        <div className="d-flex flex-wrap mt-3 gap-2 justify-content-between">
          <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-outline-primary">Company Owner <i className="bi bi-chevron-down"></i></button>
            <button className="btn btn-outline-primary">Create Date <i className="bi bi-chevron-down"></i></button>
            <button className="btn btn-outline-primary">Last Activity <i className="bi bi-chevron-down"></i></button>
            <button className="btn btn-outline-primary">Lead Status <i className="bi bi-chevron-down"></i></button>
            <button className="btn btn-outline-primary">+ More</button>
            <button className="btn text-primary"><i className="bi bi-funnel"></i> Advanced Filters</button>
          </div>
          <div>
            <button className="btn btn-link"><i className="bi bi-arrow-counterclockwise"></i></button>
            <button className="btn btn-link"><i className="bi bi-box-arrow-down"></i></button>
          </div>
        </div>

        {/* Table Section */}
        <div className="card mt-4">
          <div className="card-body p-0">
            <div className="table-responsive">
              <Datatable dataSource={data} columns={columns} Selection={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
