import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  Nav,
  Dropdown,InputGroup,
} from "react-bootstrap";

import { FaBoxOpen, FaFileImport, FaFileExport } from "react-icons/fa";
import { FaSearch, FaBox } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import { all_routes } from '../router/all_routes';

const InventoryList = () => {
  return (
    <div className="page-wrapper">
    <Container fluid className="p-4 bg-light" style={{ minHeight: "100vh" }}>
      {/* Header */}
      <Row className="mb-4">
        <Col md={4}>
          <h4 className="fw-bold d-flex align-items-center">
            <FaBoxOpen className="me-2" />
            Inventory
          </h4>
        </Col>
        <Col md={4}>
          <InputGroup>
            <InputGroup.Text className="bg-light">
              <FaSearch />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search..."
              className="border-start-0"
            />
          </InputGroup>
        </Col>
        <Col md={4} className="text-end">
          <Button variant="primary">
            Add Product
          </Button>
        </Col>
      </Row>

      <Row>
        {/* Sidebar */}
        <Col md={3} className="bg-white p-3 shadow-sm rounded">
          <h6 className="fw-bold mb-3">Filters</h6>
          <Form.Group className="mb-3">
            <Form.Label>Product type</Form.Label>
            <Form.Select>
              <option>Select...</option>
              <option>Rental Product</option>
              <option>Subscription Product</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Template structure</Form.Label>
            <Form.Select>
              <option>All</option>
              <option>Custom Template</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price ruleset</Form.Label>
            <Form.Select>
              <option>All</option>
              <option>Discounted</option>
            </Form.Select>
          </Form.Group>

          <div className="mt-4">
            <Button variant="outline-primary" className="w-100 mb-2">
              <FaFileImport className="me-2" />
              Import
            </Button>
            <Button variant="outline-primary" className="w-100">
              <FaFileExport className="me-2" />
              Export
            </Button>
          </div>
        </Col>

        {/* Main Content */}
        <Col md={9}>
          {/* Tabs */}
          <Nav variant="tabs" defaultActiveKey="products" className="mb-4">
            <Nav.Item>
              <Nav.Link eventKey="products">Products</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bundles">Bundles</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="collections">Collections</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Actions Row */}
          <Row className="mb-3">
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary" id="actions-dropdown">
                  Actions
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Delete</Dropdown.Item>
                  <Dropdown.Item>Update Status</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col className="text-end">
              <small>0 products selected</small> &nbsp; | &nbsp; 
              <a href="#" className="text-primary">
                Select all 1 product
              </a>
            </Col>
          </Row>

          {/* Product Table */}
          <Table bordered hover>
            <thead className="bg-light">
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
              <tr>
                <td>
                  <Form.Check type="checkbox" />
                </td>
              
                <td>
                <Link to ='/inventory/itemcard'>
                  <img
                    src="https://i.ibb.co/8jZCxcp/image.png"
                    alt="product"
                    className="me-2"
                    style={{ width: "40px", height: "40px", borderRadius: "5px" }}
                  />
                  Cp3
                  </Link>
                </td>
                <td>Rental product</td>
                <td>
                  <span className="badge bg-success">Visible</span>
                </td>
                <td>
                <Link to ="/inventory/itemcard">CP3 </Link>
                </td>
              </tr>
            </tbody>
          </Table>

          {/* Footer */}
          <div className="text-end mt-3">
            <small>Showing 1 - 1 of 1</small>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default InventoryList;
