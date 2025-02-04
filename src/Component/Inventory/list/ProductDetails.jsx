import React, { useState } from "react";
import { Container, Row, Col, Button, Table, Form, Nav } from "react-bootstrap";
import { FaBox, FaBarcode, FaTrash, FaEdit } from "react-icons/fa";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("inventory");

  // Function to render tab content
  const renderContent = () => {
    switch (activeTab) {
      case "inventory":
        return (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="mb-0">Current stock (3)</h6>
              <h6 className="mb-0 text-muted">Expected stock (0)</h6>
            </div>
            <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
              <Form.Control type="text" placeholder="Search identifier" className="w-25" />
              <Form.Select className="w-25">
                <option>Filter by status</option>
              </Form.Select>
              <Form.Select className="w-25">
                <option>Select...</option>
              </Form.Select>
              <Button variant="primary">Add stock items</Button>
            </div>
            <Table bordered hover responsive>
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
                  <td className="text-success">● In stock</td>
                  <td>Regular</td>
                  <td>27-12-2024</td>
                  <td>27-12-2024 18:21</td>
                  <td>27-12-2024 18:21</td>
                  <td>
                    <Button variant="outline-secondary" size="sm" className="me-1">
                      <FaEdit />
                    </Button>
                    <Button variant="outline-secondary" size="sm" className="me-1">
                      <FaBarcode />
                    </Button>
                    <Button variant="outline-danger" size="sm">
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
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
    <Container fluid className="py-4 bg-light" style={{ minHeight: "100vh" }}>
   

      {/* Tabs */}
      {/* <Row>
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
      </Row> */}

      {/* Main Content */}
      <Row className="mt-4">
        <Col lg={9}>{renderContent()}</Col>

        {/* Sidebar */}
        <Col lg={3}>
        <div className="accordion" id="sidebarAccordion">

{/* Tags Section */}
<div className="accordion-item">
  <h2 className="accordion-header" id="tagsHeading">
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tagsCollapse">
      Tags
    </button>
  </h2>
  <div id="tagsCollapse" className="accordion-collapse collapse show">
    <div className="accordion-body">
      <p className="text-muted">No tags added yet.</p>
    </div>
  </div>
</div>

{/* Barcode Section */}
<div className="accordion-item mt-2">
  <h2 className="accordion-header" id="barcodeHeading">
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#barcodeCollapse">
      Barcode
    </button>
  </h2>
  <div id="barcodeCollapse" className="accordion-collapse collapse show">
    <div className="accordion-body">
      <button className="btn btn-outline-secondary w-100"> 
        <i className="bi bi-upc"></i> Add barcode
      </button>
    </div>
  </div>
</div>

{/* Collections Section */}
<div className="accordion-item mt-2">
  <h2 className="accordion-header" id="collectionsHeading">
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collectionsCollapse">
      Collections
    </button>
  </h2>
  <div id="collectionsCollapse" className="accordion-collapse collapse show">
    <div className="accordion-body">
      <button className="btn btn-outline-secondary w-100">Add to collections</button>
      <p className="text-muted mt-2">This product is not added to any collections yet.</p>
    </div>
  </div>
</div>

{/* Notes Section */}
<div className="accordion-item mt-2">
  <h2 className="accordion-header" id="notesHeading">
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#notesCollapse">
      Notes
    </button>
  </h2>
  <div id="notesCollapse" className="accordion-collapse collapse show">
    <div className="accordion-body">
      <textarea className="form-control" placeholder="Add a new note"></textarea>
    </div>
  </div>
</div>

</div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
