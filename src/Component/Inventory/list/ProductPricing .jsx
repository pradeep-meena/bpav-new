import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductPricing = () => {
  return (
    <div className="container-fluid bg-light min-vh-100">
      {/* Header Section */}


      {/* Navigation Tabs */}
      {/* <div className="row bg-white fixed-top mt-5 border-bottom">
        <div className="col-12">
          <ul className="nav nav-tabs px-3">
            <li className="nav-item">
              <a className="nav-link" href="#">Inventory</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Variations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Settings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Online store</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">History</a>
            </li>
          </ul>
        </div>
      </div> */}

      {/* Content Section */}
      <div className="row mt-5 pt-5">
        {/* Left Content */}
        <div className="col-lg-9 col-md-8 p-4">
          <div className="row">
            <div className="col-md-4">
              <div className="card p-3">
                <h6 className="fw-bold">Price</h6>
                <img
                  src="https://i.ibb.co/5krLDd9/image.png"
                  alt="Pricing with Booqoable"
                  className="img-fluid rounded"
                />
                <a href="#" className="text-primary mt-2 d-block">Watch video</a>
                <p className="text-muted mt-2">
                  Choose a pricing method for this product
                </p>
                <a href="#" className="text-primary">Learn more</a>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card p-4 mb-4">
                <h5 className="fw-bold">Charge for this product</h5>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="chargeProduct" checked />
                  <label className="form-check-label text-muted" htmlFor="chargeProduct">
                    Disable this option if you don't charge money for this item.
                  </label>
                </div>
              </div>

              <div className="card p-4 mb-4">
                <h5 className="fw-bold">Pricing method</h5>
                <form>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="radio" name="pricingMethod" id="flatFee" defaultChecked />
                    <label className="form-check-label fw-bold" htmlFor="flatFee">
                      Flat fee
                    </label>
                    <p className="text-muted ms-4">
                      Flat rate per period (for example: $50 per day)
                    </p>
                    <div className="row g-2 ms-4">
                      <div className="col-md-6">
                        <label className="form-label">Price</label>
                        <div className="input-group">
                          <span className="input-group-text">£</span>
                          <input type="text" className="form-control" defaultValue="50.00" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Per</label>
                        <select className="form-select">
                          <option>Day</option>
                          <option>Week</option>
                          <option>Month</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-check mb-3">
                    <input className="form-check-input" type="radio" name="pricingMethod" id="fixedPrice" />
                    <label className="form-check-label fw-bold" htmlFor="fixedPrice">
                      Fixed price
                    </label>
                    <p className="text-muted ms-4">Fixed price per order (for example: $50 each)</p>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="pricingMethod" id="pricingStructure" />
                    <label className="form-check-label fw-bold" htmlFor="pricingStructure">
                      Pricing structure
                    </label>
                    <p className="text-muted ms-4">
                      Tiered pricing (for example: $50 for one day and $80 for two days)
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row align-items-center bg-white p-4 rounded shadow-sm">
        {/* Left Side - Video Section */}
        <div className="col-md-3 col-sm-12 text-center text-md-start">
          <img
            src="https://i.ibb.co/5krLDd9/image.png"
            alt="Pricing rules"
            className="img-fluid rounded"
          />
          <p className="fw-bold mt-2 mb-1">Create a pricing rule</p>
          <a href="#" className="text-primary">Watch video</a>
        </div>

        {/* Right Side - Pricing Rules */}
        <div className="col-md-9 col-sm-12">
          <h5 className="fw-bold">Advanced pricing rules</h5>
          <div className="d-flex justify-content-between align-items-center">
            <label htmlFor="ruleset" className="form-label fw-bold">Ruleset</label>
            <a href="#" className="text-primary text-decoration-none">Manage pricing rulesets</a>
          </div>
          <select id="ruleset" className="form-select">
            <option>No ruleset</option>
            <option>Seasonal Discount</option>
            <option>Bulk Order Discount</option>
          </select>
          <p className="text-muted mt-2">Rulesets are applied on top of your regular pricing.</p>
        </div>
      </div>

        </div>

        {/* Right Sidebar */}
        <div className="col-lg-3 col-md-4 p-4 bg-white border-start">
        <div className="accordion" id="sidebarAccordion">

{/* Tags Section */}
<div className="accordion-item">
  <h2 className="accordion-header" id="tagsHeading">
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#tagsCollapse">
      Tags
    </button>
  </h2>
  <div id="tagsCollapse" className="accordion-collapse collapse show">
    <div className="accordion-body">
      <p className="text-muted">No tags added yet.</p>
    </div>
  </div>
</div>

{/* Barcode Section */}
<div className="accordion-item mt-2">
  <h2 className="accordion-header" id="barcodeHeading">
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#barcodeCollapse">
      Barcode
    </button>
  </h2>
  <div id="barcodeCollapse" className="accordion-collapse collapse show">
    <div className="accordion-body">
      <button className="btn btn-outline-secondary w-100"> 
        <i className="bi bi-upc"></i> Add barcode
      </button>
    </div>
  </div>
</div>

{/* Collections Section */}
<div className="accordion-item mt-2">
  <h2 className="accordion-header" id="collectionsHeading">
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collectionsCollapse">
      Collections
    </button>
  </h2>
  <div id="collectionsCollapse" className="accordion-collapse collapse show">
    <div className="accordion-body">
      <button className="btn btn-outline-secondary w-100">Add to collections</button>
      <p className="text-muted mt-2">This product is not added to any collections yet.</p>
    </div>
  </div>
</div>

{/* Notes Section */}
<div className="accordion-item mt-2">
  <h2 className="accordion-header" id="notesHeading">
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#notesCollapse">
      Notes
    </button>
  </h2>
  <div id="notesCollapse" className="accordion-collapse collapse show">
    <div className="accordion-body">
      <textarea className="form-control" placeholder="Add a new note"></textarea>
    </div>
  </div>
</div>

</div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductPricing;
