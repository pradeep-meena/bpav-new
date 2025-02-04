import React, { useState } from "react";
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";

const Customers = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "BTS Big",
      email: "info@bpav.global",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Filter customers based on search term
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app ">
      {/* Navbar */}
   
      <div className="d-flex">
        {/* Sidebar */}
        

        {/* Main Content */}
        <div className="content flex-grow-1 p-3">
          {/* Toolbar */}
          <div className="toolbar d-flex justify-content-between align-items-center mb-3">
            <div className="toolbar-left d-flex gap-3 align-items-center">
              <Button variant="outline-secondary">Actions ▼</Button>
              <span className="text-muted">0 customers selected</span>
              <a href="#" className="text-primary text-decoration-none">
                Select all 1 customer
              </a>
            </div>
            <span className="text-muted">Showing 1 - 1 of 1</span>
          </div>

          {/* Customers Table */}
          <div className="table-container bg-white rounded shadow-sm">
            <Table hover>
              <thead>
                <tr>
                  <th>
                    <Form.Check type="checkbox" />
                  </th>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer, index) => (
                  <tr key={customer.id}>
                    <td>
                      <Form.Check type="checkbox" />
                    </td>
                    <td>{index + 1}</td>
                    <td className="d-flex align-items-center gap-3">
                      <div
                        className="avatar bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "32px", height: "32px" }}
                      >
                        BTS
                      </div>
                      {customer.name}
                    </td>
                    <td>{customer.email}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
