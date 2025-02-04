import React, { useState } from "react";
// import "../App";

const Sidebar = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    {
      title: "Summary",
      items: [],
    },
    {
      title: "Analyze",
      items: [],
    },
    {
      title: "Unassigned",
      count: 0,
      items: [],
    },
    {
      title: "Assigned To Me",
      count: 37,
      items: [],
    },
    {
        title: "My Team's Unassigned",
        count: 37,
        items: [],
      },
    {
      title: "My Team's Open",
      count: 42,
      items: [],
    },
    {
        title: "All Open",
        count: 42,
        items: [],
      },
      {
        title: "Following",
        count: 42,
        items: [],
      },
      {
        title: "My Mention",
        count: 42,
        items: [],
      },
      {
        title: "All Closed",
        count: 42,
        items: [],
      },
      {
        title: "Sent",
        count: 42,
        items: [],
      },
      {
        title: "Spam",
        count: 966,
        items: [],
      },
      {
        title: "Sales-Unassigned",
        count: 0,
        items: [],
      },
      {
        title: "Sales -All Open",
        count: 42,
        items: [],
      },
      {
        title: "Sales - All closed",
        count: 316,
        items: [],
      },
      {
        title: "Account -Unassigned",
        count: 0,
        items: [],
      },
      {
        title: "Account - All Open",
        count: 33,
        items: [],
      },
      {
        title: "Account - All closed",
        count: 661,
        items: [],
      },
      {
        title: "Account - AnaswerConnect",
        count:0,
        items: [],
      },
      {
        title: "Support-All Open",
        count: 0,
        items: [],
      },
      {
        title: "Support -Unassigned",
        count: 0,
        items: [],
      },
      {
        title: "Support - All closed",
        count: 86,
        items: [],
      },
      {
        title: "Technical -Unassigned",
        count: 5,
        items: [],
      }, {
        title: "TEchnical - All Open",
        count: 0,
        items: [],
      }, {
        title: "Technical - All closed",
        count: 6,
        items: [],
      }, 
    {
      title: "Marketing- Unassigned",
      count: 0 ,
      items: []
    },
    {
        title: "Marketing- All Open",
        count: 1 ,
        items: []
      },
      {
        title: "Marketing- All Closed",
        count: 1 ,
        items: []
      },
  ];

  return (
    <div className="sidebar-container">
        <div>
      <h2>Help Desk</h2>
      <div style={{ display: 'inline-flex', gap: '20px' }}>
      <i class="fa-solid fa-ellipsis"></i><i class="fa-solid fa-plus"></i>
      </div>
      </div>
      <div className="sidebar-search">
      
        <input type="text" placeholder="Search" />
      </div>
      <ul className="sidebar-list">
        {sections.map((section, index) => (
          <li key={index} className="sidebar-section">
            <div
              className="sidebar-section-header"
              onClick={() => toggleSection(section.title)}
            >
              <span>{section.title}</span>
              {section.items.length > 0 && (
                <span className="toggle-icon">
                  {expandedSections[section.title] ? "-" : "+"}
                </span>
              )}
            </div>
            {expandedSections[section.title] && section.items.length > 0 && (
              <ul className="sidebar-sublist">
                {section.items.map((item, subIndex) => (
                  <li key={subIndex} className="sidebar-subitem">
                    {item.title}
                    {item.count !== undefined && (
                      <span className="item-count">{item.count}</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
