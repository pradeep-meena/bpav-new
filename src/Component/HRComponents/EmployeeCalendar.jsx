import React, { useState } from "react";
import { Container, Row, Col, Button, Table, Form, Badge } from "react-bootstrap";
import { FaCalendarAlt, FaFilter } from "react-icons/fa";
import dayjs from "dayjs";

const EmployeeCalendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs("2024-08-01"));
  const [view, setView] = useState("month");

  const employees = [
    { name: "Jane Doe (you)", profile: "👩", leaves: ["2024-08-06"] },
    { name: "Alfredo Vetrov", profile: "🧑", leaves: [] },
    { name: "Serenity Bellamy", profile: "👩", leaves: ["2024-08-09", "2024-08-10"] },
    { name: "Jerrod Halbert", profile: "🧑", leaves: ["2024-08-11", "2024-08-12"] },
    { name: "Richard Simmons", profile: "🧑", leaves: ["2024-08-13"] },
    { name: "Dianne Russell", profile: "👩", leaves: [] },
  ];

  const leavesByDate = {
    "2024-08-06": "approved",
    "2024-08-09": "pending",
    "2024-08-10": "pending",
    "2024-08-11": "restricted",
    "2024-08-12": "restricted",
    "2024-08-13": "approved",
  };

  const getDatesForView = () => {
    const days = [];
    let start, end;

    if (view === "week") {
      start = currentDate.startOf("week");
      end = currentDate.endOf("week");
    } else if (view === "month") {
      start = currentDate.startOf("month");
      end = currentDate.endOf("month");
    } else if (view === "year") {
      start = currentDate.startOf("year");
      end = currentDate.endOf("year");
    }

    for (let date = start; date.isBefore(end) || date.isSame(end); date = date.add(1, "day")) {
      days.push(date);
    }

    return days;
  };

  const handlePrev = () => {
    setCurrentDate((prev) => {
      if (view === "week") return prev.subtract(1, "week");
      if (view === "month") return prev.subtract(1, "month");
      if (view === "year") return prev.subtract(1, "year");
      return prev;
    });
  };

  const handleNext = () => {
    setCurrentDate((prev) => {
      if (view === "week") return prev.add(1, "week");
      if (view === "month") return prev.add(1, "month");
      if (view === "year") return prev.add(1, "year");
      return prev;
    });
  };

  const getCellStatus = (date, employee) => {
    const formattedDate = date.format("YYYY-MM-DD");
    if (employee.leaves.includes(formattedDate)) {
      return leavesByDate[formattedDate];
    }
    return null;
  };

  return (
    <div className="page-wrapper">
    <Container fluid className="p-4 bg-light text-dark" style={{ minHeight: "100vh" }}>
      {/* Header Section */}
      <Row className="mb-4">
        <Col>
          <h4 className="d-flex align-items-center">
            <FaCalendarAlt className="me-2" /> Time Management
          </h4>
        </Col>
        <Col className="text-end">
          <Button variant="outline-dark" className="me-2">
            <FaFilter /> Filters
          </Button>
          <Button
            variant={view === "week" ? "dark" : "outline-dark"}
            className="me-2"
            onClick={() => setView("week")}
          >
            Week
          </Button>
          <Button
            variant={view === "month" ? "dark" : "outline-dark"}
            className="me-2"
            onClick={() => setView("month")}
          >
            Month
          </Button>
          <Button
            variant={view === "year" ? "dark" : "outline-dark"}
            onClick={() => setView("year")}
          >
            Year
          </Button>
        </Col>
      </Row>

      {/* Leave Request */}
      <Row className="mb-3">
        <Col>
          <div className="p-3 bg-white border rounded shadow-sm">
            <strong>8 - 12 Aug 2024 · Annual Leave</strong>
            <span className="text-warning"> Harry Peter - Pending</span>
            <div className="mt-2 d-flex justify-content-end">
              <Button variant="success" className="me-2">
                Approve
              </Button>
              <Button variant="danger">Reject</Button>
            </div>
          </div>
        </Col>
      </Row>

      {/* Calendar */}
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Button variant="outline-dark" onClick={handlePrev}>
              &#8249;
            </Button>
            <h5>
              {view === "week" ? `Week of ${currentDate.format("DD MMM YYYY")}` : currentDate.format("MMMM YYYY")}
            </h5>
            <Button variant="outline-dark" onClick={handleNext}>
              &#8250;
            </Button>
          </div>

          <Table bordered className="table-light">
            <thead>
              <tr>
                <th>Employee</th>
                {getDatesForView().map((date, index) => (
                  <th key={index} className="text-center">
                    {view === "year" ? date.format("MMM") : date.format("D")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, empIndex) => (
                <tr key={empIndex}>
                  <td>
                    <span className="me-2">{employee.profile}</span>
                    {employee.name}
                  </td>
                  {getDatesForView().map((date, dateIndex) => {
                    const status = getCellStatus(date, employee);
                    return (
                      <td key={dateIndex} className="text-center">
                        {status === "approved" && <Badge bg="success">✔</Badge>}
                        {status === "pending" && <Badge bg="warning">⏳</Badge>}
                        {status === "restricted" && <Badge bg="danger">🚫</Badge>}
                        {!status && "×"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default EmployeeCalendar;
