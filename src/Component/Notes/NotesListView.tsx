import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';
import everthing from './everthing';




function NotesListView() {
  const navigate = useNavigate();
  
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

    const everthing=()=>{
      console.log('hello everyone')
    }
   
  };

  // Function to open the dialog
  
    
  

    


  return (

    
      <div className="page-wrapper ">
        <div className="content pb-4">

          <div style={{ color: 'white', padding: '20px', width: '100%' }}>



            <div className="row">
              <div className="col-xl-3 col-md-12 sidebars-right theiaStickySidebar section-bulk-widget">
                <div className="border rounded-3 bg-white p-3">
                  <div className="mb-3 pb-3 border-bottom">
                    <h4 className="d-flex align-items-center">
                      <i className="ti ti-file-text me-2" />
                      Notes List
                    </h4>
                  </div>
                  <div className="border-bottom pb-3 ">
                    <div
                      className="nav flex-column nav-pills"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical">

                      <button
                        className="d-flex text-start align-items-center fw-medium fs-15 nav-link active mb-1"
                        id="v-pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="true"
                      >
                        <i className="ti ti-inbox me-2" />
                        All Notes<span className="ms-2">1</span>
                      </button>

                     


                      <button
                        className="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-1"
                        id="v-pills-messages-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-messages"
                        aria-selected="false"
                      >
                        <i className="ti ti-star me-2" />
                        Important
                      </button>
                      <button
                        className="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-0"
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                      >
                        <i className="ti ti-trash me-2" />
                        Trash
                      </button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="border-bottom px-2 pb-3 mb-3">
                      <h5 className="mb-2">Tags</h5>
                      <div className="d-flex flex-column mt-2">
                        <Link to="#" className="text-info mb-2">
                          <span className="text-info me-2">
                            <i className="fas fa-square square-rotate fs-10" />
                          </span>
                          Pending
                        </Link>
                        <Link to="#" className="text-danger mb-2">
                          <span className="text-danger me-2">
                            <i className="fas fa-square square-rotate fs-10" />
                          </span>
                          Onhold
                        </Link>
                        <Link to="#" className="text-warning mb-2">
                          <span className="text-warning me-2">
                            <i className="fas fa-square square-rotate fs-10" />
                          </span>
                          Inprogress
                        </Link>
                        <Link to="#" className="text-success">
                          <span className="text-success me-2">
                            <i className="fas fa-square square-rotate fs-10" />
                          </span>
                          Done
                        </Link>
                      </div>
                    </div>
                    <div className="px-2">
                      <h5 className="mb-2">Priority</h5>
                      <div className="d-flex flex-column mt-2">
                        <Link to="#" className="text-warning mb-2">
                          <span className="text-warning me-2">
                            <i className="fas fa-square square-rotate fs-10" />
                          </span>
                          Medium
                        </Link>
                        <Link to="#" className="text-success mb-2">
                          <span className="text-success me-2">
                            <i className="fas fa-square square-rotate fs-10" />
                          </span>
                          High
                        </Link>
                        <Link to="#" className="text-danger">
                          <span className="text-danger me-2">
                            <i className="fas fa-square square-rotate fs-10" />
                          </span>
                          Low
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="row  mt-15px">
              <div className="col-xl-3 col-md-12 sidebars-right theiaStickySidebar section-bulk-widget">
                <div className="border rounded-3  color-white p-3">



                  <div className=" mt-15px">

                    <div
                      className="nav flex-column nav-pills"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <button
                        className="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-0"
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                        onClick={()=>navigate('/everything')}
                        >
                        <i className="ti ti-trash me-2" />
                      Notes
                      </button>


                      <button
                        className="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-0"
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                        >
                        <i className="ti ti-trash me-2" />
                        Reminders
                      </button>
                      <div className="mb-3 mt-3 pb-3 color-white">
                        <h4 className="d-flex align-items-center" style={{ color: 'white' }}>
                          <i className="ti ti-file-text me-2" />
                          Laogals
                        </h4>
                      </div>

                      <button
                        className="d-flex text-start align-items-center fw-medium fs-15 nav-link active mb-1"
                        id="v-pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="true"
                      >
                        <i className="ti ti-inbox me-2" />
                        HR<span className="ms-2"></span>
                      </button>
                      <button
                        className="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-1"
                        id="v-pills-messages-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-messages"
                        aria-selected="false"
                      >
                        <i className="ti ti-star me-2" />
                        Marketing
                      </button>
                      <button
                        className="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-0"
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                      >
                        <i className="ti ti-trash me-2" />
                        Personal
                      </button>

                      <button
                        className="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-0"
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                      >
                        <i className="ti ti-trash me-2" />
                        Project
                      </button>

                      <button
                        className="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-0"
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                      >
                        <i className="ti ti-trash me-2" />
                        Sales
                      </button>

                      <button
                        className="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-0"
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                      >
                        <i className="ti ti-trash me-2" />
                        Work General
                      </button>

                      <button
                        className="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-0"
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                      >
                        <i className="ti ti-trash me-2" />
                        CreateEdit Labels
                      </button>

                      <button
                        className="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-0"
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                      >
                        <i className="ti ti-trash me-2" />
                        Archive
                      </button>

                      <button
                        className="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-0"
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                      >
                        <i className="ti ti-trash me-2" />
                        Bin
                      </button>

                      <button
                        className="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-0"
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                      >
                        <i className="ti ti-trash me-2" />
                        Setting
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>




            <Link to="/everything" className="text-warning mb-2">
                                     <span className="text-warning me-2">
                                       <i className="fas fa-square square-rotate fs-10" />
                                     </span>
                                     Medium
                                   </Link>


            {/* Notes List */}
         


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
                    // Note Items 
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
   
  );
}

export default NotesListView;
