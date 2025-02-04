import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const InvoicePage = () => {
    return (
        <div className='page-wrapper'>
        <div className="container my-5">
            <div className="card p-4">
                <h4 className="mb-4">Create Invoice</h4>
                <form>
                    {/* Bill To Section */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="contact" className="form-label">Contact</label>
                            <input type="text" className="form-control" id="contact" placeholder="Add contact" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="company" className="form-label">Company</label>
                            <input type="text" className="form-control" id="company" placeholder="Add company" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="billingAddress" className="form-label">Billing Address</label>
                            <input type="text" className="form-control" id="billingAddress" placeholder="Add billing address" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="shippingAddress" className="form-label">Shipping Address</label>
                            <input type="text" className="form-control" id="shippingAddress" placeholder="Add shipping address" />
                        </div>
                    </div>

                    {/* Invoice Details */}
                    <div className="row mb-3">
                        <div className="col-md-4">
                            <label htmlFor="invoiceDate" className="form-label">Invoice Date</label>
                            <input type="date" className="form-control" id="invoiceDate" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="paymentTerms" className="form-label">Payment Terms</label>
                            <select className="form-select" id="paymentTerms">
                                <option value="Net 30">Net 30</option>
                                <option value="Net 15">Net 15</option>
                                <option value="Due on Receipt">Due on Receipt</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="dueDate" className="form-label">Due Date</label>
                            <input type="date" className="form-control" id="dueDate" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="invoiceNumber" className="form-label">Next Invoice Number</label>
                            <input type="text" className="form-control" id="invoiceNumber" placeholder="INVOICE-755477" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="poNumber" className="form-label">PO Number</label>
                            <input type="text" className="form-control" id="poNumber" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="reference" className="form-label">Reference</label>
                            <input type="text" className="form-control" id="reference" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="notes" className="form-label">Notes</label>
                            <input type="text" className="form-control" id="notes" />
                        </div>
                    </div>

                    {/* Line Items Section */}
                    <div className="mb-3">
                        <h5>Line Items</h5>
                        <button type="button" className="btn btn-outline-primary btn-sm">Add Line Item</button>
                    </div>

                    {/* Summary Section */}
                    <div className="mt-4">
                        <h5>Summary</h5>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="subtotal" className="form-label">Subtotal</label>
                                <input type="text" className="form-control" id="subtotal" placeholder="0.00" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="discount" className="form-label">Discount/Fee/Tax</label>
                                <input type="text" className="form-control" id="discount" placeholder="0.00" />
                            </div>
                        </div>
                    </div>

                    <div className="text-end">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#invoiceModal">Ready</button>
                    </div>
                </form>
            </div>

            {/* Terms Section */}
            <div className="card mt-4 p-4">
                <h5>Comments</h5>
                <p><strong>Terms:</strong> Payment of the full amount outstanding on the invoice is due thirty calendar days after the invoice date (or as per the net term shown on the invoice if different). Late invoice payments may incur additional charges. For milestone payment agreements, if there are delays in processing payments on the agreed-upon dates, BPAV Technology Group reserves the right to temporarily halt work until payments are successfully processed. Any unique payment arrangements beyond BPAV's standard terms must adhere to the agreed-upon payment schedule for each specific case.</p>
                <p>
                    <strong>BPAV TECHNOLOGY GROUP LTD</strong><br />
                    Bank Account Name: BPAV Technology Group Ltd<br />
                    Bank Account Address: Monzo Bank, Broadwalk House, 5 Appold St, London EC2A 2AG, United Kingdom<br />
                    Sort Code: 04-00-04<br />
                    Account number: 45715540<br />
                    BIC Number: MONZGB2L<br />
                    IBAN: GB34 MONZ 0400 0445 7155 40
                </p>
                <p>
                    Copyright &copy; 2025 BPAV Technology Group Ltd | All rights reserved | Company Number 14304458.
                </p>
            </div>

            {/* Payment Collection Section */}
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
        </div>
    );
};

export default InvoicePage;