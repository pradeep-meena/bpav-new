import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin from "@fullcalendar/interaction";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import AddTask from "./ProjectAddTask"; 

const AllProjectCalendar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const [events, setEvents] = useState([
    { id: "1", resourceId: "1", title: "Crestron Training", start: "2025-01-22", end: "2025-01-23" },
    { id: "2", resourceId: "2", title: "ISE 2025", start: "2025-02-02", end: "2025-02-05" },
    { id: "3", resourceId: "3", title: "Sales - DO Meeting", start: "2025-01-29", end: "2025-01-31" },
    { id: "4", resourceId: "4", title: "Annual Planning", start: "2025-01-15", end: "2025-02-15" },
    { id: "5", resourceId: "2", title: "Team Training", start: "2025-02-10", end: "2025-02-14" },
  ]);

  const [resources, setResources] = useState([
    { id: "1", title: "Project X" },
    { id: "2", title: "Project Y" },
    { id: "3", title: "BPAV" },
    { id: "4", title: "Project" },
  ]);

  const handleAddProject = () => {
    setShowModal(true);
  };

  const handleDateClick = () => {
    setShowModal(true);
  };

  return (
    <div className="page-wrapper">
      <Container fluid className="p-3">
        
        {/* Toolbar */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex flex-wrap justify-content-between align-items-center bg-light p-3 rounded gap-2">
              <div>
                <Button variant="primary" onClick={handleAddProject}>Add Task</Button>
              </div>
              <Button variant="secondary" onClick={() => navigate('/projectkanban')}>
                <i className="fa-solid fa-table-columns me-2"></i> Board View
              </Button>
            </div>
          </Col>
        </Row>

        {/* Full Calendar */}
        <Row>
          <Col>
            <Card className="bg-light p-3">
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
                resourceAreaWidth="200px"
                resourceAreaHeaderContent="Assignees"
                height="auto"
                dateClick={handleDateClick}
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

      {/* Modal for Adding Task */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddTask />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AllProjectCalendar;
