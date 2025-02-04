import React, { useState } from "react";
import QuoteModal from "./QuoteModal";

const CreateQouteStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const steps = [
    "Deal",
    "Buyer Info",
    "Your Info",
    "Line Items",
    "Signature & Payment",
    "Template & Details",
    "Review",
  ];

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      backgroundColor: "#f7f8fa",
      minHeight: "100vh",
      maxHeight: "100vh",
    },
    stepperContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "relative",
      marginBottom: "40px",
    },
    stepWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flex: 1,
      position: "relative",
    },
    stepCircle: {
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid #e0e0e0",
      backgroundColor: "#fff",
      color: "#999",
      zIndex: 1,
    },
    stepCircleCompleted: {
      border: "2px solid #0d6efd",
      backgroundColor: "#0d6efd",
      color: "#fff",
    },
    stepCircleActive: {
      border: "2px solid #0d6efd",
      backgroundColor: "#fff",
      color: "#0d6efd",
    },
    stepLabel: {
      fontSize: "12px",
      color: "#0d6efd",
      marginTop: "8px",
    },
    stepLabelActive: {
      color: "#0d6efd",
    },
    lineContainer: {
      position: "absolute",
      top: "12px",
      left: "0",
      right: "0",
      height: "2px",
      backgroundColor: "#e0e0e0",
      zIndex: 0,
    },
    lineCompleted: {
        position: "absolute",
        top: "12px",
        left: "0",
        right: "0",
        height: "2px",
      backgroundColor: "#0d6efd",
      position: "absolute",
      zIndex: 0,
    },
    contentContainer: {
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "40px",
    },
    footerText: {
      fontSize: "12px",
      color: "#666",
    },
     select: {
        width: "300px",
        padding: "10px",
        fontSize: "14px",
        color: "#333",
        border: "1px solid #d0d4da",
        borderRadius: "6px",
        backgroundColor: "#fff",
      },
  
      
      info: {
        fontSize: "12px",
        color: "#666",
        marginBottom: "10px",
      },
      name: {
        fontSize: "14px",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "5px",
      },
      details: {
        fontSize: "12px",
        color: "#666",
        lineHeight: "1.5",
      },
      heading: {
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "10px",
      },
      description: {
        fontSize: "14px",
        color: "#666",
        marginBottom: "20px",
      },
      card: {
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "20px",
        border: "1px solid #e0e0e0",
        marginBottom: "20px",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
      },
      cardHeading: {
        fontSize: "16px",
        fontWeight: "bold",
        marginBottom: "10px",
      },
      buttonsContainer: {
        display: "flex",
        gap: "10px",
        marginTop: "20px",
      },
      button: {
        padding: "10px 20px",
        fontSize: "14px",
        borderRadius: "6px",
        border: "1px solid #e0e0e0",
        backgroundColor: "#0d6efd",
        cursor: "pointer",
      },
      primaryButton: {
        backgroundColor: "#5db9cb",
        color: "#fff",
      },
      secondaryButton: {
        backgroundColor: "#fff",
        color: "#5db9cb",
      },
      summarySection: {
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#fff",
      },
      summaryHeading: {
        fontSize: "16px",
        fontWeight: "bold",
        marginBottom: "10px",
      },
      summaryRow: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
        fontSize: "14px",
        color: "#333",
      },
      summaryInput: {
        flex: 1,
        border: "none",
        backgroundColor: "transparent",
        borderBottom: "1px solid #e0e0e0",
        textAlign: "right",
        fontSize: "14px",
        color: "#333",
      },
      formGroup: {
        marginBottom: "20px",
      },
      label: {
        fontSize: "14px",
        fontWeight: "bold",
        display: "block",
        marginBottom: "10px",
        color: "#666",
      },
      input: {
        width: "100%",
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #e0e0e0",
        fontSize: "14px",
      },
     
      
  };

  // Step contents
  const stepContents = [
    <div >
        <div className="container py-4">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-6">
          <h3 className="fw-bold mb-3">Deal</h3>
          <p className="text-muted">
            Associate with a deal. Once a deal is associated with a quote in this
            wizard, any changes you make will affect the properties of the
            selected deal.
          </p>
          <select className="form-select" style={{ maxWidth: "300px" }}>
            <option>Choose or create a deal</option>
            <option>Deal 1</option>
            <option>Deal 2</option>
          </select>
        </div>

        {/* Right Section (Preview) */}
        <div className="col-md-6">
          <div className="bg-light p-4 rounded border">
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-primary fw-bold fs-4">BPAV</span>
              <div className="text-end">
                <p className="text-muted mb-0">Issued: 25 December 2024</p>
                <p className="text-muted">Expires: 24 January 2025</p>
              </div>
            </div>

            <h4 className="mt-3 text-dark">NEW QUOTE</h4>
            <p className="text-muted">#20241225-231724666</p>

            <div className="bg-white p-3 rounded border mb-3">
              <h5 className="fw-bold">BPAV Technology Group Ltd</h5>
              <p className="mb-1">
                Ground Floor, Unit C1
                <br />
                Prisma Park, Berrington Way
                <br />
                Basingstoke, Hampshire RG24 8GT
                <br />
                United Kingdom
              </p>
              <p className="mb-0">
                Email: sales@bpav.global
                <br />
                Phone: +44 333 344 3201
                <br />
                VAT No: 423338514
              </p>
            </div>

            <div className="bg-white p-3 rounded border">
              <p className="mb-0">
                BPAV Technology Group Ltd is a leading independent multidisciplinary
                technology consultancy specializing in the design and implementation
                of commercial audio-visual, performance audio, and automation systems.
              </p>
            </div>

            <div className="mt-3">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/samplevideo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-center">
        <small className="text-muted">Last saved on 25 December 2024</small>
      </div>
    </div>

    </div>,
    <div>
     <div className="container py-4">
      <div className="row">
        {/* Left Section - Buyer Information */}
        <div className="col-md-6">
          <h3 className="fw-bold mb-3">Buyer Information</h3>
          <p className="text-muted">
            Select the buyer contact information that you would like to appear in the quote.
          </p>

          {/* Contact Section */}
          <h5 className="fw-bold mb-3">Included in quote</h5>

          <div className="card p-3 mb-3">
            <div className="d-flex align-items-center">
              <input type="checkbox" className="form-check-input me-3" checked />
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center"
                  style={{ width: "40px", height: "40px", fontWeight: "bold" }}
                >
                  T
                </div>
                <div className="ms-3">
                  <h6 className="mb-0">Test Unknown</h6>
                  <p className="text-muted mb-0">No title</p>
                  <p className="text-muted mb-0">test@test.com</p>
                  <p className="text-muted mb-0">
                    123123123123123123123123123123123123123123
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Add Another Contact */}
          <a href="#" className="text-primary">
            + Add another contact
          </a>

          {/* Company Section */}
          <div className="mt-4">
            <div className="card p-3">
              <div className="d-flex align-items-center">
                <input type="checkbox" className="form-check-input me-3" checked />
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i className="bi bi-building"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="mb-0">Test</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Quote Preview */}
        <div className="col-md-6">
          <div className="bg-light p-4 rounded border">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="text-primary fw-bold">BPAV</h2>
              <div>
                <p className="text-muted mb-0">
                  Issued: 25 December 2024
                  <br />
                  Expires: 24 January 2025
                </p>
              </div>
            </div>
            <h4 className="fw-bold">TEST</h4>
            <p className="text-muted">#20241225-231724666</p>

            {/* Company Info Section */}
            <div className="bg-white p-3 rounded border mb-3">
              <h5 className="fw-bold">BPAV Technology Group Ltd</h5>
              <p className="mb-0">
                Ground Floor, Unit C1
                <br />
                Prisma Park, Berrington Way
                <br />
                Basingstoke, Hampshire RG24 8GT
                <br />
                United Kingdom
              </p>
              <p className="mt-2 mb-0">
                Email: sales@bpav.global
                <br />
                Phone: +44 333 344 3201
                <br />
                VAT No: 423338514
              </p>
            </div>

            {/* Description Section */}
            <div className="bg-white p-3 rounded border">
              <p className="mb-0">
                BPAV Technology Group Ltd is a leading independent multidisciplinary technology
                consultancy specializing in the design and implementation of commercial audio-visual,
                performance audio, and automation systems.
              </p>
            </div>

            {/* YouTube Embed */}
            <div className="mt-3">
              <iframe
                className="w-100"
                height="200"
                src="https://www.youtube.com/embed/samplevideo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-center">
        <small className="text-muted">Last saved on 25 December 2024</small>
      </div>
    </div>

    </div>,
    <div>
     <div className="container py-4">
      <div className="row">
        {/* Left Section - Your Information */}
        <div className="col-md-6">
          <h3 className="fw-bold mb-3">Your Information</h3>
          <p className="text-muted">
            Check the information about you and your company that will appear on the quote.
          </p>

          {/* Quote Sender Section */}
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="rounded-circle me-3"
                style={{ width: "40px", height: "40px" }}
              />
              <div>
                <h6 className="fw-bold mb-0">Benjamin Price</h6>
                <p className="text-muted mb-0">No title</p>
                <p className="text-muted mb-0">ben.price@bpav.global</p>
                <p className="text-muted mb-0">+447309439802</p>
              </div>
            </div>
          </div>

          {/* Your Company Section */}
          <div className="card">
            <div className="card-body">
              <h6 className="fw-bold mb-0">BPAV Technology Group Ltd</h6>
              <p className="text-muted mb-0">
                Ground Floor, Unit C1, Prisma Park, Berrington Way,
                <br />
                Basingstoke, Hampshire RG24 8GT,
                <br />
                United Kingdom
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Quote Preview */}
        <div className="col-md-6">
          <div className="bg-light p-4 rounded border">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="text-primary fw-bold">BPAV</h2>
              <div>
                <p className="text-muted mb-0">
                  Issued: 25 December 2024
                  <br />
                  Expires: 24 January 2025
                </p>
              </div>
            </div>
            <h4 className="fw-bold">TEST</h4>
            <p className="text-muted">#20241225-231724666</p>

            {/* Company Info Section */}
            <div className="bg-white p-3 rounded border mb-3">
              <h5 className="fw-bold">BPAV Technology Group Ltd</h5>
              <p className="mb-0">
                Ground Floor, Unit C1
                <br />
                Prisma Park, Berrington Way
                <br />
                Basingstoke, Hampshire RG24 8GT
                <br />
                United Kingdom
              </p>
              <p className="mt-2 mb-0">
                Email: sales@bpav.global
                <br />
                Phone: +44 333 344 3201
                <br />
                VAT No: 423338514
              </p>
            </div>

            {/* Description Section */}
            <div className="bg-white p-3 rounded border">
              <p className="mb-0">
                BPAV Technology Group Ltd is a leading independent multidisciplinary technology
                consultancy specializing in the design and implementation of commercial audio-visual,
                performance audio, and automation systems.
              </p>
            </div>

            {/* YouTube Embed */}
            <div className="mt-3">
              <iframe
                className="w-100"
                height="200"
                src="https://www.youtube.com/embed/samplevideo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

     
    </div>
    
    </div>,
    <div>
      <h2 style={styles.heading}>Review Line Items</h2>
      <p style={styles.description}>
        Review the line items you want shown in your quote.
      </p>

      {/* Add Line Items Section */}
      <div style={styles.card}>
        <h3 style={styles.cardHeading}>Add line items to your quote</h3>
        <p style={{ fontSize: "14px", color: "#5db9cb", cursor: "pointer" }}>
          Learn more about the product library
        </p>
        <div style={styles.buttonsContainer}>
          <button style={{ ...styles.button, ...styles.primaryButton }}>
            Select from product library
          </button>
          <button style={{ ...styles.button, ...styles.secondaryButton }}>
            Create custom line item
          </button>
        </div>
      </div>

      {/* Summary Section */}
      <div style={styles.summarySection}>
        <h3 style={styles.summaryHeading}>Summary</h3>
        <div style={styles.summaryRow}>
          <span>Subtotal</span>
          <input type="text" style={styles.summaryInput} placeholder="--" />
        </div>
        <div style={styles.summaryRow}>
          <span>
            <a
              href="#"
              style={{ color: "#5db9cb", fontSize: "12px", textDecoration: "none" }}
            >
              + Add discount, fee, or tax
            </a>
          </span>
        </div>
        <div style={styles.summaryRow}>
          <span>Total contract value</span>
          <input type="text" style={styles.summaryInput} placeholder="--" />
        </div>

        {/* Checkbox */}
        <div style={styles.checkboxContainer}>
          <input type="checkbox" style={styles.checkbox} />
          <span>
            Display total contract value on the published quote. (If no terms are set, the default
            is an annual value.)
          </span>
        </div>
      </div>

    </div>,
    <div>
      <div className="container py-4">
      <div className="row">
        {/* Left Section - Signature & Payment Options */}
        <div className="col-md-6">
          <h3 className="fw-bold mb-3">Signature</h3>

          {/* Signature Options */}
          <div className="mb-4">
            <h5 className="fw-bold">Signature options</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="signatureOptions"
                id="noSignature"
              />
              <label className="form-check-label" htmlFor="noSignature">
                No signature
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="signatureOptions"
                id="writtenSignature"
              />
              <label className="form-check-label" htmlFor="writtenSignature">
                Include space for a written signature
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="signatureOptions"
                id="eSignature"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="eSignature">
                Use e-signature
              </label>
            </div>
          </div>

          {/* Required Signatures */}
          <div className="mb-4">
            <h5 className="fw-bold">Required signatures</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="requiredSignature"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="requiredSignature">
                test@test.com
              </label>
            </div>
            <div className="mt-3">
              <label htmlFor="countersigners" className="form-label">
                Countersigners
              </label>
              <select
                className="form-select"
                id="countersigners"
                aria-label="Select countersigners"
              >
                <option value="">Search</option>
                <option value="1">Signer 1</option>
                <option value="2">Signer 2</option>
              </select>
            </div>
          </div>

          {/* Payment Collection */}
          <h3 className="fw-bold mb-3">Payment Collection</h3>
          <div className="d-flex align-items-center mb-3">
            <span className="fw-bold me-3">Accept online payments</span>
            <button className="btn btn-primary">ON</button>
          </div>
          <p className="text-muted">
            Include a checkout link on your quotes to collect credit, debit, and
            bank debits from your customers.
          </p>
          <div className="d-flex gap-2 my-3">
            <img
              src="https://via.placeholder.com/40x25"
              alt="Visa"
              className="rounded"
            />
            <img
              src="https://via.placeholder.com/40x25"
              alt="MasterCard"
              className="rounded"
            />
            <img
              src="https://via.placeholder.com/40x25"
              alt="Amex"
              className="rounded"
            />
            <img
              src="https://via.placeholder.com/40x25"
              alt="ACH"
              className="rounded"
            />
          </div>

          {/* Accepted Payments */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="creditDebit"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="creditDebit">
              Credit or debit card
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="bacs"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="bacs">
              BACS (direct debit)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="billingAddress"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="billingAddress">
              Collect billing address for credit card purchases
            </label>
          </div>
        </div>

        {/* Right Section - Quote Preview */}
        <div className="col-md-6">
          <div className="bg-light p-4 rounded border">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="text-primary fw-bold">BPAV</h2>
              <div>
                <p className="text-muted mb-0">
                  Issued: 25 December 2024
                  <br />
                  Expires: 24 January 2025
                </p>
              </div>
            </div>
            <h4 className="fw-bold">TEST</h4>
            <p className="text-muted">#20241225-231724666</p>

            {/* Company Info Section */}
            <div className="bg-white p-3 rounded border mb-3">
              <h5 className="fw-bold">BPAV Technology Group Ltd</h5>
              <p className="mb-0">
                Ground Floor, Unit C1
                <br />
                Prisma Park, Berrington Way
                <br />
                Basingstoke, Hampshire RG24 8GT
                <br />
                United Kingdom
              </p>
              <p className="mt-2 mb-0">
                Email: sales@bpav.global
                <br />
                Phone: +44 333 344 3201
                <br />
                VAT No: 423338514
              </p>
            </div>

            {/* Description Section */}
            <div className="bg-white p-3 rounded border">
              <p className="mb-0">
                BPAV Technology Group Ltd is a leading independent multidisciplinary technology
                consultancy specializing in the design and implementation of commercial audio-visual,
                performance audio, and automation systems.
              </p>
            </div>

            {/* YouTube Embed */}
            <div className="mt-3">
              <iframe
                className="w-100"
                height="200"
                src="https://www.youtube.com/embed/samplevideo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

     
    </div>

    </div>,
    <div>
      <div className="container py-4">
      <div className="row">
        {/* Left Section - Form */}
        <div className="col-md-6">
          <h3 className="fw-bold mb-3">Template & Details</h3>

          {/* Quote Template */}
          <div className="mb-3">
            <label htmlFor="quoteTemplate" className="form-label fw-bold">
              Quote template *
            </label>
            <select id="quoteTemplate" className="form-select">
              <option>Quote Master Main</option>
              <option>Template 1</option>
              <option>Template 2</option>
            </select>
            <a href="#manage" className="text-primary mt-2 d-block">
              Manage quote templates
            </a>
          </div>

          {/* Quote Name */}
          <div className="mb-3">
            <label htmlFor="quoteName" className="form-label fw-bold">
              Quote name *
            </label>
            <input
              type="text"
              id="quoteName"
              className="form-control"
              placeholder="Enter quote name"
            />
          </div>

          {/* Domain and Content Slug */}
          <div className="mb-3">
            <label className="form-label fw-bold">Domain *</label>
            <div className="d-flex gap-2">
              <input
                type="text"
                value="https://"
                className="form-control"
                disabled
              />
              <input
                type="text"
                value="email.bpav.global"
                className="form-control"
              />
              <input
                type="text"
                value="ZyGeRcxZY8"
                className="form-control"
              />
            </div>
            <p className="text-muted mt-2">
              Quote URL:{" "}
              <a
                href="https://email.bpav.global/ZyGeRcxZY8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                https://email.bpav.global/ZyGeRcxZY8
              </a>
            </p>
          </div>

          {/* Expiration Date */}
          <div className="mb-3">
            <label htmlFor="expirationDate" className="form-label fw-bold">
              Expiration date *
            </label>
            <select id="expirationDate" className="form-select">
              <option>In 30 days (24 January 2025)</option>
              <option>In 60 days</option>
              <option>In 90 days</option>
            </select>
          </div>

          {/* Quote Language and Locale */}
          <div className="row g-2">
            <div className="col-md-6">
              <label htmlFor="quoteLanguage" className="form-label fw-bold">
                Quote language *
              </label>
              <select id="quoteLanguage" className="form-select">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="locale" className="form-label fw-bold">
                Locale *
              </label>
              <select id="locale" className="form-select">
                <option>English - United Kingdom</option>
                <option>English - United States</option>
                <option>French - France</option>
              </select>
            </div>
          </div>

          {/* Comments to Buyer */}
          <div className="mt-3">
            <label htmlFor="comments" className="form-label fw-bold">
              Comments to buyer
            </label>
            <textarea
              id="comments"
              className="form-control"
              rows="3"
              placeholder="Enter any extra notes that you would like to appear in this quote."
            ></textarea>
            <div className="d-flex gap-2 mt-2">
              <button className="btn btn-outline-secondary btn-sm">B</button>
              <button className="btn btn-outline-secondary btn-sm">I</button>
              <button className="btn btn-outline-secondary btn-sm">U</button>
              <button className="btn btn-outline-secondary btn-sm">More</button>
            </div>
          </div>

          {/* Purchase Terms */}
          <div className="mt-3">
            <label htmlFor="purchaseTerms" className="form-label fw-bold">
              Purchase terms
            </label>
            <textarea
              id="purchaseTerms"
              className="form-control"
              rows="3"
              placeholder="Enter any relevant information about pricing, purchasing terms, and/or global agreements."
            ></textarea>
          </div>
        </div>

        {/* Right Section - Quote Preview */}
        <div className="col-md-6">
          <div className="bg-light p-4 rounded border">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="text-primary fw-bold">BPAV</h2>
              <div>
                <p className="text-muted mb-0">
                  Issued: 25 December 2024
                  <br />
                  Expires: 24 January 2025
                </p>
              </div>
            </div>
            <h4 className="fw-bold">TEST</h4>
            <p className="text-muted">#20241225-231724666</p>

            {/* Company Info Section */}
            <div className="bg-white p-3 rounded border mb-3">
              <h5 className="fw-bold">BPAV Technology Group Ltd</h5>
              <p className="mb-0">
                Ground Floor, Unit C1
                <br />
                Prisma Park, Berrington Way
                <br />
                Basingstoke, Hampshire RG24 8GT
                <br />
                United Kingdom
              </p>
              <p className="mt-2 mb-0">
                Email: sales@bpav.global
                <br />
                Phone: +44 333 344 3201
                <br />
                VAT No: 423338514
              </p>
            </div>

            {/* Description Section */}
            <div className="bg-white p-3 rounded border">
              <p className="mb-0">
                BPAV Technology Group Ltd is a leading independent multidisciplinary technology
                consultancy specializing in the design and implementation of commercial audio-visual,
                performance audio, and automation systems.
              </p>
            </div>

            {/* YouTube Embed */}
            <div className="mt-3">
              <iframe
                className="w-100"
                height="200"
                src="https://www.youtube.com/embed/samplevideo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      
    </div>

    </div>,
    <div>
      <div className="container py-4">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-12">
          <div className="bg-light p-4 rounded border">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="text-primary fw-bold">BPAV</h2>
              <div>
                <p className="text-muted mb-0">
                  Issued: 25 December 2024
                  <br />
                  Expires: 24 January 2025
                </p>
              </div>
            </div>

            <h4 className="fw-bold">TEST</h4>
            <p className="text-muted">#20241225-231724666</p>

            {/* Quote Content */}
            <div className="row mt-4">
              {/* Left Section */}
              <div className="col-md-6">
                <h5 className="fw-bold">BPAV Technology Group Ltd</h5>
                <p className="mb-0">
                  Ground Floor, Unit C1
                  <br />
                  Prisma Park, Berrington Way
                  <br />
                  Basingstoke, Hampshire RG24 8GT
                  <br />
                  United Kingdom
                </p>
                <p className="mt-2 mb-0">
                  Email: sales@bpav.global
                  <br />
                  Phone (UK): +44 333 344 3201
                  <br />
                  Phone (USA): +1 (347) 352-9667
                  <br />
                  Website: www.bpav.co.uk
                  <br />
                  Reg No: 14304458
                  <br />
                  VAT No: 423338514
                </p>
              </div>

              {/* Right Section */}
              <div className="col-md-6 text-end">
                <h6 className="fw-bold">Benjamin Price</h6>
                <p>ben.price@bpav.global</p>
                <h6 className="fw-bold">Prepared for</h6>
                <p>
                  Test Unknown
                  <br />
                  test@test.com
                  <br />
                  123123123123123123123123123123
                </p>
              </div>
            </div>

            {/* Footer Section */}
            <div className="bg-white p-3 rounded border mt-4">
              <p className="mb-0 text-center">
                BPAV Technology Group Ltd is a leading independent multidisciplinary technology
                consultancy specializing in the design and implementation of commercial audio-visual,
                performance audio, and automation systems.
              </p>
            </div>

            {/* Branding Section */}
            <div className="text-center mt-4">
              <p className="text-muted">
                We innovate, create, listen, and advise.
              </p>
              <img
                src="https://via.placeholder.com/200x50"
                alt="Brand Logos"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

     
    </div>


    </div>,
  ];

  return (
    <div className="page-wrapper">
    <div style={styles.container}>
      {/* Stepper Header */}
      <div style={styles.stepperContainer}>
        <div style={styles.lineContainer}></div>
        <div
          style={{
            ...styles.lineCompleted,
            width: `${(currentStep / (steps.length - 1)) * 100}%`,
          }}
        ></div>
        {steps.map((step, index) => (
          <div key={index} style={styles.stepWrapper}>
            <div
              style={{
                ...styles.stepCircle,
                ...(index < currentStep
                  ? styles.stepCircleCompleted
                  : index === currentStep
                  ? styles.stepCircleActive
                  : {}),
              }}
            >
              {index + 1}
            </div>
            <div
              style={{
                ...styles.stepLabel,
                ...(index === currentStep ? styles.stepLabelActive : {}),
              }}
            >
              {step}
            </div>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div style={styles.contentContainer}>{stepContents[currentStep]}</div>

      {/* Footer Navigation */}
      <div style={styles.footer}>
        <button
          style={{ ...styles.button, ...styles.backButton }}
          disabled={currentStep === 0}
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
        >
          Back
        </button>
        <p style={styles.footerText}>Step {currentStep + 1} of {steps.length}</p>
        <button
          style={{ ...styles.button, ...styles.nextButton }}
          onClick={() =>
            {
              if (currentStep === steps.length - 1) {
                setIsModalOpen(true); // Open the modal when Finish is clicked
              } else {
                setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
              }
            }
          }
        >
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
          
        </button>
      </div>
    </div>
    {isModalOpen && <QuoteModal />}
    </div>  
  );
};

export default CreateQouteStepper;
