import React from "react";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import { RiDeleteBack2Fill } from "react-icons/ri";
const NewExpenseClaim = () => {
  return (
    <div className="page-wrapper">
    <Container fluid className="p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold"><RiDeleteBack2Fill /> New expense claim</h5>
        <div>
          <Button variant="outline-secondary" className="me-2">
            Save draft
          </Button>
          <Button variant="primary" className="me-2">
            Submit
          </Button>
          <Button variant="success">Approve</Button>
          <Dropdown align="end" className="d-inline-block ms-2">
            <Dropdown.Toggle variant="light" className="btn-icon">
              ⋮
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Option 1</Dropdown.Item>
              <Dropdown.Item>Option 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <Row>
        {/* Left Section: Upload Image */}
        <Col md={5} className="bg-light text-center p-4">
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <div className="bg-light text-center border p-4" style={{ maxWidth: "200px" }}>
              <div className="mb-3">
                <i className="bi bi-receipt fs-1 text-muted"></i>
              </div>
              <p className="text-muted">Upload an image</p>
              <p className="text-muted small">Drag & drop here, or select your file manually</p>
              <Button variant="outline-primary">Upload</Button>
            </div>
          </div>
        </Col>

        {/* Right Section: Form */}
        <Col md={7} className="p-4">
          {/* User Details */}
          <div className="d-flex align-items-center mb-4">
            <div className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-3" style={{ width: "40px", height: "40px" }}>
              <img src="https://i.ibb.co/n62zKcm/image.png" alt="" style={{width: "42px"}}/>
            </div>
            <div>
              <strong>Benjamin Price (You)</strong>
            </div>
          </div>

          <Form>
            {/* Purchase Amount */}
            <Row className="mb-3">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Purchase amount</Form.Label>
                  <Form.Select>
                    <option>GBP</option>
                    <option>USD</option>
                    <option>EUR</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={8}>
                <Form.Group>
                  <Form.Label>&nbsp;</Form.Label>
                  <Form.Control type="number" placeholder="0.00" />
                </Form.Group>
              </Col>
            </Row>

            {/* Description */}
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={2} maxLength={1000} placeholder="What was it for?" />
            </Form.Group>

            {/* How did you pay? */}
            <Form.Group className="mb-3">
              <Form.Label>How did you pay?</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Company money (non-reimbursable)"
                  name="paymentMethod"
                  defaultChecked
                  inline
                />
                <Form.Check
                  type="radio"
                  label="Personal money (reimbursable)"
                  name="paymentMethod"
                  inline
                />
              </div>
            </Form.Group>

            {/* Company Bank Account */}
            <Form.Group className="mb-3">
              <Form.Label>Company bank account</Form.Label>
              <Form.Select>
                <option>BPAV Consultants Ltd</option>
                <option>Other Bank Account</option>
              </Form.Select>
            </Form.Group>

            {/* Spent At */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Spent at</Form.Label>
                  <Form.Select>
                    <option>Select contact</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Spent on</Form.Label>
                  <Form.Control type="date" defaultValue="2024-12-27" />
                </Form.Group>
              </Col>
            </Row>

            {/* Account */}
            <Form.Group className="mb-3">
              <Form.Label>Account</Form.Label>
              <Form.Select>
                <option>Select account</option>
              </Form.Select>
            </Form.Group>

            {/* Optional Section */}
            <h6 className="mt-4">Optional</h6>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Assign to project or customer</Form.Label>
                  <Form.Control type="text" placeholder="Enter project or customer" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Label</Form.Label>
                  <Form.Control type="text" placeholder="Enter label" />
                </Form.Group>
              </Col>
            </Row>

            {/* Summary Section */}
            <Row>
              <Col md={6}></Col>
              <Col md={6}>
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td className="text-end">GBP 0.00</td>
                    </tr>
                    <tr>
                      <td>Select tax rate</td>
                      <td className="text-end">GBP 0.00</td>
                    </tr>
                    <tr>
                      <td><strong>Total</strong></td>
                      <td className="text-end"><strong>GBP 0.00</strong></td>
                    </tr>
                  </tbody>
                </table>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default NewExpenseClaim;
