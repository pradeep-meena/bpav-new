import React, { useState } from "react";
import { Container, Row, Col, Button, Table, Form, Nav } from "react-bootstrap";
import { FaBox, FaBarcode } from "react-icons/fa";


const InventoryItemCard1 = () => {
  const [activeTab, setActiveTab] = useState("inventory");

  const renderContent = () => {
    switch (activeTab) {
      case "inventory":
        return (
          <div className="page-wrapper">
          <div >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="mb-0">Current stock (3)</h6>
              <h6 className="mb-0 text-muted">Expected stock (0)</h6>
            </div>
            <div className="d-flex align-items-center gap-3 mb-3">
              <Form.Control type="text" placeholder="Search identifier" className="w-25" />
              <Form.Select className="w-25">
                <option>Filter by status</option>
              </Form.Select>
              <Form.Select className="w-25">
                <option>Select...</option>
              </Form.Select>
              <Button variant="primary">Add stock items</Button>
            </div>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Identifier</th>
                  <th>Status</th>
                  <th>Type</th>
                  <th>Available from</th>
                  <th>Available till</th>
                  <th>Created at</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CP3-3</td>
                  <td>In stock</td>
                  <td>Regular</td>
                  <td>27-12-2024</td>
                  <td>18:21</td>
                  <td>27-12-2024 18:21</td>
                  <td>
                    <Button variant="outline-secondary" size="sm" className="me-1">
                      Edit
                    </Button>
                    <Button variant="outline-secondary" size="sm" className="me-1">
                      <FaBarcode />
                    </Button>
                    <Button variant="outline-danger" size="sm">
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          </div>
        );
      case "variations":
        return (
          <div className="text-center">
            <h6>Enable variations if this product comes in different options, like sizes or colors.</h6>
            <Button variant="primary">Enable variations</Button>
          </div>
        );
      case "pricing":
        return (
          <div>
            <h6>Pricing Method</h6>
            <Form>
              <Form.Check type="radio" label="Flat Fee" className="mb-2" />
              <Form.Check type="radio" label="Fixed Price" className="mb-2" />
              <Form.Check type="radio" label="Pricing Structure" />
              <Form.Group className="mt-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter price" />
              </Form.Group>
            </Form>
          </div>
        );
      case "settings":
        return (
          <div>
            <h6>General Information</h6>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>SKU</Form.Label>
                <Form.Control type="text" placeholder="Enter SKU" />
              </Form.Group>
            </Form>
          </div>
        );
      case "history":
        return (
          <Table bordered hover>
            <thead>
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
                <td>27-12-2024</td>
                <td>Picked up</td>
                <td>CP3-1</td>
                <td>#1</td>
                <td>BTS Big</td>
                <td>BTS Big</td>
              </tr>
            </tbody>
          </Table>
        );
      default:
        return null;
    }
  };

  return (
    <div className="page-wrapper">
    <Container fluid className="py-4 bg-light" style={{ minHeight: "100vh" }}>
      {/* Header Section */}
      <Row className="align-items-center mb-4">
        <Col>
          <h5>
            <FaBox className="me-2" />
            Products &gt; <span className="text-primary">Cp3</span>
          </h5>
        </Col>
        <Col className="text-end">
          <Button variant="outline-secondary" className="me-2">
            Duplicate product
          </Button>
        </Col>
      </Row>

      {/* Tabs */}
      <Row>
        <Col>
          <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
            <Nav.Item>
              <Nav.Link eventKey="inventory">Inventory</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="variations">Variations</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="pricing">Pricing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="settings">Settings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="history">History</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>

      {/* Main Content */}
      <Row className="mt-4">
        <Col lg={9}>{renderContent()}</Col>

        {/* Sidebar */}
        <Col lg={3}>
          <div className="bg-white p-3 border rounded mb-3">
            <h6>Tags</h6>
          </div>
          <div className="bg-white p-3 border rounded mb-3">
            <h6>Barcode</h6>
            <Button variant="outline-secondary" className="w-100">
              Add barcode
            </Button>
          </div>
          <div className="bg-white p-3 border rounded mb-3">
            <h6>Collections</h6>
            <Button variant="outline-secondary" className="w-100">
              Add to collections
            </Button>
            <p className="text-muted mt-2">
              This product is not added to any collections yet.
            </p>
          </div>
          <div className="bg-white p-3 border rounded mb-3">
            <h6>Notes</h6>
            <Form.Control as="textarea" rows={3} placeholder="Add a new note" />
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default InventoryItemCard1;
