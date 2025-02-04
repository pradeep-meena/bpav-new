import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductSettings = () => {
  return (
    <div className="container-fluid bg-light min-vh-100">
      {/* Main Content Section */}
      <div className="row">
        {/* Left Section */}
        <div className="col-lg-9 p-4">
          {/* General Information */}
          <div className="card p-4 mb-4">
            <h5 className="fw-bold">General Information</h5>
            <div className="d-flex gap-3 flex-wrap align-items-center">
              <div>
                <iframe
                  title="Product settings video"
                  src="https://via.placeholder.com/150"
                  width="150"
                  height="84"
                  style={{ borderRadius: "8px" }}
                ></iframe>
              </div>
              <div className="flex-grow-1">
                <input type="text" className="form-control mb-3" value="Cp3" readOnly />
                <input type="text" className="form-control mb-3" value="CP3" readOnly />
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="You can list accessories here for example."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Image Upload Section */}
          <div className="card p-4 mb-4">
            <h5 className="fw-bold">Images</h5>
            <div className="d-flex gap-3 flex-wrap">
              <img
                src="https://via.placeholder.com/100"
                alt="Product"
                className="rounded border"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="border p-3 text-center rounded w-100" style={{ borderStyle: "dashed" }}>
                Upload or drop files
              </div>
              <div className="border p-3 text-center rounded w-100" style={{ borderStyle: "dashed" }}>
                Find images online
              </div>
            </div>
          </div>

          {/* Availability Settings */}
          <div className="card p-4">
            <h5 className="fw-bold">Availability Settings</h5>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="allowShortage" />
              <label className="form-check-label" htmlFor="allowShortage">
                Allow shortage
              </label>
            </div>
            <p className="text-muted mt-2">
              Reserve orders for customers, even when items are temporarily unavailable.
            </p>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="col-lg-3 p-4 bg-white border-start">
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

export default ProductSettings;
