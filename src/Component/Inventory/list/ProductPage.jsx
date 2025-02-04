import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductPage = () => {
  return (
    <div className="container-fluid p-4 bg-light" style={{ marginTop: "50px" }}>
      

      <div className="row">
        {/* Left Content Section */}
        <div className="col-md-9">
    

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title fw-bold">Variations</h5>
              <p className="text-muted">
                Enable variations if this product comes in different options, like sizes or colors.
              </p>
              <button className="btn btn-outline-primary">Enable variations</button>
            </div>
          </div>
        </div>

        {/* Right Sidebar Section */}
        <div className="col-md-3">
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

export default ProductPage;
