import React, { useState } from "react";

const QuoteModal = ({ closeModal }) => {
  const [copied, setCopied] = useState(false);

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modal: {
      width: "400px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "20px",
      textAlign: "center",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
      zIndex: 1001,
    },
    icon: {
      marginBottom: "20px",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    description: {
      fontSize: "14px",
      color: "#555",
      marginBottom: "20px",
    },
    inputContainer: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
      gap: "10px",
    },
    input: {
      flex: 1,
      padding: "10px",
      fontSize: "14px",
      border: "1px solid #e0e0e0",
      borderRadius: "4px",
    },
    copyButton: {
      padding: "10px 16px",
      fontSize: "14px",
      color: "#fff",
      backgroundColor: "#5db9cb",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    buttonGroup: {
      display: "flex",
      justifyContent: "space-between",
      gap: "10px",
    },
    primaryButton: {
      padding: "10px 16px",
      fontSize: "14px",
      backgroundColor: "#5db9cb",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      flex: 1,
    },
    secondaryButton: {
      padding: "10px 16px",
      fontSize: "14px",
      backgroundColor: "#f0f0f0",
      color: "#555",
      border: "1px solid #ddd",
      borderRadius: "4px",
      cursor: "pointer",
      flex: 1,
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("https://email.bpay.global/ZyGeRcXZY8");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {/* Icon */}
        <div style={styles.icon}>
          <img
            src="https://via.placeholder.com/100"
            alt="Quote Icon"
            style={{ width: "50px", height: "50px" }}
          />
        </div>

        {/* Title */}
        <div style={styles.title}>A web page for your quote has been created</div>

        {/* Description */}
        <div style={styles.description}>
          Copy the web page link below to share with prospects or choose to write an email with the quote included. 
          You can access any of your active quotes from the deal page.
        </div>

        {/* Input and Copy Button */}
        <div style={styles.inputContainer}>
          <input
            type="text"
            value="https://email.bpay.global/ZyGeRcXZY8"
            readOnly
            style={styles.input}
          />
          <button onClick={handleCopy} style={styles.copyButton}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Action Buttons */}
        <div style={styles.buttonGroup}>
          <button style={styles.primaryButton}>Write email with quote</button>
          <button  onClick={closeModal} style={styles.secondaryButton} >Close</button>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
