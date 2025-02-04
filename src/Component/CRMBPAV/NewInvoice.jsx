import React from 'react';
import NewInvoiceComment from './NewInvoiceComment';

const NewInvoice = () => {
  return (
   <div className='page-wrapper'>
     <div className='container mt-5'>
      {/* Header Buttons */}
      <div className="d-flex justify-content-end mb-3">
        <button type="button" className="btn btn-outline-secondary px-4 py-2">
          Preview
        </button>
      </div>

      {/* Bill To Section */}
      <div className="row mb-4">
        <div className="col-md-4">
          <h5 className="fw-bold">Bill to</h5>
          <div className="mt-4">
            <label className="form-label fw-semibold">Contact *</label>
            <a href="#" className="text-info d-block mb-2 fw-semibold" style={{ textDecoration: 'none' }}>
              <i className="fa-solid fa-plus text-secondary me-2"></i>Add contact
            </a>
          </div>
          <div>
            <label className="form-label fw-semibold">Company</label>
            <a href="#" className="text-info d-block mb-2 fw-semibold" style={{ textDecoration: 'none' }}>
              <i className="fa-solid fa-plus text-secondary me-2"></i>Add company
            </a>
          </div>
          <div>
            <label className="form-label fw-semibold">Billing address</label>
            <p className="text-muted">No billing address</p>
            <a href="#" className="text-info d-block fw-semibold" style={{ textDecoration: 'none' }}>
              Edit
            </a>
            <a href="#" className="text-info d-block mt-3 fw-semibold" style={{ textDecoration: 'none' }}>
              <i className="fa-solid fa-plus text-secondary me-2"></i>Add shipping address
            </a>
          </div>
        </div>

        <div className="col-md-8">
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="invoiceDate" className="form-label fw-semibold">
                Invoice date *
              </label>
              <input type="date" id="invoiceDate" className="form-control" defaultValue="2024-12-25" />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="paymentTerms" className="form-label fw-semibold">Payment terms *</label>
              <select id="paymentTerms" className="form-select">
                <option>Net 30</option>
                <option>Net 15</option>
                <option>Net 45</option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="dueDate" className="form-label fw-semibold">Due date *</label>
              <input type="date" id="dueDate" className="form-control" defaultValue="2025-01-24" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="nextInvoice" className="form-label fw-semibold">
                Next invoice number
              </label>
              <input
                type="text"
                id="nextInvoice"
                className="form-control"
                defaultValue="INVOICE-755477"
                readOnly
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="poNumber" className="form-label fw-semibold">PO number</label>
              <input type="text" id="poNumber" className="form-control" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="reference" className="form-label fw-semibold">Reference</label>
              <input type="text" id="reference" className="form-control" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="notes" className="form-label fw-semibold">Notes</label>
              <textarea id="notes" className="form-control" rows={2}></textarea>
            </div>
          </div>
        </div>
      </div>

      {/* Line Items Section */}
      <div className="border rounded p-4 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="fw-bold">
            Currency: <span className="text-info">British Pound Sterling (GBP) £</span>
          </p>
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
          >
            Add line item
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a className="dropdown-item" href="#">Select from product library</a></li>
            <li><a className="dropdown-item" href="#">Create custom line item</a></li>
          </ul>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5 className="fw-semibold">Add line items to your invoice</h5>
            <p className="text-muted">
              Add line items for the products you're selling to your customer.
            </p>
            <button className="btn btn-secondary me-2">Select from product library</button>
            <button className="btn btn-outline-secondary">Create custom line item</button>
          </div>
          <div className="col-md-6 text-end">
            <img
              src="https://i.ibb.co/4dgqfWH/Screenshot-2025-01-09-190649.png"
              alt="Invoice illustration"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="card shadow-sm">
        <div className="card-header">
          <h5>Summary</h5>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <span className="fw-semibold">Subtotal</span>
            <span>--</span>
          </div>
          <div className="d-flex justify-content-between my-3">
            <span className="text-info fw-semibold">+ Add discount, fee, or tax</span>
            <span>--</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <strong>Total</strong>
            <strong>--</strong>
          </div>
        </div>
      </div>
    </div>
    <NewInvoiceComment />
    <div className="card mt-4 p-4">
                <h5>Payment Collection</h5>
                <div className="form-check form-switch mb-3">
                    <input className="form-check-input" type="checkbox" id="acceptOnlinePayments" defaultChecked />
                    <label className="form-check-label" htmlFor="acceptOnlinePayments">Accept online payments</label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Accepted forms of payment</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="creditCard" defaultChecked />
                        <label className="form-check-label" htmlFor="creditCard">Credit or debit card</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="bacs" defaultChecked />
                        <label className="form-check-label" htmlFor="bacs">BACS (direct debit)</label>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="billingAddress" defaultChecked />
                        <label className="form-check-label" htmlFor="billingAddress">Collect billing address for credit card purchases</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="shippingAddress" />
                        <label className="form-check-label" htmlFor="shippingAddress">Collect shipping address</label>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="storePaymentMethods" />
                        <label className="form-check-label" htmlFor="storePaymentMethods">Store payment methods for future charges</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="partialPayments" />
                        <label className="form-check-label" htmlFor="partialPayments">Allow your customer to pay an amount less than the balance due</label>
                    </div>
                </div>
                <h6>Advanced Settings</h6>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="language" className="form-label">Language</label>
                        <select className="form-select" id="language">
                            <option value="English">English</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="locale" className="form-label">Locale</label>
                        <select className="form-select" id="locale">
                            <option value="United Kingdom">United Kingdom</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="domain" className="form-label">Domain</label>
                    <input type="text" className="form-control" id="domain" placeholder="www.example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="contentSlug" className="form-label">Content Slug</label>
                    <input type="text" className="form-control" id="contentSlug" placeholder="example-slug" />
                </div>
                <div className="mb-3">
                    <label htmlFor="invoiceUrl" className="form-label">Invoice URL</label>
                    <input type="text" className="form-control" id="invoiceUrl" placeholder="https://www.example.com/invoice" />
                </div>
                <div className="mb-3">
                    <label htmlFor="taxId" className="form-label">Tax ID</label>
                    <input type="text" className="form-control" id="taxId" placeholder="GB VAT 123456789" />
                </div>
            </div>

            {/* Invoice Modal */}
            <div className="modal fade" id="invoiceModal" tabIndex="-1" aria-labelledby="invoiceModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="invoiceModalLabel">Invoice created and ready to send!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="toEmail" className="form-label">To</label>
                                    <select className="form-select" id="toEmail">
                                        <option value="test@test.com">Test Unknown (test@test.com)</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ccEmail" className="form-label">Cc</label>
                                    <select className="form-select" id="ccEmail">
                                        <option value="">Search</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fromEmail" className="form-label">From</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fromEmail"
                                        value="Benjamin Price from BPAV Technology Group Ltd (accounts...)"
                                        disabled
                                    />
                                </div>
                            </form>
                            <p className="text-muted mt-3">
                                <a href="#">Learn more about sending invoices</a>
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Send invoice</button>
                            <button type="button" className="btn btn-outline-secondary">Write email manually</button>
                        </div>
                    </div>
                </div>
            </div>
   </div>
  );
};

export default NewInvoice;
