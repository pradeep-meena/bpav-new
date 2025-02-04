import React from 'react';

const SchedulingWorkload = () => {
    const teamMembers = [
        "Annie Carter",
        "Camille Rich",
        "Conrado Heralcio",
        "Isabel Coral",
        "Joel Jones",
        "Kevin Long",
        "Krystal Pearson",
        "Lorena Jesusa",
        "Malisa Zuniga",
        "Michael Sanchez",
        "Shanice Phillips",
        "Stephen Patterson",
      ];
    
      const weeks = [
        { week: "Oct 15–21", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
        { week: "Oct 22–28", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
        { week: "Oct 29–Nov 4", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
        { week: "Nov 5–11", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
      ];
    
      const getRandomHours = () => {
        return Math.random() > 0.8 ? Math.round(Math.random() * 10) : "";
      };

  return (
 <div className='page-wrapper'>
     <div className="container my-4">

<div className="d-flex justify-content-end grid gap-1 mb-3">
  <button className="btn btn-secondary">Expand All</button>
  <button className="btn btn-secondary">Collapse All</button>
  <button className="btn btn-secondary">Backlog Box</button>
  <button className="btn btn-secondary">Leave Feedback</button>
</div>


<div className="table-responsive">
  <table className="table table-bordered text-center">
    <thead className="table-light">
      <tr>
        <th>Team Member</th>
        {weeks.map((week, index) => (
          <th key={index} colSpan={week.days.length}>
            {week.week}
          </th>
        ))}
      </tr>
      <tr>
        <th></th>
        {weeks.map((week, index) =>
          week.days.map((day, idx) => <th key={`${index}-${idx}`}>{day}</th>)
        )}
      </tr>
    </thead>
    <tbody>
      {teamMembers.map((member, index) => (
        <tr key={index}>
          <td className="fw-bold">{member}</td>
          {weeks.map((week, weekIndex) =>
            week.days.map((_, dayIndex) => (
              <td
                key={`${weekIndex}-${dayIndex}`}
                className={Math.random() > 0.8 ? "table-danger fw-bold" : ""}
              >
                {getRandomHours()}
              </td>
            ))
          )}
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>

 </div>
  );
};

export default SchedulingWorkload;
