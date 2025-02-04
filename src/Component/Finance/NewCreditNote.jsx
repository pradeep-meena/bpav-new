import React, { useState } from "react";
import { Container, Row, Col, Form, Table, Button, Dropdown } from "react-bootstrap";

const NewCreditNote = () => {
  const [rows, setRows] = useState([
    { item: "", description: "", qty: 0, unitPrice: 0, account: "", taxRate: "", amount: 0 },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      { item: "", description: "", qty: 0, unitPrice: 0, account: "", taxRate: "", amount: 0 },
    ]);
  };

  const deleteRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  return (
    <div className="page-wrapper">
    <Container fluid className="py-4">
      {/* Page Title */}
      <h5 className="mb-3 text-muted">Purchases Overview  Bills to Pay</h5>
      <h2 className="mb-4">New Credit Note</h2>

      {/* Top Form Section */}
      <Form>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>From</Form.Label>
              <Form.Control type="text" placeholder="Supplier Name" />
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
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" defaultValue="2025-01-26" />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Reference</Form.Label>
              <Form.Control type="text" placeholder="Reference" />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Form.Label>Total</Form.Label>
              <Form.Control type="number" readOnly defaultValue="0.00" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3" style={{justifyContent:"space-between"}}>
          <Col md={4}>
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
              <Form.Label>Amounts are</Form.Label>
              <Form.Select >
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
            <th style={{ width: "10%" }}>Item</th>
            <th>Description</th>
            <th style={{ width: "10%" }}>Qty</th>
            <th style={{ width: "10%" }}>Unit Price</th>
            <th style={{ width: "15%" }}>Account</th>
            <th style={{ width: "10%" }}>Tax Rate</th>
            <th style={{ width: "10%" }}>Amount GBP</th>
            <th style={{ width: "5%" }}></th>
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
                <Form.Control
                  type="number"
                  placeholder="Qty"
                  min="0"
                  onChange={(e) =>
                    (row.qty = parseFloat(e.target.value) || 0)
                  }
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  placeholder="Unit Price"
                  min="0"
                  onChange={(e) =>
                    (row.unitPrice = parseFloat(e.target.value) || 0)
                  }
                />
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
                <Form.Control type="number" readOnly value={row.qty * row.unitPrice} />
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

      {/* Add New Line Button */}
      <Button variant="outline-primary" onClick={addRow}>
        Add a New Line
      </Button>

      {/* Summary Section */}
      <Row className="mt-4">
        <Col md={{ span: 4, offset: 8 }}>
          <Table bordered>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td className="text-end">0.00</td>
              </tr>
              <tr>
                <td>VAT</td>
                <td className="text-end">0.00</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td className="text-end"><strong>0.00</strong></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Action Buttons */}
      <div className="d-flex justify-content-between mt-4">
        <Button variant="primary">Save</Button>
        <div><Button variant="success">Approve</Button>
        <Button variant="outline-secondary">Cancel</Button></div>
      </div>

      {/* Notes Section */}
      <div className="mt-4">
        <h6>History & Notes</h6>
        <Button variant="outline-primary">Add Note</Button>
      </div>
    </Container>
    </div>
  );
};

export default NewCreditNote;
