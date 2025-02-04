import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin from "@fullcalendar/interaction";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { all_routes } from '../router/all_routes';
import AddTask from "./ProjectAddTask";  // Import the AddTask component

const CalendarApp = () => {
  const [events, setEvents] = useState([
    { id: "1", resourceId: "1", title: "Crestron Training", start: "2025-01-22", end: "2025-01-23" },
    { id: "2", resourceId: "2", title: "ISE 2025", start: "2025-02-02", end: "2025-02-05" },
    { id: "3", resourceId: "3", title: "Sales - DO Meeting", start: "2025-01-29", end: "2025-01-31" },
    { id: "4", resourceId: "4", title: "Annual Planning", start: "2025-01-15", end: "2025-02-15" },
    { id: "5", resourceId: "2", title: "Team Training", start: "2025-02-10", end: "2025-02-14" },
  ]);

  const [resources, setResources] = useState([
    { id: "1", title: "Benjamin Price" },
    { id: "2", title: "Bonface Mutunga" },
    { id: "3", title: "BPAV Technical" },
    { id: "4", title: "Ezzat Kiwan" },
  ]);

  const [showModal, setShowModal] = useState(false);

  // Open modal to add task
  const handleAddProject = () => {
    setShowModal(true);
  };

  // Handle clicking on calendar date
  const handleDateClick = (info) => {
  
    setShowModal(true);
  };

  return (
   <div className="page-wrapper">
    <div
      style={{
        backgroundColor: "#ffffff",  // Changed to white
        color: "#000000",            // Changed to black
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Container fluid>
        {/* Toolbar */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded">
              <div className="d-flex gap-3">
                <Button variant="primary" onClick={handleAddProject}>
                  Add Task
                </Button>
              
              </div>
              <div>
                            <Button className="btn btn-primary" >
                                <Link to={all_routes.projectkanban}>
                                Kanban View
                                <i className="ti ti-list-tree" />
                                </Link>
                              </Button>
                            </div>
            </div>
          </Col>
        </Row>

        {/* Timeline Calendar */}
        <Row>
          <Col>
            <Card className="bg-light text-dark p-3">
              <FullCalendar
                plugins={[resourceTimelinePlugin, interactionPlugin]}
                initialView="resourceTimelineMonth"
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth",
                }}
                resources={resources}
                events={events}
                editable={true}
                eventResizableFromStart={true}
                resourceAreaWidth="200px"
                resourceAreaHeaderContent="Assignees"
                height="auto"
                dateClick={handleDateClick} // Open modal when clicking a date
                eventContent={(arg) => (
                  <div>
                    <strong>{arg.event.title}</strong>
                  </div>
                )}
              />
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modal to show AddTask component */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddTask />
        </Modal.Body>
      </Modal>
    </div>
    </div>
   
  );
};

export default CalendarApp;
