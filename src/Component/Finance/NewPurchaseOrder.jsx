import React, { useState } from "react";
import { Container, Row, Col, Form, Table, Button, Dropdown } from "react-bootstrap";

const NewPurchaseOrder = () => {
  const [rows, setRows] = useState([
    { item: "", description: "", quantity: 0, discount: 0, unitPrice: 0, account: "", taxRate: "" },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      { item: "", description: "", quantity: 0, discount: 0, unitPrice: 0, account: "", taxRate: "" },
    ]);
  };

  const deleteRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  return (
    <div className="page-wrapper">
    <Container fluid className="py-4">
      {/* Header */}
      <h5 className="text-muted mb-3">Purchases Overview  Purchase Orders New Purchase Order</h5>
      <h2 className="fw-bold">New Purchase Order</h2>

      {/* Form Section */}
      <Form className="mb-4">
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Contact</Form.Label>
              <Form.Control type="text" placeholder="Enter contact name" />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" defaultValue="2024-12-27" />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Delivery Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Order Number</Form.Label>
              <Form.Control type="text" placeholder="PO-13607" />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Reference</Form.Label>
              <Form.Control type="text" placeholder="Reference" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3" style={{justifyContent:"space-between"}}>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Currency</Form.Label>
              <Form.Select>
                <option>GBP British Pound</option>
                <option>USD US Dollar</option>
                <option>EUR Euro</option>
              </Form.Select>
            </Form.Group>
          </Col>
        
          <Col md={4}>
            <Form.Group>
              <Form.Label>Amounts Are</Form.Label>
              <Form.Select>
                <option>Tax Inclusive</option>
                <option>Tax Exclusive</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/* Line Items Table */}
      <Table bordered hover className="mb-3">
        <thead className="bg-light">
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Disc %</th>
            <th>Unit Price</th>
            <th>Account</th>
            <th>Tax Rate</th>
            <th>Amount GBP</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <Form.Control type="text" placeholder="Item" />
              </td>
              <td>
                <Form.Control type="text" placeholder="Description" />
              </td>
              <td>
                <Form.Control type="number" placeholder="0" min="0" />
              </td>
              <td>
                <Form.Control type="number" placeholder="0" min="0" max="100" />
              </td>
              <td>
                <Form.Control type="number" placeholder="0.00" />
              </td>
              <td>
                <Form.Control type="text" placeholder="Account" />
              </td>
              <td>
                <Form.Select>
                  <option>None</option>
                  <option>5%</option>
                  <option>10%</option>
                  <option>20%</option>
                </Form.Select>
              </td>
              <td>
                <Form.Control type="number" placeholder="0.00" readOnly />
              </td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteRow(index)}
                >
                  ✕
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button variant="outline-primary" onClick={addRow}>
        + Add a New Line
      </Button>

      {/* Delivery Address Section */}
      <div className="mt-4">
        <h5>Delivery Address</h5>
        <Row className="mb-3">
          <Col md={4}>
            <p>
              <strong>Postal</strong>
              <br />
              BPAV Technology Group Ltd
              <br />
              Ground Floor, Unit 1
              <br />
              Prisma Park
              <br />
              Berrington Way
              <br />
              Basingstoke, Hampshire
              <br />
              RG24 8GT, United Kingdom
            </p>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Attention</Form.Label>
              <Form.Control type="text" placeholder="Accounts Team" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Telephone</Form.Label>
              <Form.Control type="text" placeholder="44 333 344 3201" />
            </Form.Group>
          </Col>
          <Col md={4}>
          <Form.Group>
              <Form.Label>Delivery Instructions</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Col>
        </Row>
        
     
        
      </div>

      {/* Summary Section */}
      <Row className="mt-4">
        <Col md={{ span: 4, offset: 8 }}>
          <Table borderless>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td className="text-end">GBP 0.00</td>
              </tr>
              <tr>
                <td>Total</td>
                <td className="text-end fw-bold">GBP 0.00</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

     {/* Footer Buttons */}
<div className="d-flex justify-content-between mt-4">
  <Button variant="primary">Save</Button>
  <div className="d-flex">
    <Button variant="success" className="me-2">Approve</Button>
    <Button variant="outline-secondary">Cancel</Button>
  </div>
</div>


      {/* History and Notes */}
      <div className="mt-4">
        <h6>History & Notes</h6>
        <Button variant="outline-primary">Add a Note</Button>
      </div>
    </Container>
    </div>
  );
};

export default NewPurchaseOrder;
