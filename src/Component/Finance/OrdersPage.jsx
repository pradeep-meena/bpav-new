import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Badge,
  Dropdown,
  Form,
} from "react-bootstrap";
import { FaFilter } from "react-icons/fa";

const OrdersPage = () => {
  return (
    <div className="page-wrapper">
    <Container fluid className="py-4 bg-light" >
      {/* Header Section */}
      <Row className="align-items-center mb-4">
        <Col md={4} className="d-flex align-items-center">
          <FaFilter className="me-2 fs-4" />
          <h5 className="mb-0">Orders</h5>
        </Col>
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Search..."
            className="form-control"
          />
        </Col>
        <Col md={4} className="text-end">
          <Button variant="primary">Add order</Button>
        </Col>
      </Row>

      <Row>
        {/* Sidebar Filters */}
        <Col md={3} className="bg-white p-3 border rounded shadow-sm">
          {/* Status Dropdown */}
          <Dropdown className="mb-4">
            <Dropdown.Toggle variant="outline-secondary" className="w-100">
              Status
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Draft (0)</Dropdown.Item>
              <Dropdown.Item>Reserved (0)</Dropdown.Item>
              <Dropdown.Item>Picked up (1)</Dropdown.Item>
              <Dropdown.Item>Returned (0)</Dropdown.Item>
              <Dropdown.Item>Archived (0)</Dropdown.Item>
              <Dropdown.Item>Canceled (0)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Payment Status Dropdown */}
          <Dropdown className="mb-4">
            <Dropdown.Toggle variant="outline-secondary" className="w-100">
              Payment Status
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Payment due (0)</Dropdown.Item>
              <Dropdown.Item>Partially paid (1)</Dropdown.Item>
              <Dropdown.Item>Paid (0)</Dropdown.Item>
              <Dropdown.Item>Overpaid (0)</Dropdown.Item>
              <Dropdown.Item>Process deposit (0)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Date Range Dropdown */}
          <Dropdown className="mb-4">
            <Dropdown.Toggle variant="outline-secondary" className="w-100">
              Date Range
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>All Time</Dropdown.Item>
              <Dropdown.Item>Today</Dropdown.Item>
              <Dropdown.Item>This Week</Dropdown.Item>
              <Dropdown.Item>This Month</Dropdown.Item>
              <Dropdown.Item>This Year</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Export Button */}
          <Button variant="outline-primary" className="w-100">
            Export
          </Button>
        </Col>

        {/* Main Content */}
        <Col md={9}>
          <div className="bg-white p-3 border rounded shadow-sm">
            {/* Tabs and Filters */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <Button variant="link" className="text-decoration-none text-dark">
                  All
                </Button>
                <Button variant="link" className="text-decoration-none text-dark">
                  Upcoming
                </Button>
                <Button variant="link" className="text-decoration-none text-dark">
                  Late
                </Button>
                <Button variant="link" className="text-decoration-none text-dark">
                  With shortage
                </Button>
              </div>
              <div>
                <Button variant="link" className="text-decoration-none text-dark">
                  Select all orders
                </Button>
              </div>
            </div>

            {/* Actions Dropdown */}
            <div className="mb-3 d-flex justify-content-between">
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary" id="actions-dropdown">
                  Actions
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Mark as Paid</Dropdown.Item>
                  <Dropdown.Item>Cancel Order</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <span className="text-muted">Showing 1 - 1 of 1</span>
            </div>

            {/* Orders Table */}
            <Table bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Pick up</th>
                  <th>Return</th>
                  <th>Price</th>
                  <th>Payment status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>
                    <Badge
                      bg="light"
                      className="text-dark px-2 py-1 rounded-pill border d-flex align-items-center"
                    >
                      <div
                        style={{
                          height: "20px",
                          width: "20px",
                          borderRadius: "50%",
                          backgroundColor: "#BFD5E2",
                          marginRight: "5px",
                        }}
                      ></div>
                      BTS Big
                    </Badge>
                  </td>
                  <td>
                    <Badge bg="warning" className="text-dark px-3 py-2 rounded-pill">
                      Picked up
                    </Badge>
                  </td>
                  <td>27-12-2024 08:15</td>
                  <td>31-12-2024 14:30</td>
                  <td>£250.00</td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="primary" id="payment-status-dropdown" className="px-3 py-2">
                        Partially paid
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Mark as Paid</Dropdown.Item>
                        <Dropdown.Item>Refund</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default OrdersPage;
