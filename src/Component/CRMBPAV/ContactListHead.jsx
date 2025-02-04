import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css"; // Add custom CSS file if needed
import Datatable from "./Datatable";
import { Button, Container } from "react-bootstrap";

const columns = [
  {
    title: "Name",
    dataIndex: "Name",
    render: (text, record) => (
      <div className="d-flex align-items-center file-name-icon">
        <a href="#" className="avatar avatar-md border avatar-rounded">
          <img
            style={{
              borderRadius: "100%",
              outline: "none",
            }}
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
  {
    title: "Job Title",
    dataIndex: "jobtitle",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
  },
  {
    title: "Company Name",
    dataIndex: "company",
  },
];

const data = [
  {
    id: 123,
    Name: "Murtaza Rasool",
    jobtitle: "--",
    email: "vrrr@",
    phone: "---",
    company: "--",
  },
  {
    id: 33,
    Name: "Abdul",
    jobtitle: "--",
    email: "vrrr@",
    phone: "---",
    company: "--",
  },
  {
    id: 7,
    Name: "Mujtaba",
    jobtitle: "--",
    email: "vrrr@",
    phone: "---",
    company: "--",
  },
  {
    id: 25,
    Name: "Khair",
    jobtitle: "--",
    email: "vrrr@",
    phone: "---",
    company: "--",
  },
];

const ContactListHead = () => {
  const [activeTab, setActiveTab] = useState("All contacts");

  const tabs = [
    "All contacts",
    "Open opportunities",
    "Need follow up",
    "In progress",
  ];

  return (
    <div className="page-wrapper">
      <Container fluid className="p-4">
        {/* Header Section */}
        <header className="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <h4 className="contacts-title m-0 fw-bold">
              Contacts <i className="bi bi-chevron-down"></i>
            </h4>
            <span className="text-secondary fs-6">24,700 records</span>
          </div>

          {/* Header Buttons */}
          <div className="d-flex flex-wrap align-items-center gap-2">
            <a href="#" className="text-decoration-none text-primary fw-medium">
              Data Quality
            </a>
            <Button variant="outline-primary">
              Actions <i className="bi bi-chevron-down"></i>
            </Button>
            <Button variant="outline-primary">Import</Button>
            <Button variant="primary" className="px-4">
              Create Contact
            </Button>
          </div>
        </header>

        {/* Filter Tabs Section */}
        <div className="filter-tabs">
          {/* Tabs */}
          <div className="d-flex flex-wrap gap-2 my-3">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`py-2 px-3 rounded ${
                  activeTab === tab ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab(tab)}
                style={{
                  border:
                    activeTab === tab ? "1px solid #000" : "1px solid #ccc",
                  backgroundColor:
                    activeTab === tab ? "rgba(54, 56, 58, 0.19)" : "#fff",
                  color: "#6c757d",
                  cursor: "pointer",
                }}
              >
                {tab}
              </div>
            ))}
            <div className="ms-auto d-flex flex-wrap gap-2">
              <Button variant="link" className="text-primary">
                + Add view (5/50)
              </Button>
              <Button variant="link" className="text-primary">
                All views
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="d-flex flex-wrap justify-content-between gap-3">
            <div className="d-flex flex-wrap gap-2">
              <Button variant="outline-primary">
                Contact owner <i className="bi bi-chevron-down"></i>
              </Button>
              <Button variant="outline-primary">
                Create date <i className="bi bi-chevron-down"></i>
              </Button>
              <Button variant="outline-primary">
                Last activity date <i className="bi bi-chevron-down"></i>
              </Button>
              <Button variant="outline-primary">
                Lead status <i className="bi bi-chevron-down"></i>
              </Button>
              <Button variant="outline-primary">+ More</Button>
              <Button variant="link" className="text-primary">
                <i className="bi bi-funnel"></i> Advanced filters
              </Button>
            </div>

            {/* Icons */}
            <div className="d-flex gap-2">
              <Button variant="link">
                <i className="bi bi-arrow-counterclockwise"></i>
              </Button>
              <Button variant="link">
                <i className="bi bi-box-arrow-down"></i>
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Table Section */}
      <div className="card-body p-0">
        <Datatable dataSource={data} columns={columns} Selection={true} />
      </div>
    </div>
  );
};

export default ContactListHead;
