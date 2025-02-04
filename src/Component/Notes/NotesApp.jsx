import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const NotesApp = () => {
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [currentNote, setCurrentNote] = useState(null); // Currently selected note
  const [noteContent, setNoteContent] = useState(""); // Editable content of the note

  // Sample Data: Grouped Notes by Date
  const notesData = [
    {
      date: "Sunday, August 18",
      notes: [
        { title: "Untitled note", date: "Aug 18" },
        { title: "Untitled note", date: "Aug 18" },
        { title: "#", date: "Aug 18" },
        {
          title: "Add a meeting title - 18 August 2024",
          details: "Attendees:",
          date: "Aug 18",
        },
        { title: "Untitled Note", date: "Aug 18" },
      ],
    },
    {
      date: "Saturday, February 24",
      notes: [
        {
          title: "Todoist complete task.",
          details: "Task ID: 7510800651",
          date: "Feb 24",
        },
        { title: "Testing testing 123 testing testing 123", date: "Feb 24" },
        { title: "Untitled Note", date: "Feb 24" },
        { title: "this is a test note,", date: "Feb 24" },
      ],
    },
    {
      date: "Friday, February 23",
      notes: [
        { title: "/", date: "Feb 23" },
        { title: "Untitled Note", date: "Feb 23" },
      ],
    },
  ];

  // Open modal and set the selected note
  const handleOpenModal = (note) => {
    setCurrentNote(note); // Set the current note data
    setNoteContent(note.title || ""); // Pre-fill note content
    setShowModal(true); // Show the modal
  };

  // Open modal for a new blank note
  const handleNewNote = () => {
    const newNote = { title: "", details: "", date: "" }; // Blank note structure
    handleOpenModal(newNote); // Open modal with the new note
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentNote(null);
    setNoteContent("");
  };

  // Save note changes
  const handleSaveNote = () => {
    alert(`Saved note: ${noteContent}`);
    handleCloseModal();
  };

  return (  
    <div className="page-wrapper">
    <div
      className="container-fluid bg-light text-dark py-4"
      style={{ minHeight: "100vh" }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">Everything</h4>
        <div>
          <button
            className="btn btn-outline-dark me-3"
            onClick={handleNewNote} // Open new blank note
          >
            New Note
          </button>
          <button className="btn btn-outline-dark me-3">Added by me</button>
          <button className="btn btn-outline-dark">Shared with me</button>
        </div>
      </div>

      {/* Notes List */}
      {notesData.map((group, index) => (
        <div key={index} className="mb-5">
          {/* Date Header */}
          <h5 className="text-muted mb-3">{group.date}</h5>

          {/* Notes */}
          {group.notes.map((note, idx) => (
            <div
              key={idx}
              className="d-flex justify-content-between align-items-center py-2 px-3 bg-light border rounded mb-2"
              onClick={() => handleOpenModal(note)} // Open modal on click
              style={{ cursor: "pointer", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
            >
              <div>
                <h6 className="mb-1 text-dark">{note.title}</h6>
                {note.details && <p className="mb-0 text-muted">{note.details}</p>}
              </div>
              <span className="text-muted">{note.date}</span>
            </div>
          ))}
        </div>
      ))}

      {/* Modal for Add/Edit Note */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{currentNote?.title || "New Note"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            className="form-control"
            rows="8"
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            placeholder="Write your note here..."
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveNote}>
            Save Note
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
};

export default NotesApp;
