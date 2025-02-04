import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Form,
  Dropdown,
  Modal,
} from "react-bootstrap";

const ProductDetails = () => {
  const [currentTab, setCurrentTab] = useState("inventory");
  const [showModal, setShowModal] = useState(false);
  const [stocks, setStocks] = useState([
    {
      id: 1,
      identifier: "CP3-3",
      status: "In stock",
      type: "Regular",
      availableFrom: "27-12-2024 18:21",
      availableTill: "27-12-2024 18:21",
      createdAt: "27-12-2024 18:21",
    },
    {
      id: 2,
      identifier: "CP3-2",
      status: "In stock",
      type: "Regular",
      availableFrom: "27-12-2024 18:21",
      availableTill: "27-12-2024 18:21",
      createdAt: "27-12-2024 18:21",
    },
    {
      id: 3,
      identifier: "CP3-1",
      status: "Picked up",
      type: "Regular",
      availableFrom: "27-12-2024 18:21",
      availableTill: "27-12-2024 18:21",
      createdAt: "27-12-2024 18:21",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const handleAddStock = () => {
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setStocks(stocks.filter((stock) => stock.id !== id));
  };

  const handleModalClose = () => setShowModal(false);

  const filteredStocks = stocks.filter((stock) => {
    const matchesSearch = stock.identifier
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus
      ? stock.status.toLowerCase() === filterStatus.toLowerCase()
      : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <Container fluid className="mt-4">
      <Row>
        {/* Main Section */}
        <Col md={9}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Products &gt; Cp3</h4>
            <Button variant="outline-secondary">Duplicate product</Button>
          </div>

          {/* Tabs */}
          <div className="d-flex mb-3 border-bottom">
            {["Inventory", "Variations", "Pricing", "Settings", "Online store", "History"].map(
              (tab) => (
                <Button
                  key={tab}
                  variant="link"
                  className={`text-decoration-none px-3 ${
                    currentTab.toLowerCase() === tab.toLowerCase()
                      ? "active"
                      : "text-muted"
                  }`}
                  onClick={() => setCurrentTab(tab.toLowerCase())}
                >
                  {tab}
                </Button>
              )
            )}
          </div>

          {/* Filters and Actions */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex gap-3">
              <Form.Control
                type="text"
                placeholder="Search identifier"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Form.Select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="">Filter by status</option>
                <option value="In stock">In stock</option>
                <option value="Picked up">Picked up</option>
              </Form.Select>
              <Form.Select>
                <option>Select...</option>
              </Form.Select>
            </div>
            <Button variant="primary" onClick={handleAddStock}>
              Add stock items
            </Button>
          </div>

          {/* Stock Table */}
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
              {filteredStocks.map((stock) => (
                <tr key={stock.id}>
                  <td>{stock.identifier}</td>
                  <td>
                    <span
                      className={`badge ${
                        stock.status === "In stock"
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {stock.status}
                    </span>
                  </td>
                  <td>{stock.type}</td>
                  <td>{stock.availableFrom}</td>
                  <td>{stock.availableTill}</td>
                  <td>{stock.createdAt}</td>
                  <td>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="me-2"
                      onClick={handleAddStock}
                    >
                      ✏️
                    </Button>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="me-2"
                    >
                      📋
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDelete(stock.id)}
                    >
                      🗑️
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>

        {/* Sidebar */}
        <Col md={3} className="border-start">
          <h5>Tags</h5>
          <Form.Control type="text" placeholder="Add tags" className="mb-3" />

          <h5>Barcode</h5>
          <Button variant="outline-secondary" className="w-100 mb-3">
            Add barcode
          </Button>

          <h5>Collections</h5>
          <Button variant="outline-secondary" className="w-100 mb-3">
            Add to collections
          </Button>
          <p className="text-muted">
            This product is not added to any collections yet.
          </p>

          <h5>Notes</h5>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Add a new note"
          ></Form.Control>
        </Col>
      </Row>

      {/* Modal for Adding/Editing */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add/Edit Stock Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Identifier</Form.Label>
              <Form.Control type="text" placeholder="Enter identifier" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Select>
                <option>In stock</option>
                <option>Picked up</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProductDetails;
