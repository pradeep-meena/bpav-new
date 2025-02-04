import React, { useState } from "react";

import { Container, Row, Col, Button, Tabs, Tab, Form } from "react-bootstrap";

const Variations = () => {
  const [key, setKey] = useState("variations"); // Active tab key

  return (
    <Container fluid className="mt-4">
      <Row>
        {/* Main Content */}
        <Col md={9}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Products &gt; Cp3</h4>
            <Button variant="outline-secondary">Duplicate product</Button>
          </div>

          {/* Tabs */}
          <Tabs
            id="product-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="inventory" title="Inventory">
              <p>Inventory content goes here.</p>
            </Tab>
            <Tab eventKey="variations" title="Variations">
              {/* Variations Content */}
              <div className="border p-4 rounded bg-white">
                <h5>Variations</h5>
                <p>
                  Enable variations if this product comes in different options,
                  like sizes or colors.
                </p>
                <Button variant="outline-primary">Enable variations</Button>
              </div>
            </Tab>
            <Tab eventKey="pricing" title="Pricing">
              <p>Pricing content goes here.</p>
            </Tab>
            <Tab eventKey="settings" title="Settings">
              <p>Settings content goes here.</p>
            </Tab>
            <Tab eventKey="online-store" title="Online store">
              <p>Online store content goes here.</p>
            </Tab>
            <Tab eventKey="history" title="History">
              <p>History content goes here.</p>
            </Tab>
          </Tabs>
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
    </Container>
  );
};

export default Variations;
