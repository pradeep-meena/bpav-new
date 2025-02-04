import React from "react";
import { Container, Row, Col, Card, Button, Dropdown, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { all_routes } from "../router/all_routes";

const Expenses = () => {
  return (
    <div className="page-wrapper">
    <Container fluid className="py-4">
      {/* Tabs Navigation */}
    

      {/* Header with Dropdown */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex"><h2 className="mb-0 " style={{paddingRight:"15px"}}>Expenses</h2>
        <Tab.Container defaultActiveKey="your-own">
        <Nav variant="tabs" className="mb-4">
          <Nav.Item>
            <Nav.Link eventKey="your-own">Your own</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="to-review">To review (0)</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="to-pay">To pay (6)</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="all">All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="explorer">Explorer</Nav.Link>
          </Nav.Item>
        </Nav>
      </Tab.Container></div>
        <Dropdown>
          <Dropdown.Toggle variant="success">New expense</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to='/newexpenseclaim' className="dropdown-item" >
                Expense claim
                </Link>
              </Dropdown.Item>
            <Dropdown.Item>
            <Link to='/newmillageclaim' className="dropdown-item" >Mileage claim
            </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Top Card */}
      <Card className="mb-4">
        <Card.Body className="d-flex align-items-center">
          <div className="me-4">
            <img
              src="https://i.ibb.co/2ZSyCC1/image.png"
              alt="Illustration"
              className="img-fluid"
              style={{ maxHeight: "80px" }}
            />
          </div>
          <div>
            <Card.Title>Capture expenses paid with company money</Card.Title>
            <Card.Text>
              Employees can submit non-reimbursable expense claims when they've been assigned company
              bank accounts. Simply <strong>edit their expense settings</strong> and{" "}
              <strong>assign relevant bank accounts</strong>.
            </Card.Text>
            <Button variant="primary" className="me-2">
              Go to settings
            </Button>
            <Button variant="link">Learn more about expenses paid with company money</Button>
          </div>
        </Card.Body>
      </Card>

      {/* Bottom Card */}
      <Card className="text-center">
        <Card.Body>
          <div>
            <img
              src="https://i.ibb.co/7brs6Js/image.png"
              alt="Illustration"
              className="img-fluid mb-3"
            />
          </div>
          <Card.Title>Submit your first expense</Card.Title>
          <Card.Text>
            Purchased anything for your business that needs to be paid back?
          </Card.Text>
          <Card.Text>
            <small>
              Download the Xero Me app and manage expense claims on the go. Capture your costs as
              they happen by snapping and submitting your expenses and mileage claims anytime,
              anywhere.
            </small>
          </Card.Text>
          <div className="mb-4">
               <img
             src="https://i.ibb.co/kydd3x5/image.png"
              alt="QR Code"
              className="img-fluid"
              style={{ maxWidth: "150px" }}
            />
          </div>
          <div>
            <Button variant="dark" className="me-2">
              <i className="bi bi-apple"></i> App Store
            </Button>
            <Button variant="dark">
              <i className="bi bi-google-play"></i> Google Play
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  </div>
  );
};

export default Expenses;
