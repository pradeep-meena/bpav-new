import React, { useEffect, useRef,useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";

// Register Chart.js components
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);

const CrmDashboard = () => {
  const [date, setDate] = useState(new Date());

  const lineData = {
    labels: [
      "29-Jan",
      "30-Jan",
      "31-Jan",
      "01-Feb",
      "02-Feb",
      "03-Feb",
      "04-Feb",
    ],
    datasets: [
      {
        label: "Deal Calls by Day",
        data: [80, 100, 50, 70, 90, 40, 60],
        borderColor: "#28a745",
        backgroundColor: "rgba(40, 167, 69, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: [
      "Proposal",
      "Initial Contact",
      "Close",
      "Qualification",
      "Meeting",
    ],
    datasets: [
      {
        label: "Deals by Stage",
        data: [0.7, 1.5, 1.5, 0.8, 1.5],
        backgroundColor: "#007bff",
      },
    ],
  };

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
    alert(`Event: ${e.event.title}`);  // Corrected string interpolation
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
      end: new Date(Date.now() + 338000000).toISOString().slice(0, 10),  // Added end property for consistency
    },
    {
      title: "Data Update...",
      backgroundColor: "#F7EEF9",
      textColor: "#AB47BC",
      start: new Date(Date.now() - 338000000).toISOString().slice(0, 10),
      end: new Date(Date.now() - 338000000).toISOString().slice(0, 10),  // Added end property for consistency
    },
    {
      title: "Meeting with Team Dev",
      backgroundColor: "#E8E9EA",
      textColor: "#212529",
      start: new Date(Date.now() + 68000000).toISOString().slice(0, 10),
      end: new Date(Date.now() + 68000000).toISOString().slice(0, 10),  // Added end property for consistency
    },
    {
      title: "Design System",
      backgroundColor: "#FAE7E7",
      textColor: "#E70D0D",
      start: new Date(Date.now() + 88000000).toISOString().slice(0, 10),
      end: new Date(Date.now() + 88000000).toISOString().slice(0, 10),  // Added end property for consistency
    },
  ];

  return (
    <div className="container mt-4">
      <h3 className="text-start mb-3">Dashboard</h3>
      <p>Dashboard/CRM</p>

      {/* Dashboard Cards */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card p-3 shadow text-white bg-dark">
            <h4 className="text-white">WorkDo</h4>
            <p>
              Manage customer relationships to boost satisfaction and growth.
            </p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card p-3 shadow text-center bg-light">
            <h5 className="text-danger">Total Deal</h5>
            <h2>95</h2>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card p-3 shadow text-center bg-light">
            <h5 className="text-success">Total Client</h5>
            <h2>126</h2>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card p-3 shadow text-center bg-light">
            <h5 className="text-warning">Total User</h5>
            <h2>151</h2>
          </div>
        </div>
      </div>

      {/* Calendar & Charts Row */}
      <div className="row">
        {/* Calendar */}
        <div className="col-lg-8 col-md-12">
          <div className="card p-3 shadow">
            <h5>Calendar</h5>
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

        {/* Charts - Side by Side */}
        <div className="col-lg-4 col-md-12">
          <div className="row">
            <div className="col-12">
              <div className="card p-3 mb-4 shadow">
                <h5>Deal Calls by Day</h5>
                <Line data={lineData} />
              </div>
            </div>
            <div className="col-12 mt-3">
              <div className="card p-3 shadow">
                <h5>Deals by Stage</h5>
                <Bar data={barData} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tables Section */}
      <div className="row mt-3">
        <div className="col-md-8">
          <div className="card p-3 shadow">
            <h5>Recently Created Deals</h5>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Deal Name</th>
                  <th>Status</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Volume Purchase Deal",
                    status: "Close",
                    createdAt: "2024-09-09 21:53:52",
                  },
                  {
                    name: "Strategic Partnership",
                    status: "Proposal",
                    createdAt: "2024-09-09 21:53:52",
                  },
                  {
                    name: "Expansion Deal",
                    status: "Proposal",
                    createdAt: "2024-09-09 21:53:52",
                  },
                  {
                    name: "Vaughan Cortez",
                    status: "Meeting",
                    createdAt: "2024-09-09 21:53:52",
                  },
                  {
                    name: "Solution Customization",
                    status: "Initial Contact",
                    createdAt: "2024-09-09 21:53:52",
                  },
                ].map((deal, index) => (
                  <tr key={index}>
                    <td>{deal.name}</td>
                    <td>{deal.status}</td>
                    <td>{deal.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h5>Recently Modified Deals</h5>
            <div className="table-responsive">
            <table className="table table-striped" >
              <thead >
                <tr>
                  <th>Deal Name</th>
                  <th>Status</th>
                  <th>Updated At</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Project Accelerator",
                    status: "Qualification",
                    updatedAt: "2024-09-12 06:45:05",
                  },
                  {
                    name: "Vaughan Cortez",
                    status: "Meeting",
                    updatedAt: "2024-09-12 06:45:00",
                  },
                  {
                    name: "Expansion Deal",
                    status: "Proposal",
                    updatedAt: "2024-09-11 00:51:38",
                  },
                  {
                    name: "Lacy Roberson",
                    status: "Qualification",
                    updatedAt: "2024-09-11 00:34:57",
                  },
                  {
                    name: "Solution Customization",
                    status: "Initial Contact",
                    updatedAt: "2024-09-10 22:55:01",
                  },
                ].map((deal, index) => (
                  <tr key={index}>
                    <td>{deal.name}</td>
                    <td>{deal.status}</td>
                    <td>{deal.updatedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrmDashboard;
