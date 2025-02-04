import React from 'react';
import { Link } from 'react-router-dom';
import { all_routes } from '../router/all_routes';

const InvoiceCardM = () => {
  return (
    <div className='page-wrapper'>
         <div classNameName="container-fluid m-2">
    <div className="row">
      
      <div className="col-md-12">
        <div className="d-flex justify-content-between align-items-center py-3">
          <h2>Invoices</h2>
          <div>
            <input type="text" className="form-control d-inline-block me-2" style={{width: '250px' }} placeholder="Search ID, number, or contact"/>
            <button className="btn btn-primary">Advanced Filters</button>
          </div>
          <div>
            

<div className="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
   
     <div className="col-md-32 bg-light">
        <div className="text-end" >
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle bg-tranparent " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Action
                </button>
                <ul className="dropdown-menu">
                  <li> <Link to={all_routes.newinvoice1} ><span className="dropdown-item">View Invoice</span> </Link></li>
                  <li><a className="dropdown-item" href="#">View property history</a></li>
                  <li><a className="dropdown-item" href="#">Copy link</a></li>
                  <li><a className="dropdown-item" href="#">Send</a></li>
                  <li><a className="dropdown-item" href="#">Download</a></li>
                  <li><a className="dropdown-item" href="#">Clone</a></li>
                </ul>
              </div>
        </div>
        <div className="p-3">
          <h5 className="text-success">INVOICE-755477</h5>
          <p>Amount billed: <strong>£75</strong></p>
          <p className="text-danger">Invoice status: Voided</p>

          <h6>About this Invoice</h6>
          <ul className="list-unstyled">
            <li><strong>Owner:</strong> Benjamin Price</li>
            <li><strong>Balance due:</strong> £0.00</li>
            <li><strong>Due date:</strong> 24/01/2025 23:59 GMT</li>
            <li><strong>Last sent date:</strong> -</li>
            <li><strong>Number:</strong> INVOICE-755477</li>
            <li><strong>Last reminder sent date:</strong> -</li>
            <li><strong>PO number:</strong> -</li>
            <li><strong>Currency:</strong> GBP</li>
          </ul>

          <button className="btn btn-primary w-100">Save</button>
          <button className="btn btn-secondary w-100 mt-2">Cancel</button>
        </div>
      </div>
  </div>
</div>
          </div>
        </div>

        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Draft</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Upcoming</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Paid</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" >OverDue</button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th><input type="checkbox"/></th>
                          <th>Number</th>
                          <th>Invoice - Companies</th>
                          <th>Invoice - Contacts</th>
                          <th>Title</th>
                          <th>See more</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>INV</td>
                          <td>Company A</td>
                          <td>Contact A</td>
                          <td>Title A</td>
                          <td><button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">See More</button></td>
                        </tr>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>INV</td>
                          <td>Company B</td>
                          <td>Contact B</td>
                          <td>Title B</td>
                          <td><button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">See More</button></td>
                        </tr>
                   
                      </tbody>
                    </table>
                  </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th><input type="checkbox"/></th>
                          <th>Number</th>
                          <th>Invoice - Companies</th>
                          <th>Invoice - Contacts</th>
                          <th>Title</th>
                          <th>See more</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>INV</td>
                          <td>Company A</td>
                          <td>Contact A</td>
                          <td>Title A</td>
                          <th>See more</th>
                        </tr>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>INV</td>
                          <td>Company B</td>
                          <td>Contact B</td>
                          <td>Title B</td>
                          <td><button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">See More</button></td>
                        </tr>
                     
                      </tbody>
                    </table>
                  </div>
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th><input type="checkbox"/></th>
                          <th>Number</th>
                          <th>Invoice - Companies</th>
                          <th>Invoice - Contacts</th>
                          <th>Title</th>
                          <th>See More</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>INV</td>
                          <td>Company A</td>
                          <td>Contact A</td>
                          <td>Title A</td>
                          <td><button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">See More</button></td>
                        </tr>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>INV</td>
                          <td>Company B</td>
                          <td>Contact B</td>
                          <td>Title B</td>
                          <td><button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">See More</button></td>
                        </tr>
                      
                      </tbody>
                    </table>
                  </div>
            </div>
            <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th><input data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" type="checkbox"/></th>
                          <th>Number</th>
                          <th>Invoice - Companies</th>
                          <th>Invoice - Contacts</th>
                          <th>Title</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>INV</td>
                          <td>Company A</td>
                          <td>Contact A</td>
                          <td>Title A</td>
                          <td><button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">See More</button></td>
                        </tr>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>INV</td>
                          <td>Company B</td>
                          <td>Contact B</td>
                          <td>Title B</td>
                           <td><button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">See More</button></td>
                        </tr>
                     
                      </tbody>
                    </table>
                  </div>
            </div>
          </div>
        
      </div>

     
    </div>
  </div>
    </div>
  )
};

export default InvoiceCardM;
