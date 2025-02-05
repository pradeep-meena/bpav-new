import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const HRDashboard = () => {
  const calendarRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [calendarView, setCalendarView] = useState(
    window.innerWidth < 768 ? "timeGridDay" : "dayGridMonth"
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setCalendarView(window.innerWidth < 768 ? "timeGridDay" : "dayGridMonth");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleEventClick = (e) => {
    alert(`Event: ${e.event.title}`);
  };

  const events = [
    {
      title: "Meeting with Team Dev",
      backgroundColor: "#FFEDF6",
      textColor: "#FD3995",
      start: new Date(Date.now() - 168000000).toISOString().slice(0, 10),
      end: new Date(Date.now() - 168000000).toISOString().slice(0, 10),
    },
    {
      title: "UI/UX Team...",
      backgroundColor: "#EDF2F4",
      textColor: "#0C4B5E",
      start: new Date(Date.now() + 338000000).toISOString().slice(0, 10),
    },
    {
      title: "Data Update...",
      backgroundColor: "#F7EEF9",
      textColor: "#AB47BC",
      start: new Date(Date.now() - 338000000).toISOString().slice(0, 10),
    },
    {
      title: "Meeting with Team Dev",
      backgroundColor: "#E8E9EA",
      textColor: "#212529",
      start: new Date(Date.now() + 68000000).toISOString().slice(0, 10),
    },
    {
      title: "Design System",
      backgroundColor: "#FAE7E7",
      textColor: "#E70D0D",
      start: new Date(Date.now() + 88000000).toISOString().slice(0, 10),
    },
  ];

  return (
    <div className="page-wrapper">
      <section>
        <div className="container mt-4">
          <div className="dashboard">
            <h3>Dashboard</h3>
            <nav>
              <a href="#" className="text-decoration-none" style={{color: "#01acb4"}}>
                Dashboard
              </a>{" "}
              &gt; HR
            </nav>
            <div className="card p-4 mt-3 shadow-sm border-0">
              <h5>Today's Not Clock In</h5>
              <hr />
              <div className="not-clocked-in mx-4">
                <div className="img-hr-box">
                  <img
                    src="https://i.ibb.co/ZpjJwGJ8/user-11.jpg"
                    alt="User"
                    className="profile-img"
                  />
                  <span>Protiong</span>
                </div>
                <div className="img-hr-box">
                  <img
                    src="https://i.ibb.co/ZpjJwGJ8/user-11.jpg55px "
                    className="profile-img"
                  />
                  <span>Cooper Decker</span>
                </div>
                <div className="img-hr-box">
                  <img
                    src="https://i.ibb.co/ZpjJwGJ8/user-11.jpg55px"
                    className="profile-img"
                  />
                  <span>Brianna Copeland</span>
                </div>
                <div className="img-hr-box">
                  <img
                    src="https://i.ibb.co/ZpjJwGJ8/user-11.jpg55px"
                    className="profile-img"
                  />
                  <span>Kjh donald</span>
                </div>
                <div className="img-hr-box">
                  <img
                    src="https://i.ibb.co/ZpjJwGJ8/user-11.jpg55px"
                    className="profile-img"
                  />
                  <span>Emma Hopper</span>
                </div>
                <div className="img-hr-box">
                  <img
                    src="https://i.ibb.co/ZpjJwGJ8/user-11.jpg55px"
                    className="profile-img"
                  />
                  <span>Tara Hicks</span>
                </div>
                <div className="img-hr-box">
                  <img
                    src="https://i.ibb.co/ZpjJwGJ8/user-11.jpg55px"
                    className="profile-img"
                  />
                  <span>Ralph Mercer</span>
                </div>
                <div className="img-hr-box">
                  <img
                    src="https://i.ibb.co/ZpjJwGJ8/user-11.jpg55px"
                    className="profile-img"
                  />
                  <span>Anne George</span>
                </div>
                <div className="img-hr-box">
                  <img
                    src="https://i.ibb.co/ZpjJwGJ8/user-11.jpg55px"
                    className="profile-img"
                  />
                  <span>Isabel Clemo</span>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-9">
                    <div className="card calendar p-3 shadow w-100">
                      <h5>Event</h5>

                      <hr />


                      <FullCalendar
                        plugins={[
                          dayGridPlugin,
                          timeGridPlugin,
                          interactionPlugin,
                        ]}
                        initialView={calendarView}
                        events={events}
                        headerToolbar={{
                          start: "today,prev,next",
                          center: "title",
                          end: "dayGridMonth,timeGridWeek,timeGridDay",
                        }}
                        height={"auto"} // Ensures the calendar adapts to the container
                        aspectRatio={windowWidth < 768 ? 0.6 : 1.5} // Adjusts aspect ratio dynamically
                        eventClick={handleEventClick}
                        ref={calendarRef}
                        editable={true} // Allow event dragging & resizing
                        selectable={true} // Allow users to select time slots
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card staff-card shadow-sm border-0">
                      <h5>Staff</h5>
                      <div className="row mt-3 mb-4">
                        <div className="col-md-6 d-flex">
                          <span>
                            <i
                              className="fa-solid fa-user-group text-white rounded-3"
                              style={{
                                padding: "15px 13px",
                                backgroundColor: "#4CAF50",
                              }}
                            />
                          </span>
                          <span className="ms-2">
                            <p>
                              Total <br /> Staff
                            </p>
                            <h4 className="mb-2" style={{ lineHeight: "2px", color: "#4CAF50" }}>
                              15
                            </h4>
                          </span>
                        </div>
                        <div className="col-md-6 d-flex">
                          <span>
                            <i
                              className="fa-solid fa-user-group text-white rounded-3"
                              style={{
                                padding: "15px 13px",
                                backgroundColor: "#3ec9d6",
                              }}
                            />
                          </span>
                          <span className="ms-2">
                            <p>Total Employee</p>
                            <h4 className="mb-2" style={{ lineHeight: "2px", color: "#3ec9d6" }}>
                              7
                            </h4>
                          </span>
                        </div>
                        <div className="col-md-6 d-flex mt-4">
                          <span>
                            <i
                              className="fa-solid fa-user-group text-white rounded-3"
                              style={{
                                padding: "15px 13px",
                                backgroundColor: "#ff3a6e",
                              }}
                            />
                          </span>
                          <span className="ms-2">
                            <p>Total Client</p>
                            <h4 className="mb-2" style={{ lineHeight: "2px", color: "#ff3a6e" }}>
                              8
                            </h4>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="card staff-card shadow-sm border-0 my-4">
                      <h5>Job</h5>
                      <div className="row mt-3 mb-4">
                        <div className="col-md-6 d-flex">
                          <span>
                            <i
                              className="fa-solid fa-certificate text-white rounded-3"
                              style={{
                                padding: "15px 15px",
                                backgroundColor: "#4CAF50",
                              }}
                            />
                          </span>
                          <span className="ms-2">
                            <p>
                              Total <br /> Jobs
                            </p>
                            <h4 className="mb-2" style={{ lineHeight: "2px", color: "#4CAF50" }}>
                              4
                            </h4>
                          </span>
                        </div>
                        <div className="col-md-6 d-flex">
                          <span>
                            <i
                              className="fa-solid fa-check text-white rounded-3"
                              style={{
                                padding: "15px 15px",
                                backgroundColor: "#3ec9d6",
                              }}
                            />
                          </span>
                          <span className="ms-2">
                            <p>Active Jobs</p>
                            <h4 className="mb-2" style={{ lineHeight: "2px", color: "#3ec9d6" }}>
                              4
                            </h4>
                          </span>
                        </div>
                        <div className="col-md-6 d-flex mt-4">
                          <span>
                            <i
                              className="fa-solid fa-xmark text-white rounded-3"
                              style={{
                                padding: "15px 17px",
                                backgroundColor: "#ff3a6e",
                              }}
                            />
                          </span>
                          <span className="ms-2">
                            <p>Inactive Jobs</p>
                            <h4 className="mb-2" style={{ lineHeight: "2px", color: "#ff3a6e" }}>
                              0
                            </h4>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="card staff-card shadow-sm border-0 my-4">
                      <h5>Training</h5>
                      <div className="row mt-3 mb-4">
                        <div className="col-md-6 d-flex">
                          <span>
                            <i
                              className="fa-solid fa-user-group text-white rounded-3"
                              style={{
                                padding: "15px 13px",
                                backgroundColor: "#4CAF50",
                              }}
                            />
                          </span>
                          <span className="ms-2">
                            <p>
                              Total <br /> Training
                            </p>
                            <h4 className="mb-2" style={{ lineHeight: "2px", color: "#4CAF50" }}>
                              2
                            </h4>
                          </span>
                        </div>
                        <div className="col-md-6 d-flex">
                          <span>
                            <i
                              className="fa-solid fa-user text-white rounded-3"
                              style={{
                                padding: "15px 13px",
                                backgroundColor: "#3ec9d6",
                              }}
                            />
                          </span>
                          <span className="ms-2">
                            <p>Trainer</p>
                            <h4 className="mb-2" style={{ lineHeight: "2px", color: "#3ec9d6" }}>
                              4
                            </h4>
                          </span>
                        </div>
                        <div className="col-md-6 d-flex mt-4">
                          <span>
                            <i
                              className="fa-solid fa-user-plus text-white rounded-3"
                              style={{
                                padding: "15px 13px",
                                backgroundColor: "#ff3a6e",
                              }}
                            />
                          </span>
                          <span className="ms-2">
                            <p>Active Training</p>
                            <h4 className="mb-2" style={{ lineHeight: "2px", color: "#ff3a6e" }}>
                              1
                            </h4>
                          </span>
                        </div>
                        <div className="col-md-6 d-flex mt-4">
                          <span>
                            <i
                              className="fa-solid fa-user-minus text-white rounded-3"
                              style={{
                                padding: "15px 13px",
                                backgroundColor: "gray",
                              }}
                            />
                          </span>
                          <span className="ms-2">
                            <p>Done Training</p>
                            <h4 className="mb-2" style={{ lineHeight: "2px", color: "gray" }}>
                              1
                            </h4>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card p-3 shadow border-0 rounded-3">
                  <h5 className="mb-4">Announcement List</h5>
                  <div className="table-responsive">
                    <table className="table mb-5">
                      <thead className="table-light">
                        <tr>
                          <th scope="col">TITLE</th>
                          <th scope="col">START DATE</th>
                          <th scope="col">END DATE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Sports Scream</td>
                          <td>Jul 21, 2021</td>
                          <td>Jul 21, 2021</td>
                        </tr>
                        <tr>
                          <td>My New Businesss</td>
                          <td>Jul 21, 2021</td>
                          <td>Jul 21, 2021</td>
                        </tr>
                        <tr>
                          <td>WE WANT TO EARN YOUR DEEPEST TRUST.</td>
                          <td>Jul 21, 2021</td>
                          <td>Jul 21, 2021</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <div className="card p-3 shadow-sm border-0 rounded-3">
                  <h5 className="mb-4">Meeting schedule</h5>
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="table-light">
                        <tr>
                          <th scope="col">TITLE</th>
                          <th scope="col">DATE</th>
                          <th scope="col">Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Event Related</td>
                          <td>Jan 18, 2024</td>
                          <td>12:20 PM</td>
                        </tr>
                        <tr>
                          <td>New Technology</td>
                          <td>Feb 24, 2024</td>
                          <td>12:26 PM</td>
                        </tr>
                        <tr>
                          <td>Meeting: Weekly Team Meeting</td>
                          <td>Mar 21, 2024</td>
                          <td>7:29 PM</td>
                        </tr>
                        <tr>
                          <td>Marketing Campaign Review</td>
                          <td>Apr 21, 2024</td>
                          <td>6:10 PM</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HRDashboard;
