import React, { useState } from "react";
import { Container, Row, Col, Button, Table, Form, Modal } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);

const DynamicCalendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs("2024-12-01"));
  const [view, setView] = useState("month");
  const [events, setEvents] = useState([
    { item: "Cp3-3", start: "2024-12-27", end: "2024-12-29" },
    { item: "Cp3-2", start: "2024-12-28", end: "2025-01-02" },
    { item: "Cp3-1", start: "2025-01-02", end: "2025-01-03" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ item: "", start: "", end: "" });
  const items = ["CP3-3", "CP3-2", "CP3-1"];
  // Handle right-click on a date cell
  const handleRightClickDate = (e, date) => {
    e.preventDefault();
    setNewEvent({ ...newEvent, start: date.format("YYYY-MM-DD"), end: date.format("YYYY-MM-DD") });
    setShowModal(true);
  };

  // Handle right-click on an item row
  const handleRightClickRow = (e, item) => {
    e.preventDefault();
    setNewEvent({ ...newEvent, item, start: currentDate.format("YYYY-MM-DD"), end: currentDate.format("YYYY-MM-DD") });
    setShowModal(true);
  };

  const handleSaveEvent = () => {
    setEvents([...events, { ...newEvent }]);
    setShowModal(false);
  };

  const getDaysInView = () => {
    const daysInView = [];
    if (view === "day") {
      daysInView.push(currentDate);
    } else if (view === "week") {
      const startOfWeek = currentDate.startOf("week");
      const endOfWeek = currentDate.endOf("week");
      for (let date = startOfWeek; date.isSameOrBefore(endOfWeek); date = date.add(1, "day")) {
        daysInView.push(date);
      }
    } else {
      const startOfMonth = currentDate.startOf("month");
      const endOfMonth = currentDate.endOf("month").add(7, "day");
      for (let date = startOfMonth; date.isSameOrBefore(endOfMonth); date = date.add(1, "day")) {
        daysInView.push(date);
      }
    }
    return daysInView;
  };

  const handlePrev = () => {
    if (view === "day") {
      setCurrentDate((prev) => prev.subtract(1, "day"));
    } else if (view === "week") {
      setCurrentDate((prev) => prev.subtract(1, "week"));
    } else {
      setCurrentDate((prev) => prev.subtract(1, "month"));
    }
  };

  const handleNext = () => {
    if (view === "day") {
      setCurrentDate((prev) => prev.add(1, "day"));
    } else if (view === "week") {
      setCurrentDate((prev) => prev.add(1, "week"));
    } else {
      setCurrentDate((prev) => prev.add(1, "month"));
    }
  };

  const isDateInEventRange = (date, event) => {
    return dayjs(date).isBetween(event.start, event.end, "day", "[]");
  };

  const getEventSpan = (date, event) => {
    const eventStart = dayjs(event.start);
    const eventEnd = dayjs(event.end);
    const remainingDays = eventEnd.diff(dayjs(date), "day") + 1;
    const totalDays = Math.min(remainingDays, eventEnd.diff(eventStart, "day") + 1);
    return totalDays;
  };

  return (
    <div className="page-wrapper" >
        
    <Container fluid className="p-4 bg-light" style={{ minHeight: "100vh" }}>
      <Row className="mb-4 align-items-center">
        <Col md={3} className="d-flex align-items-center">
          <FaCalendarAlt className="me-2 text-primary fs-3" />
          <h4 className="fw-bold mb-0">Calendar</h4>
        </Col>
        <Col md={4} className="text-end">
          <Form.Control
            type="text"
            placeholder="Search..."
            className="d-inline-block w-50 me-3"
          />         
         </Col>  
         <Col  md={5} className="text-end">
         <Button variant="outline-primary" className="me-2">
            Subscribe
          </Button>
          <Button
            variant={view === "day" ? "primary" : "outline-secondary"}
            className="me-2"
            onClick={() => setView("day")}
          >
            Day
          </Button>
          <Button
            variant={view === "week" ? "primary" : "outline-secondary"}
            className="me-2"
            onClick={() => setView("week")}
          >
            Week
          </Button>
          <Button
            variant={view === "month" ? "primary" : "outline-secondary"}
            onClick={() => setView("month")}
          >
            Month
          </Button>
        

         </Col>    </Row>
      <div>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
check available</button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">check available</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div className="d-grid gap-2 col-6 ">
  <button type="button" class="btn btn-light">CP3-3</button>
  <button type="button" class="btn btn-light">CP3-2</button>
  <button type="button" class="btn btn-light">CP3-1</button>

    </div>
  </div>
</div>
</div>
      <Row>
        <Col md={12} className="bg-white shadow-sm p-0">
          <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
            <Button variant="light" className="p-2" onClick={handlePrev}>
              &#8249;
            </Button>
            <h6 className="mb-0">
              {view === "day"
                ? currentDate.format("dddd, MMMM D, YYYY")
                : view === "week"
                ? `${currentDate.startOf("week").format("MMM D")} - ${currentDate
                    .endOf("week")
                    .format("MMM D, YYYY")}`
                : currentDate.format("MMMM YYYY")}
            </h6>
            <Button variant="light" className="p-2" onClick={handleNext}>
              &#8250;
            </Button>
          </div>

          <div className="table-responsive">
            <Table bordered className="mb-0">
              <thead>
                <tr>
                  <th style={{ width: "20%" }}>Items</th>
                  {getDaysInView().map((date, index) => (
                    <th
                      key={index}
                      className="text-center"
                      onContextMenu={(e) => handleRightClickDate(e, date)}
                    >
                      {view === "day" ? date.format("dddd") : date.format("ddd D")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {["Cp3-3", "Cp3-2", "Cp3-1"].map((item, rowIndex) => (
                  <tr
                    key={rowIndex}
                    onContextMenu={(e) => handleRightClickRow(e, item)} // Right-click on row
                  >
                    <td className="text-center">{item}</td>
                    {getDaysInView().map((date, colIndex) => {
                      const event = events.find(
                        (e) => e.item === item && isDateInEventRange(date, e)
                      );

                      if (event && dayjs(date).isSame(event.start, "day")) {
                        const span = getEventSpan(date, event);
                        return (
                          <td
                            key={colIndex}
                            colSpan={span}
                            className="position-relative bg-warning text-center"
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              verticalAlign: "middle",
                            }}
                          >
                            {event.start} to {event.end}
                          </td>
                        );
                      } else if (event) {
                        return null;
                      }

                      return <td key={colIndex}></td>;
                    })}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
        
      </Row>
      

      {/* Add Event Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Item</Form.Label>
              <Form.Control
                type="text"
                value={newEvent.item}
                onChange={(e) => setNewEvent({ ...newEvent, item: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={newEvent.start}
                onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={newEvent.end}
                onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveEvent}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </div>
  );
};

export default DynamicCalendar;
