import React from "react";
// import "../App";

const TicketSummary = () => {
  return (
    <div className="ticket-summary-container">
         <h3>Ticket Summary</h3>
      {/* Ticket Summary Section */}
      <div className="ticket-summary-card">
       
        <div className="ticket-info" style={{textAlign:'start'}}>
          <p><strong>Ticket #377990113</strong></p>
          <p>Generated on: 22 Dec 2024</p>
          <p>
            The ticket from <strong>Benjamin Price</strong>, Managing Director of
            BPAV Technology Group Ltd, Contain a Simple message stating "test". there are no additional detail or context provided and no calls have been recorded for this ticket .It appears to be a palceholder or test entry rather a substantive inquiry.
          </p>
          <button className="add-contact-btn">+ Ask a question</button>
        </div>
      </div>

      {/* About This Ticket Section */}
      <div className="about-ticket" style={{textAlign:'start'}}>
        <h3>About this ticket</h3>
        <div className="ticket-details">
          <p>
            <strong>Ticket description:</strong> Hi there! The New Year session is
            such an exciting time for online businesses with shoppers actively.
          </p>
          <p><strong>See more</strong></p>
          <p><strong>Priority:</strong> Medium</p>
          <p><strong>Category:</strong> General</p>
          <p><strong>Create date:</strong> 22/12/2024</p>
          <p><strong>Source:</strong> Email</p>
          <p><strong>Ticket ID:</strong> 54262587628 <button>Detail</button></p>
          <p><strong>Pipeline:</strong> Support Pipeline</p>
          <p>Business units</p>
        </div>
      </div>

      {/* Other Sections */}
      <div className="additional-sections">
  <div className="section">
    <div className="section-header">
      <h4>Companies (0)</h4>
      <button>+ Add</button>
    </div>
    <p>See the businesses or organizations associated with this record.</p>
  </div>
  <div className="section">
    <div className="section-header">
      <h4>Deals (0)</h4>
      <button>+ Add</button>
    </div>
    <p>Track the revenue opportunities associated with this record.</p>
  </div>
  <div className="section">
    <div className="section-header">
      <h4>Tickets (0)</h4>
      <button>+ Add</button>
    </div>
    <p>Track the customer requests associated with this record.</p>
  </div>
  <div className="section">
    <div className="section-header">
      <h4>Tasks (0)</h4>
      <button>New</button>
      <button>Create task</button>
    </div>
    <p>See tasks associated with this record.</p>
  </div>
  <div className="section">
    <div className="section-header">
      <h4>Attachments</h4>
      <button>+ Add</button>
    </div>
    <p>See files attached to your activities or uploaded to this record.</p>
  </div>
</div>

    </div>
  );
};

export default TicketSummary;
