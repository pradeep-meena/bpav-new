import React, { useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


const ScheduleTimeline = () => {
  const calendarRef = useRef(null);

  const handleDateClick = (info) => {
    const title = prompt("Enter event title:");
    if (title) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.addEvent({
        title,
        start: info.dateStr,
        color: '#007bff',
      });
      alert("Event added!");
    }
  };

  const handleEventClick = (info) => {
    const confirmDelete = window.confirm(`Do you want to delete the event: ${info.event.title}?`);
    if (confirmDelete) {
      info.event.remove();
      alert("Event deleted!");
    }
  };

  return (
   <div className='page-wrapper'>
     <div className="container mt-4">
      <h3 className="text-primary">Shift Calendar</h3>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={[
          {
            title: 'Available Shift',
            start: '2024-11-01',
            color: '#28a745',
          },
          {
            title: 'Unassigned Shift',
            start: '2024-11-07',
            color: '#ffc107',
          },
          {
            title: 'Assigned Shift',
            start: '2024-11-10',
            color: '#dc3545',
          },
        ]}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        editable={true}
        aspectRatio={1.35}
        eventDisplay="block"
      />
    </div>
   </div>
  );
};

export default  ScheduleTimeline;