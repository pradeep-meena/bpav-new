import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const contracts = [
  {
    id: "#CON00002",
    subject: "Service Agreement",
    client: "Mick Aston",
    project: "Bootstrap Framework",
    contractType: "Marketing",
    contractValue: "$ 80,00",
    startDate: "Oct 7, 2022",
    endDate: "Dec 8, 2022",
  },
  {
    id: "#CON00003",
    subject: "Sales Contract",
    client: "Jennifer Ellison",
    project: "Website Redesign",
    contractType: "Planning",
    contractValue: "$ 5,000.00",
    startDate: "Oct 8, 2022",
    endDate: "Jan 21, 2023",
  },
  {
    id: "#CON00004",
    subject: "Event Management Project Contract",
    client: "Kelly Brook",
    project: "Payment Integration",
    contractType: "Marketing",
    contractValue: "$ 800,000.00",
    startDate: "Sep 8, 2022",
    endDate: "Jan 14, 2023",
  },
  {
    id: "#CON00005",
    subject: "Consulting Project Contract",
    client: "Joseph Fiennes",
    project: "Website Launch",
    contractType: "Planning",
    contractValue: "$ 100,000.00",
    startDate: "Oct 8, 2022",
    endDate: "Dec 9, 2022",
  },
];

const ContactListHead = () => {
  return (
    <div className="container py-4">
      <h2 className="fw-bold">Manage Contact</h2>
      <p className="text-muted">
        <span className="text-success fw-bold">Dashboard</span> &gt; Contact
      </p>

      <div className="card shadow-sm p-3 rounded">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3 gap-2">
          <div className="d-flex gap-2 align-items-center">
            <select className="form-select w-auto">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
            <p className="mb-0">entries per page</p>
          </div>
          <input type="text" className="form-control w-md-100 w-auto" placeholder="Search..." />
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle text-center">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>SUBJECT</th>
                <th>CLIENT</th>
                <th>PROJECT</th>
                <th>CONTRACT TYPE</th>
                <th>CONTRACT VALUE</th>
                <th>START DATE</th>
                <th>END DATE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((contract, index) => (
                <tr key={index}>
                 <td>
                    <button className="btn btn-primary btn-sm">{contract.id}</button>
                  </td>
                  <td>{contract.subject}</td>
                  <td>{contract.client}</td>
                  <td>{contract.project}</td>
                  <td>{contract.contractType}</td>
                  <td>{contract.contractValue}</td>
                  <td>{contract.startDate}</td>
                  <td>{contract.endDate}</td>
                  <td>
                    <button className="btn btn-success btn-sm me-1">👁</button>
                    <button className="btn btn-info btn-sm me-1">✏</button>
                    <button className="btn btn-danger btn-sm">🗑</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-muted">Showing 1 to {contracts.length} of {contracts.length} entries</p>
      </div>
    </div>
  );
};

export default ContactListHead;
