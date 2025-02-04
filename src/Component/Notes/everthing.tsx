import React from 'react'
import { Link } from "react-router-dom";

function everthing(){
  
        const currentDate = new Date();
      
        // Extract day, month, and year
        const date = currentDate.toLocaleDateString();
        const day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
        const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
        const year = currentDate.getFullYear();

        const openPage = () => {
            const newWindow = window.open('', '_blank', 'width=600,height=400');
            if (newWindow) {
              newWindow.document.write('<h1>Blank Notes Page</h1><textarea style="width:100%; height:90%"></textarea>');
            }
           
          };
  return (
    <div>
       {/* Notes List */}
            


       <div className="page-wrapper">
        <div className="content pb-4">

          <div style={{ color: 'white', padding: '20px', width: '100%' }}>


       <div className="col-xl-9 budget-role-notes content pb-4" >
              <div className="row">

                <div className="col-xl-9 budget-role-notes content pb-4" style={{  width: '100%', marginTop: '-1115px', marginLeft:'300px',height:'1095px', padding:'25px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <button style={{ background: 'black', color: 'white', border: 'none' }}>Everything</button>
                    <button style={{ background: 'black', color: 'white', border: 'none' }}>Added by me</button>
                    <button style={{ background: 'black', color: 'white', border: 'none' }}>Shared with me</button>
                  </div>

                      <div style={{gap:'15px'}}>

                  <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', gap: '15px' }}>
                    {day},{month},{year}
                  </div>

                  <div
                          style={{
                                display: 'flex',
                                 flexDirection: 'column',
                                 gap: '30px',
                                          }}>
                    {/* Note Items */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        background: '#1b2631',
                        border: '1px solid black',
                        borderRadius: '10px',
                        padding: '10px',
                        cursor: 'pointer',

                      }}
                      onClick={openPage}
                    >
                       
                      <button style={{ display: 'flex', justifyContent: 'space-between', border: 'none', background: '#1b2631', color: 'white', gap: '10px' }}>
                        <span>
                          <i className="fa-regular fa-file-lines"></i>
                        </span>
                        Untitled Notes
                      </button>
                      <div>{month},{year}</div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        background: '#1b2631',
                        border: '1px solid black',
                        borderRadius: '10px',
                        padding: '10px',
                        cursor: 'pointer',
                      }}
                      onClick={openPage}
                    >
                      <button style={{ display: 'flex', justifyContent: 'space-between', border: 'none', background: '#1b2631', color: 'white', gap: '10px' }}>
                        <span>
                          <i className="fa-regular fa-file-lines"></i>
                        </span>
                        Untitled notes
                      </button>
                      <div>{month}, {year}</div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        background: '#1b2631',
                        border: '1px solid black',
                        borderRadius: '10px',
                        padding: '10px',

                        cursor: 'pointer',
                      }}
                      onClick={openPage}
                    >
                      <button style={{ display: 'black', border: 'none', background: '#1b2631', color: 'white', gap: '10px' }}>
                        <span>
                          <i className="fa-regular fa-file-lines"></i>
                        </span>
                        #
                      </button>
                      <div>{month}, {year}</div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        background: '#1b2631',
                        border: '1px solid black',
                        borderRadius: '10px',
                        padding: '10px',

                        cursor: 'pointer',
                      }}
                      onClick={openPage}
                    >
                      <button style={{ display: 'black', border: 'none', background: '#1b2631', color: 'white', gap: '10px' }}>
                        <span>
                          <i className="fa-regular fa-file-lines"></i>
                        </span>
                        Add a meeting title - {date}, {month}, {year}
                      </button>
                      <div>{month}, {year}</div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        background: '#1b2631',
                        border: '1px solid black',
                        borderRadius: '10px',
                        padding: '10px',

                        cursor: 'pointer',
                      }}
                      onClick={openPage}
                    >
                      <button style={{ display: 'block', border: 'none', background: '#1b2631', color: 'white', gap: '10px' }}>
                        <span>
                          <i className="fa-regular fa-file-lines"></i>
                        </span>
                        Untitled Notes
                      </button>
                      <div>{month}, {year}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 'bold' ,marginBottom:'30px',marginTop:'25px'}}>
                    {day}, {month}, {year}
                  </div>

                  <div
                          style={{
                                display: 'flex',
                                 flexDirection: 'column',
                                 gap: '30px',
                                          }}>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      background: '#1b2631',
                      border: '1px solid black',
                      borderRadius: '10px',

                      padding: '10px',
                      cursor: 'pointer',
                    }}
                    onClick={openPage}
                  >
                    <button style={{ display: 'block', border: 'none', background: '#1b2631', color: 'white', gap: '10px' }}>
                      <span>
                        <i className="fa-regular fa-file-lines"></i>
                      </span>
                      todoist complete task
                    </button>
                    <div>{month}, {year}</div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      background: '#1b2631',
                      border: '1px solid black',
                      borderRadius: '10px',

                      padding: '10px',
                      cursor: 'pointer',
                    }}
                    onClick={openPage}
                  >
                    <button style={{ display: 'block', border: 'none', background: '#1b2631', color: 'white', gap: '10px' }}>
                      <span>
                        <i className="fa-regular fa-file-lines"></i>
                      </span>
                      Testing testing 123 testing testing 123
                    </button>
                    <div>{month}, {year}</div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      background: '#1b2631',
                      border: '1px solid black',
                      borderRadius: '10px',

                      padding: '10px',
                      cursor: 'pointer',
                    }}
                    onClick={openPage}
                  >
                    <button style={{ display: 'block', border: 'none', background: '#1b2631', color: 'white', gap: '10px' }}>
                      <span>
                        <i className="fa-regular fa-file-lines"></i>
                      </span>
                      Untitled Notes
                    </button>
                    <div>{month}, {year}</div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      background: '#1b2631',
                      border: '1px solid black',
                      borderRadius: '10px',

                      padding: '10px',
                      cursor: 'pointer',
                    }}
                    onClick={openPage}
                  >
                    <button style={{ display: 'flex', border: 'none', background: '#1b2631', color: 'white', gap: '10px' }}>
                      <span>
                        <i className="fa-regular fa-file-lines"></i>
                      </span>
                      this is a test note,
                    </button>
                    <div>{month}, {year}</div>
                  </div>
                  </div>

                  <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '30px', marginTop:'25px' }}>
                    {day},{month}, {year}
                  </div>
                  
                  <div
                          style={{
                                display: 'flex',
                                 flexDirection: 'column',
                                 gap: '30px',
                                          }}>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      background: '#1b2631',
                      border: '1px solid black',
                      borderRadius: '10px',

                      padding: '10px',
                      cursor: 'pointer',
                    }}
                    onClick={openPage}
                  >
                    <button style={{ display: 'block', border: 'none', background: '#1b2631', color: 'white', gap: '10px' }}>
                      <span>
                        <i className="fa-regular fa-file-lines"></i>
                      </span>
                      /
                    </button>
                    <div>{month}, {year}</div>
                  </div>
                  

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      background: '#1b2631',
                      border: '1px solid black',
                      borderRadius: '10px',

                      padding: '10px',
                      cursor: 'pointer',
                    }}
                    onClick={openPage}
                  >
                    <button style={{ display: 'block', border: 'none', background: '#1b2631', color: 'white', gap: '10px' }}>
                      <span>
                        <i className="fa-regular fa-file-lines"></i>
                      </span>
                      Untitled Notes
                    </button>
                    <div>{month}, {year}</div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default everthing
