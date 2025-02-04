import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Nav, Table } from "react-bootstrap";
import { FaFile } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { CiSaveUp2 } from "react-icons/ci";
// import { all_routes } from "../router/all_routes";
import { Link, useNavigate } from "react-router-dom";
const DealsKanban = () => {
  const navigate = useNavigate();
  //   const [activeTab, setActiveTab] = useState("All deals");
  const [activeTab, setActiveTab] = useState("All contacts");

  const tabs = ["All deals", "My deals", "open deals"];

  return (
    <div className="page-wrapper">
      <Container fluid className="py-3 border-bottom bg-white">
        {/* Tabs Section */}

        {/* Header Top Section */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold text-primary">Deals</h4>
          <div className="d-flex gap-2">
            <Button variant="outline-secondary">Actions</Button>
            <Button variant="outline-secondary">Import</Button>
            <Button variant="danger">Create deal</Button>
          </div>
        </div>
        <div className=" d-flex mb-4  flex-wrap  ">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={` py-2 ${activeTab === tab ? "active" : ""}`}
              style={{
                border:
                  activeTab === tab
                    ? "1px solidrgb(72, 74, 77)"
                    : "1px solid #ccc",
                paddingRight: "80px",
                paddingLeft: "10px",
                width: "25%",
                backgroundColor:
                  activeTab === tab ? "rgba(54, 56, 58, 0.19)" : "#ffffff",
                color: activeTab === tab ? "#6c757d" : "#6c757d",
                fontSize: "1rem",
                cursor: "pointer",
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
          <div className="ms-auto  d-flex">
            <button
              className="btn btn-a"
              style={{
                color: "#26a0fc",

                fontSize: "0.9rem",
                fontWeight: "500",
              }}
            >
              + Add view (5/50)
            </button>
            <button
              className="btn btn-a"
              style={{
                color: "#26a0fc",

                fontSize: "0.9rem",
                fontWeight: "500",
              }}
            >
              All views
            </button>
          </div>
        </div>

        {/* Filters Section */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          {/* Left Filters */}
          <div className="d-flex gap-2 align-items-center">
            <Button
              variant="outline-primary"
              className="d-flex align-items-center"
            >
              <IoMdMenu />
            </Button>
            <Form.Select style={{ width: "200px" }}>
              <option>Sales pipeline</option>
            </Form.Select>
            <Button variant="outline-primary">Deal owner</Button>
            <Button variant="outline-primary">Create date</Button>
            <Button variant="outline-primary">More</Button>
            <Button variant="outline-primary">
              <i className="bi bi-funnel"></i> Advanced filters
            </Button>
          </div>

          {/* Right Filters */}
          <div className="d-flex align-items-center gap-3">
            <span className="text-primary">Hide Insights</span>
            <div className="d-flex gap-2">
              <Button variant="outline-secondary">
                <FaFile />
              </Button>
              <Button variant="outline-secondary">
                <CiSaveUp2 />
              </Button>
            </div>
          </div>
        </div>

        {/* Insights Section */}
        <Row className="mt-4 text-center">
          {[
            {
              title: "TOTAL DEAL AMOUNT",
              value: "£1.18M",
              detail: "Average per deal: £4.09K",
            },
            {
              title: "WEIGHTED DEAL AMOUNT",
              value: "£616.62K",
              detail: "Average per deal: £2.13K",
            },
            {
              title: "OPEN DEAL AMOUNT",
              value: "£590.58K",
              detail: "Average per deal: £10.01K",
            },
            {
              title: "CLOSED DEAL AMOUNT",
              value: "£201.02K",
              detail: "Average per deal: £1.65K",
            },
            { title: "NEW DEAL AMOUNT", value: "£0", detail: "" },
            { title: "AVERAGE DEAL AGE", value: "22 days", detail: "" },
          ].map((item, index) => (
            <Col key={index}>
              <h5 className="fw-bold">{item.title}</h5>
              <h3 className="text-primary">{item.value}</h3>
              {item.detail && <p>{item.detail}</p>}
            </Col>
          ))}
        </Row>
        {/* Table Section */}
        <div className="overflow-auto pt-4" style={{ whiteSpace: "nowrap" }}>
          <Table bordered className="text-center">
            <thead className="bg-light">
              <tr>
                <th>Qualified</th>
                <th>Contact Made</th>
                <th>Meeting Scheduled</th>
                <th>Quoting</th>
                <th>Quoted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {/* <Link to={all_routes.dealscard}> */}
                  <div className="d-flex flex-column align-items-start" onClick={() => navigate('/crm/dealscard')}>
                    <span>StraightIn Lead</span>
                    <Button
                      size="sm"
                      variant="outline-primary"
                      className="mt-2"
                    >
                      Add Contact
                    </Button>
                    <small className="text-muted mt-2">
                      No activity for 9 days
                    </small>
                  </div>
                  {/* </Link> */}
                </td>
                <td>No activity</td>
                <td>No activity</td>
                <td>No activity</td>
                <td>No activity</td>
              </tr>
            </tbody>
            <tfoot className="bg-light">
              <tr>
                <td>Total: £0</td>
                <td>Total: £0</td>
                <td>Total: £0</td>
                <td>Total: £0</td>
                <td>Total: £0</td>
              </tr>
            </tfoot>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default DealsKanban;
