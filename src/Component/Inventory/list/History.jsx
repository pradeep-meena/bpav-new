import React from "react";
import { Container, Row, Col, Table, Accordion, Button, Form } from "react-bootstrap";
import { FaTag, FaBarcode, FaClipboardList } from "react-icons/fa";

const ProductHistory = () => {
  return (
    <Container fluid className="bg-light min-vh-100">
      {/* Main Content Section */}
      <Row>
        <Col lg={9} md={8} className="p-4">
          {/* History Table */}
          <div className="card p-4 mb-4">
            <h5 className="fw-bold">Product History</h5>
            <Table hover responsive className="mt-3">
              <thead className="table-light">
                <tr>
                  <th>Date</th>
                  <th>Action</th>
                  <th>Items</th>
                  <th>Order</th>
                  <th>Customer</th>
                  <th>Employee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>27-12-2024 18:25</td>
                  <td>
                    <span className="badge bg-warning text-dark">Picked up</span>
                  </td>
                  <td>CP3-1</td>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center" style={{ width: "35px", height: "35px" }}>
                        BTS
                      </div>
                      <span>BTS Big</span>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center" style={{ width: "35px", height: "35px" }}>
                        BTS
                      </div>
                      <span>BTS Big</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="text-muted">Showing 1 - 1 of 1</div>
          </div>
        </Col>

        {/* Sidebar Section */}
        <Col lg={3} md={4} className="p-4 bg-white border-start">
          <Accordion defaultActiveKey="0">
            {/* Tags Section */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <FaTag className="me-2" /> Tags
              </Accordion.Header>
              <Accordion.Body>
                <p className="text-muted">No tags added yet.</p>
              </Accordion.Body>
            </Accordion.Item>

            {/* Barcode Section */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <FaBarcode className="me-2" /> Barcode
              </Accordion.Header>
              <Accordion.Body>
                <Button variant="outline-secondary" className="w-100">
                  <i className="bi bi-upc"></i> Add barcode
                </Button>
              </Accordion.Body>
            </Accordion.Item>

            {/* Collections Section */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <FaClipboardList className="me-2" /> Collections
              </Accordion.Header>
              <Accordion.Body>
                <Button variant="outline-secondary" className="w-100">Add to collections</Button>
                <p className="text-muted mt-2">This product is not added to any collections yet.</p>
              </Accordion.Body>
            </Accordion.Item>

            {/* Notes Section */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>Notes</Accordion.Header>
              <Accordion.Body>
                <Form.Control as="textarea" rows={3} placeholder="Add a new note" />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductHistory;
