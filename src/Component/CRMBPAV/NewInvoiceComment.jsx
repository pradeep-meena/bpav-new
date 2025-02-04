import React from "react";
import { Card, Button, ButtonGroup, Dropdown } from "react-bootstrap";

const NewInvoiceComment = () => {
  return (
    <div className="container mt-4">
      {/* Comments Title */}
      <h5 className="mb-3">Comments</h5>

      {/* Comments Card */}
      <Card className="p-3 border-light shadow-sm " style={{ backgroundColor: "#f5f9fb" }}>
        <Card.Body>
          {/* Terms Section */}
          <p>
            <strong>Terms:</strong> Payment of the full amount outstanding on the
            invoice is due thirty calendar days after the invoice date (or as
            per the net term shown on the invoice if different). Late invoice
            payments may incur additional charges. For milestone payment
            agreements, if there are delays in processing payments on the
            agreed-upon dates, BPAV Technology Group reserves the right to
            temporarily halt work until payments are successfully processed.
            Any unique payment arrangements beyond BPAV's standard terms must
            adhere to the agreed-upon payment schedule for each specific case.
          </p>

          {/* Payment Details Section */}
          <p>
            <strong>BPAV TECHNOLOGY GROUP LTD</strong>
            <br />
            <strong>Bank Account Name:</strong> BPAV Technology Group Ltd
            <br />
            <strong>Bank Account Address:</strong> Monzo Bank, Broadwalk House,
            5 Appold St, London EC2A 2AG, United Kingdom
            <br />
            <strong>Sort code:</strong> 04-00-04
            <br />
            <strong>Account number:</strong> 45715540
            <br />
            <strong>BIC Number:</strong> MONZGB2L
            <br />
            <strong>IBAN:</strong>{" "}
            <span className="text-primary">GB34 MONZ 0400 0445 7155 40</span>
          </p>

          {/* Footer Section */}
          <p className="mt-4 text-muted">
            Copyright © 2025 BPAV Technology Group Ltd | All rights reserved |
            Company Number 14304458.
          </p>
        </Card.Body>
      </Card>

      {/* Formatting Options */}
      <div className="mt-3 d-flex justify-content-between align-items-center">
        <ButtonGroup>
          <Button variant="outline-secondary" size="sm">
            <b>B</b>
          </Button>
          <Button variant="outline-secondary" size="sm">
            <i>I</i>
          </Button>
          <Button variant="outline-secondary" size="sm">
            <u>U</u>
          </Button>
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" size="sm">
              More
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Option 1</Dropdown.Item>
              <Dropdown.Item href="#">Option 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>
        <div>
          <i className="fa fa-paperclip text-secondary me-2"></i>
          <i className="fa fa-link text-secondary"></i>
        </div>
      </div>
    </div>
  );
};

export default NewInvoiceComment;