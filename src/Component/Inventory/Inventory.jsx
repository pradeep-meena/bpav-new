import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Dropdown,
  Form,
} from "react-bootstrap";

const Inventory = () => {
  const products = [
    {
      id: 1,
      name: "Cp3",
      productType: "Rental product",
      sku: "CP3",
      onlineStore: "Visible",
      image: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div className="container">
      <Row>
        {/* Sidebar */}
        <Col md={3} className="border-end">
          <h5>Product type</h5>
          <Form.Select className="mb-3">
            <option>Select...</option>
            <option>Rental Product</option>
            <option>Other</option>
          </Form.Select>

          <h5>Template structure</h5>
          <Form.Select className="mb-3">
            <option>All</option>
          </Form.Select>

          <h5>Price ruleset</h5>
          <Form.Select className="mb-3">
            <option>All</option>
          </Form.Select>

          <Button variant="outline-secondary" className="w-100 mb-2">
            Import
          </Button>
          <Button variant="outline-secondary" className="w-100">
            Export
          </Button>
        </Col>

        {/* Main Content */}
        <Col md={9}>
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>Inventory</h3>
            <Button variant="primary">Add Product</Button>
          </div>

          {/* Tabs */}
          <div className="d-flex mb-3 border-bottom">
            <Button variant="link" className="text-decoration-none px-3 active">
              Products
            </Button>
            <Button
              variant="link"
              className="text-decoration-none text-muted px-3"
            >
              Bundles
            </Button>
            <Button
              variant="link"
              className="text-decoration-none text-muted px-3"
            >
              Collections
            </Button>
          </div>

          {/* Actions */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary">
                Actions
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Action 1</Dropdown.Item>
                <Dropdown.Item>Action 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="text-muted">Showing 1-1 of 1</div>
          </div>

          {/* Product Table */}
          <Table bordered hover>
            <thead>
              <tr>
                <th>
                  <Form.Check type="checkbox" />
                </th>
                <th>Name</th>
                <th>Product type</th>
                <th>Online store</th>
                <th>Stock Keeping Unit (SKU)</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <Form.Check type="checkbox" />
                  </td>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="me-2"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                    {product.name}
                  </td>
                  <td>{product.productType}</td>
                  <td>
                    <Button variant="outline-success" size="sm">
                      {product.onlineStore}
                    </Button>
                  </td>
                  <td>{product.sku}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default Inventory;
