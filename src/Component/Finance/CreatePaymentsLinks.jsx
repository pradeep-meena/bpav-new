import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreatePaymentsLinks = () => {
    return (
        <div className='page-wrapper'>
        <div className="container my-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Payment Links</h3>
                <div>
                    <button className="btn btn-outline-primary">Go To Commerce</button>
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#paymentLinkModal">Create a payment link</button>
                </div>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Search all payment links" />
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Link Name</th>
                        <th>Line Items</th>
                        <th>Total</th>
                        <th>Last Modified</th>
                        <th>Views</th>
                        <th>Checkouts</th>
                        <th>View to Checkout Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="#">Product Name 7</a></td>
                        <td>Product Name</td>
                        <td>£50.00</td>
                        <td>Nov 11, 2024</td>
                        <td>11</td>
                        <td>0</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td><a href="#">Test</a></td>
                        <td>Add line item...</td>
                        <td>£1.00</td>
                        <td>Jul 6, 2024</td>
                        <td>4</td>
                        <td>0</td>
                        <td>0%</td>
                    </tr>
                </tbody>
            </table>

            {/* Modal */}
            <div className="modal fade" id="paymentLinkModal" tabIndex="-1" aria-labelledby="paymentLinkModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="paymentLinkModalLabel">Add a payment link name</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className="nav nav-tabs mb-3" id="paymentLinkTabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="line-items-tab" data-bs-toggle="tab" data-bs-target="#line-items" type="button" role="tab" aria-controls="line-items" aria-selected="true">Line Items</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="preview-tab" data-bs-toggle="tab" data-bs-target="#preview" type="button" role="tab" aria-controls="preview" aria-selected="false">Preview</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="paymentLinkTabContent">
                                <div className="tab-pane fade show active" id="line-items" role="tabpanel" aria-labelledby="line-items-tab">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div className="currency-selector">Currency: British Pound Sterling (GBP) £</div>
                                        <div className="d-flex">
                                            <span className="edit-columns me-3">Edit columns</span>
                                            <span className="add-line-item-btn">Add line item</span>
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-body text-center">
                                            <h6>Add line items to your payment link</h6>
                                            <p>Add line items for the products you are selling and share it with your customer to get paid easily.</p>
                                            <a href="#" className="text-decoration-none">Learn how you can sell through payment links</a>
                                            <div className="mt-3">
                                                <button className="btn btn-outline-primary me-2">Select from product library</button>
                                                <button className="btn btn-outline-secondary">Create custom line item</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="summary-card">
                                        <h6>Summary</h6>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <span>Subtotal</span>
                                            <span>---</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <a href="#" className="text-decoration-none text-primary">+ Add discount, fee, or tax</a>
                                            <span>---</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span>Total</span>
                                            <span>---</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                                    <div className="container my-4">
                                        <h4>Manage settings for this payment link</h4>
                                        <p className="text-muted">
                                            Settings here will only apply to this payment link. It won't override your 
                                            <a href="#" className="text-muted-link">default settings</a>.
                                        </p>
                                        <div className="mb-4">
                                            <h5 className="section-header">Deal</h5>
                                            <p className="text-muted">
                                                Allow this link to create new deals
                                            </p>
                                            <div className="toggle-switch mb-3">
                                                <span className="me-2">When a customer pays, the payment will show on associated deals. If a deal doesn’t exist, we’ll create a new one.</span>
                                                <input type="checkbox" className="form-check-input" id="allowDeals" defaultChecked />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="dealPipeline" className="form-label">Deal pipeline *</label>
                                                    <select id="dealPipeline" className="form-select">
                                                        <option selected>Sales pipeline</option>
                                                        <option>Pipeline 1</option>
                                                        <option>Pipeline 2</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="dealStage" className="form-label">Deal stage *</label>
                                                    <select id="dealStage" className="form-select">
                                                        <option selected>Closed won</option>
                                                        <option>Stage 1</option>
                                                        <option>Stage 2</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="preview" role="tabpanel" aria-labelledby="preview-tab">
                                    <div className="container my-4">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="summary-card">
                                                    <h6>Summary</h6>
                                                    <div className="d-flex justify-content-between">
                                                        <span>Administration Per Hour</span>
                                                        <span>£75.00</span>
                                                    </div>
                                                    <small className="text-muted">Administration Per Hour</small>
                                                    <hr />
                                                    <div className="d-flex justify-content-between">
                                                        <span className="summary-total">Total (GBP)</span>
                                                        <span className="summary-total">£75.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <h6 className="form-label">Contact info</h6>
                                                <div className="mb-3">
                                                    <label htmlFor="emailField" className="form-label">Email address *</label>
                                                    <input type="email" id="emailField" className="form-control" placeholder="Enter your email" />
                                                </div>
                                                <h6 className="form-label">Payment info</h6>
                                                <div className="payment-methods">
                                                    <div className="payment-method active">
                                                        <span>Card</span>
                                                    </div>
                                                    <div className="payment-method">
                                                        <span>BACS Direct Debit</span>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="cardNumber" className="form-label">Card number</label>
                                                    <input type="text" id="cardNumber" className="form-control" placeholder="1234 1234 1234 1234" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="expiryDate" className="form-label">Expiry date</label>
                                                        <input type="text" id="expiryDate" className="form-control" placeholder="MM / YY" />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label htmlFor="securityCode" className="form-label">Security code</label>
                                                        <input type="text" id="securityCode" className="form-control" placeholder="CVC" />
                                                    </div>
                                                </div>
                                                <h6 className="form-label">Billing address</h6>
                                                <div className="mb-3">
                                                    <label htmlFor="nameOnCard" className="form-label">Name on card *</label>
                                                    <input type="text" id="nameOnCard" className="form-control" placeholder="Enter name" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="country" className="form-label">Country *</label>
                                                    <select id="country" className="form-select">
                                                        <option selected>United States</option>
                                                        <option>United Kingdom</option>
                                                        <option>Canada</option>
                                                        <option>Australia</option>
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="addressLine1" className="form-label">Address line 1 *</label>
                                                    <input type="text" id="addressLine1" className="form-control" placeholder="Street address" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="addressLine2" className="form-label">Address line 2</label>
                                                    <input type="text" id="addressLine2" className="form-control" placeholder="Apartment, suite, etc." />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CreatePaymentsLinks;