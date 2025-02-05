import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Recruitment = () => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Destroy previous chart instance if exists
      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Applied", "Phone Screen", "Interview", "Hired"],
          datasets: [
            {
              label: "Platform",
              data: [8, 2, 4, 6],
              backgroundColor: "#00adb4",
              barThickness: 40, // Adjusting bar width
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      return () => {
        if (chartInstance) {
          chartInstance.destroy();
        }
      };
    }
  }, []);

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
          <h3>Dashboard</h3>
          <nav>
            <a href="#" className="text-success text-decoration-none">
              Dashboard
            </a>{" "}
            &gt; Recruitment
          </nav>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="card p-3 text-white bg-dark rounded-3">
                <h3 className="text-white">WorkDo</h3>
                <p className="mt-2">
                  Simplify hiring by <br /> effectively planning and
                  monitoring...
                </p>
                <button className="btn btn-success" style={{ width: 130 }}>
                  Career Page
                </button>
              </div>
            </div>
            <div className="col-md-2">
              <div
                className="card card-custom p-3 border-0"
                style={{ backgroundColor: "#fae7ec", color: "#fe5d6e" }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <i
                    className="fa-solid fa-list-check bg-white p-2"
                    style={{ color: "#fe5d6e" }}
                  />
                  <h3>5</h3>
                </div>
                <h5 className="my-4">
                  Total Job <br /> Published
                </h5>
              </div>
            </div>
            <div className="col-md-2">
              <div
                className="card card-custom p-3 border-0"
                style={{ backgroundColor: "#e1f3eb", color: "#0caf60" }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <i
                    className="fa-regular fa-file-lines bg-white p-2"
                    style={{ color: "#0caf60" }}
                  />
                  <h3>5</h3>
                </div>
                <h5 className="my-4">
                  Total Job <br /> Published
                </h5>
              </div>
            </div>
            <div className="col-md-2">
              <div
                className="card card-custom p-3 border-0"
                style={{ backgroundColor: "#f8f1e3", color: "#ffa229" }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <i
                    className="fa-solid fa-bug bg-white p-2"
                    style={{ color: "#ffa229" }}
                  />
                  <h3>5</h3>
                </div>
                <h5 className="my-4">
                  Total Job <br /> Published
                </h5>
              </div>
            </div>
          </div>
          <div className="row mt-4 mb-5">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-7">
                  <div className="card p-3 border-0 shadow-sm">
                    <div className="calendar p-3 w-100">
                      <h5>Interview Schedule</h5>
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
                </div>
                <div className="col-md-5">
                  <div
                    className="card p-3"
                    style={{ width: "100%", height: "300px" }}
                  >
                    <h5>Job Application by Stage</h5>
                    <canvas
                      className="mb-4"
                      ref={chartRef}
                      style={{ width: "100%", height: "100%" }}
                    ></canvas>
                  </div>
                  <div className="card p-3 shadow-sm border-0 rounded-3 mt-4 mb-5">
                    <h5>Recently Created Jobs</h5>
                    <hr />
                    <div className="table-responsive">
                      <table className="table">
                        <thead className="table-light">
                          <tr>
                            <th>Job Name</th>
                            <th>Status</th>
                            <th>Created At</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Deserunt en beneficio</td>
                            <td>Active</td>
                            <td>2023-12-06 00:29:05</td>
                          </tr>
                          <tr>
                            <td>
                              The experiences involved were both challenging and
                              rewarding. With Engineering Jobs
                            </td>
                            <td>Active</td>
                            <td>2023-12-06 00:29:05</td>
                          </tr>
                          <tr>
                            <td>Fashion Jobs That Are Extremely Competitive</td>
                            <td>Active</td>
                            <td>2023-12-06 00:29:05</td>
                          </tr>
                          <tr>
                            <td>Ullamco odio eo enim</td>
                            <td>Active</td>
                            <td>2023-12-06 00:29:05</td>
                          </tr>
                          <tr>
                            <td>
                              The Exceptional Flexibility of Business Employment
                            </td>
                            <td>Active</td>
                            <td>2023-12-06 00:29:05</td>
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
      </section>
    </div>
  );
};

export default Recruitment;
