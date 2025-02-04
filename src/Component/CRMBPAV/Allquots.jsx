import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Dropdown,
  Table,
} from "react-bootstrap";

const AllQuotes = () => {
  return (
    <div className="page-wrapper">
      <Container className="mt-5">
        {/* Header Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
          <h5 className="fw-bold">Quotes</h5>
          <div className="d-flex gap-2">
            {/* Action Dropdown */}
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-danger"
                className="fw-bold"
                style={{ borderWidth: 2, borderRadius: 5 }}
              >
                Action
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Create Quote Button */}
            <Button variant="danger" className="fw-bold">
              Create quote
            </Button>
          </div>
        </div>

        <hr className="mt-2" />

        {/* Filters Section */}
        <div className="card">
          <div className="card-header bg-white p-3">
            <Row className="g-3 align-items-center">
              {/* Search Box */}
              <Col xs={12} md={4}>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search all quotes"
                    className="p-2 w-100"
                    style={{ backgroundColor: "#ebfaff" }}
                  />
                </Form>
              </Col>

              {/* Status Dropdown */}
              <Col xs={12} sm={6} md={2}>
                <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
                  <span className="me-2">Status:</span>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="light"
                      className="text-secondary fw-bold"
                    >
                      <span className="text-info">All</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Action</Dropdown.Item>
                      <Dropdown.Item href="#">Another action</Dropdown.Item>
                      <Dropdown.Item href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Col>

              {/* Owners Dropdown */}
              <Col xs={12} sm={6} md={3}>
                <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
                  <span className="me-2">Owners:</span>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="light"
                      className="text-secondary fw-bold"
                    >
                      <span className="text-info">All user</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Action</Dropdown.Item>
                      <Dropdown.Item href="#">Another action</Dropdown.Item>
                      <Dropdown.Item href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Col>

              {/* Archive Status Dropdown */}
              <Col xs={12} md={3}>
                <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
                  <span className="me-2">Archive status:</span>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="light"
                      className="text-secondary fw-bold"
                    >
                      <span className="text-info">Active</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Action</Dropdown.Item>
                      <Dropdown.Item href="#">Another action</Dropdown.Item>
                      <Dropdown.Item href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Col>
            </Row>
          </div>

          {/* Table Section */}
          <div className="card-body">
            <div className="table-responsive">
              <Table bordered hover>
                <thead className="table-light text-center">
                  <tr>
                    <th>Quote</th>
                    <th>
                      Quote Amount{" "}
                      <i className="fa-solid fa-circle-info text-secondary ms-2"></i>
                    </th>
                    <th>Status</th>
                    <th>Quote Owner</th>
                    <th>Create Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Example 1</td>
                    <td>£1</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        Pending signature (0/1)
                      </span>
                    </td>
                    <td>
                      <img
                        src="https://via.placeholder.com/30"
                        className="rounded-circle me-2"
                        alt="User"
                      />{" "}
                      Benjamin Price
                    </td>
                    <td>Today at 23:17</td>
                  </tr>
                  <tr>
                    <td>Example 2</td>
                    <td>£14</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        Pending signature (0/1)
                      </span>
                    </td>
                    <td>
                      <img
                        src="https://via.placeholder.com/30"
                        className="rounded-circle me-2"
                        alt="User"
                      />{" "}
                      Benjamin Price
                    </td>
                    <td>20 Dec 2024</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            {/* Pagination */}
            <nav className="mt-2">
              <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
                <div className="d-flex align-items-center gap-2">
                  <span className="text-secondary fw-semibold">
                    <i className="fa-solid fa-chevron-left mx-2" /> Prev
                  </span>
                  <Button variant="outline-info" className="fw-bold">
                    1
                  </Button>
                  <span className="text-info fw-bold">2</span>
                  <span className="text-info fw-bold">3</span>
                  <span className="text-info fw-bold">4</span>
                  <span className="text-info fw-bold">5</span>
                  <span className="text-info fw-bold">
                    Next <i className="fa-solid fa-chevron-right" />
                  </span>
                </div>

                {/* Per Page Dropdown */}
                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    className="text-info fw-bold"
                  >
                    25 per page
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">20 per page</Dropdown.Item>
                    <Dropdown.Item href="#">30 per page</Dropdown.Item>
                    <Dropdown.Item href="#">50 per page</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </nav>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllQuotes;
