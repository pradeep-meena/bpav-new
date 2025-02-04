import React from 'react'
import { Link } from 'react-router-dom';
import ReactApexChart from "react-apexcharts";

const Documents = () => {
  return (
    <div className="page-wrapper">
    <div className=' container-fluid d-flex'>
        <div className="col-xl-3  theiaStickySidebar">
              <div className="sticky-class">
                <div className="card ">
                  <div className="card-body p-3">
                    <div className="shadow-xs p-2 mb-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center overflow-hidden">
                          <span className="avatar">
                            {/* <ImageWithBasePath
                              src="assets/img/profiles/avatar-29.jpg"
                              alt="img"
                              className="rounded-circle"
                            /> */}
                          </span>
                          <div className="overflow-hidden ms-2">
                            <h5 className="text-truncate">James Hong</h5>
                            <p className="fs-12 text-truncate">Jnh343@example.com</p>
                          </div>
                        </div>
                        <div className="dropdown ms-2">
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti ti-dots" />
                          </Link>
                          <ul className="dropdown-menu  dropdown-menu-end p-3">
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-edit me-1" />
                                Edit
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="file-drop mb-3 text-center">
                      <span className="avatar avatar-sm bg-primary text-white mb-2">
                        <i className="ti ti-upload fs-16" />
                      </span>
                      <h6 className="mb-2">Drop files here</h6>
                      <p className="fs-12 mb-0">
                        Browse and chose the files you want to upload from your
                        computer
                      </p>
                      <input type="file" />
                    </div>
                    <div className="files-list nav d-block">
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2 active"
                      >
                        <i className="ti ti-folder-up me-2" />
                        All Folder / Files
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-star me-2" />
                        Drive
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-octahedron me-2" />
                        Dropbox
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-share-2 me-2" />
                        Shared with Me
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-file me-2" />
                        Document
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-clock-hour-11 me-2" />
                        Recent File
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-star me-2" />
                        Important
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-music me-2" />
                        Media
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Storage Details */}
                {/* <div className="card">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="mb-2">Storage Details</h4>
                      <span className="badge badge-success mb-2">Used 77%</span>
                    </div>
                    <ReactApexChart
                      id="emp-department"
                      options={Storage}
                      series={Storage.series}
                      type="donut"
                      height={210}
                    />
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center overflow-hidden">
                        <span className="avatar avatar-md bg-transparent-info">
                          <i className="ti ti-music fs-20 text-info" />
                        </span>
                        <div className="overflow-hidden ms-2">
                          <h6 className="text-truncate">Music</h6>
                          <p className="text-truncate">35 Files</p>
                        </div>
                      </div>
                      <p className="text-title">8.5 GB</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center overflow-hidden">
                        <span className="avatar avatar-md bg-transparent-warning">
                          <i className="fa-regular fa-file-audio fs-20 text-warning" />
                        </span>
                        <div className="overflow-hidden ms-2">
                          <h6 className="text-truncate">Video</h6>
                          <p className="text-truncate">145 Files</p>
                        </div>
                      </div>
                      <p className="text-title">2 GB</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center overflow-hidden">
                        <span className="avatar avatar-md bg-transparent-secondary">
                          <i className="ti ti-file-description fs-20 text-secondary" />
                        </span>
                        <div className="overflow-hidden ms-2">
                          <h6 className="text-truncate">Documents</h6>
                          <p className="text-truncate">487 Files</p>
                        </div>
                      </div>
                      <p className="text-title">24.5 GB</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center overflow-hidden">
                        <span className="avatar avatar-md bg-transparent-purple">
                          <i className="ti ti-photo fs-20 text-purple" />
                        </span>
                        <div className="overflow-hidden ms-2">
                          <h6 className="text-truncate">Photos</h6>
                          <p className="text-truncate">35 Files</p>
                        </div>
                      </div>
                      <p className="text-title">8.5 GB</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-0">
                      <div className="d-flex align-items-center overflow-hidden">
                        <span className="avatar avatar-md bg-transparent-purple">
                          <i className="ti ti-file-type-doc fs-20 text-pink" />
                        </span>
                        <div className="overflow-hidden ms-2">
                          <h6 className="text-truncate">Other</h6>
                          <p className="text-truncate">487 Files</p>
                        </div>
                      </div>
                      <p className="text-title">16.2 GB</p>
                    </div>
                  </div>
                </div> */}
                {/* /Storage Details */}
                {/* Upgrade Details */}
                {/* <div className=" card bg-black bg-01">
                  <div className="card-body text-center">
                    <ImageWithBasePath
                      src="assets/img/icons/upgrade.svg"
                      alt="img"
                      className="mb-3"
                    />
                    <h6 className="mb-3 text-white">
                      Upgrade to Pro for Unlimited Storage
                    </h6>
                    <Link to="#" className="btn btn-white btn-sm">
                      Upgrade Now
                      <i className="ti ti-arrow-right ms-1" />
                    </Link>
                  </div>
                </div> */}
                {/* /Upgrade Details */}
              </div>

            </div>
            <div className='col-xl-9'>
           <div className="d-flex align-items-center justify-content-between mb-2">
                <h4 className="mb-2">Files</h4>
                <div className="d-flex align-items-center">
                  <div className="dropdown mb-2 me-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white"
                      data-bs-toggle="dropdown"
                    >
                      Sort By : Docs Type
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Docs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Pdf
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Image
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Folder
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                        >
                          Xml
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link
                    to="#"
                    className="link-primary fw-medium mb-2"
                  >
                    View All
                  </Link>
                </div>
              </div>
              <div className="custom-datatable-filter table-responsive mb-4">
                <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <div className="dataTables_length px-3" id="DataTables_Table_0_length">
                        <label>
                          Row Per Page{" "}
                          <select
                            name="DataTables_Table_0_length"
                            aria-controls="DataTables_Table_0"
                            className="form-select form-select-sm"
                          >
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                          </select>{" "}
                          Entries
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div id="DataTables_Table_0_filter  px-3" className="dataTables_filter text-end">
                        <label>
                          {" "}
                          <input
                            type="search"
                            className="form-control form-control-sm"
                            placeholder="Search"
                            aria-controls="DataTables_Table_0"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <table className="table datatable">
                    <thead className="thead-light">
                      <tr>
                        <th className="no-sort">
                          <div className="form-check form-check-md">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="select-all"
                            />
                          </div>
                        </th>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Type</th>
                        <th>Modified</th>
                        <th>Share</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link
                              to="#"
                              className="avatar avatar-md bg-light"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                                {/*  <ImageWithBasePath
                                src="assets/img/icons/file-01.svg"
                                className="img-fluid"
                                alt="img"
                              /> */} 
                            </Link>
                            <div className="ms-2">
                              <p className="text-title fw-medium  mb-0">
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                >
                                  Secret
                                </Link>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>7.6 MB</td>
                        <td>Doc</td>
                        <td>
                          <p className="text-title mb-0">Mar 15, 2025</p>
                          <span>05:00:14 PM</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              {/* <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-27.jpg"
                                alt="img"
                              /> */}
                            </span>
                            <span className="avatar avatar-rounded">
                              {/* <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-29.jpg"
                                alt="img"
                              /> */}
                            </span>
                            <span className="avatar avatar-rounded">
                              {/* <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-12.jpg"
                                alt="img"
                              /> */}
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="rating-select me-2">
                              <Link to="#">
                                <i className="ti ti-star" />
                              </Link>
                            </div>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-center"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots fs-14" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-right p-3">
                                <li>
                                  <Link className="dropdown-item rounded-1" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Permanent Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item rounded-1" to="#">
                                    <i className="ti ti-edit-circle me-2" />
                                    Restore File
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link
                              to="#"
                              className="avatar avatar-md bg-light"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              {/* <ImageWithBasePath
                                src="assets/img/icons/file-02.svg"
                                className="img-fluid"
                                alt="img"
                              /> */}
                            </Link>
                            <div className="ms-2">
                              <p className="text-title fw-medium  mb-0">
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                >
                                  Sophie Headrick
                                </Link>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>7.4 MB</td>
                        <td>PDF</td>
                        <td>
                          <p className="text-title mb-0">Jan 8, 2025</p>
                          <span>08:20:13 PM</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              {/* <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-15.jpg"
                                alt="img"
                              /> */}
                            </span>
                            <span className="avatar avatar-rounded">
                              {/* <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-16.jpg"
                                alt="img"
                              /> */}
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="rating-select me-2">
                              <Link to="#">
                                <i className="ti ti-star" />
                              </Link>
                            </div>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-center"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots fs-14" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-right p-3">
                                <li>
                                  <Link className="dropdown-item rounded-1" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Permanent Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item rounded-1" to="#">
                                    <i className="ti ti-edit-circle me-2" />
                                    Restore File
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link
                              to="#"
                              className="avatar avatar-md bg-light"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              {/* <ImageWithBasePath
                                src="assets/img/icons/file-03.svg"
                                className="img-fluid"
                                alt="img"
                              /> */}
                            </Link>
                            <div className="ms-2">
                              <p className="text-title fw-medium  mb-0">
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                >
                                  Gallery
                                </Link>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>6.1 MB</td>
                        <td>Image</td>
                        <td>
                          <p className="text-title mb-0">Aug 6, 2025</p>
                          <span>04:10:12 PM</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              {/* <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-02.jpg"
                                alt="img"
                              /> */}
                            </span>
                            <span className="avatar avatar-rounded">
                              {/* <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-03.jpg"
                                alt="img"
                              /> */}
                            </span>
                            <span className="avatar avatar-rounded">
                              {/* <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-05.jpg"
                                alt="img"
                              /> */}
                            </span>
                            <span className="avatar avatar-rounded">
                              {/* <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-06.jpg"
                                alt="img"
                              /> */}
                            </span>
                            <Link
                              className="avatar bg-primary avatar-rounded text-fixed-white"
                              to="#"
                            >
                              +1
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="rating-select me-2">
                              <Link to="#">
                                <i className="ti ti-star" />
                              </Link>
                            </div>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-center"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots fs-14" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-right p-3">
                                <li>
                                  <Link className="dropdown-item rounded-1" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Permanent Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item rounded-1" to="#">
                                    <i className="ti ti-edit-circle me-2" />
                                    Restore File
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link
                              to="#"
                              className="avatar avatar-md bg-light"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              {/* <ImageWithBasePath
                                src="assets/img/icons/file-04.svg"
                                className="img-fluid"
                                alt="img"
                              /> */}
                            </Link>
                            <div className="ms-2">
                              <p className="text-title fw-medium  mb-0">
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                >
                                  Doris Crowley
                                </Link>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>5.2 MB</td>
                        <td>Folder</td>
                        <td>
                          <p className="text-title mb-0">Jan 6, 2025</p>
                          <span>03:40:14 PM</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              {/* <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-06.jpg"
                                alt="img"
                              /> */}
                            </span>
                            <span className="avatar avatar-rounded">
                              {/* <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-10.jpg"
                                alt="img"
                              /> */}
                            </span>
                            <span className="avatar avatar-rounded">
                              {/* <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-15.jpg"
                                alt="img"
                              /> */}
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="rating-select me-2">
                              <Link to="#">
                                <i className="ti ti-star" />
                              </Link>
                            </div>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-center"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots fs-14" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-right p-3">
                                <li>
                                  <Link className="dropdown-item rounded-1" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Permanent Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item rounded-1" to="#">
                                    <i className="ti ti-edit-circle me-2" />
                                    Restore File
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-md">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center file-name-icon">
                            <Link
                              to="#"
                              className="avatar avatar-md bg-light"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              {/* <ImageWithBasePath
                                src="assets/img/icons/file-05.svg"
                                className="img-fluid"
                                alt="img"
                              /> */}
                            </Link>
                            <div className="ms-2">
                              <p className="text-title fw-medium  mb-0">
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                >
                                  Cheat_codez
                                </Link>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>8 MB</td>
                        <td>Xml</td>
                        <td>
                          <p className="text-title mb-0">Oct 12, 2025</p>
                          <span>05:00:14 PM</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              {/* <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-04.jpg"
                                alt="img"
                              /> */}
                            </span>
                            <span className="avatar avatar-rounded">
                              {/* <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-28.jpg"
                                alt="img"
                              /> */}
                            </span>
                            <span className="avatar avatar-rounded">
                              {/* <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-14.jpg"
                                alt="img"
                              /> */}
                            </span>
                            <span className="avatar avatar-rounded">
                              {/* <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-15.jpg"
                                alt="img"
                              /> */}
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="rating-select me-2">
                              <Link to="#">
                                <i className="ti ti-star" />
                              </Link>
                            </div>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-center"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots fs-14" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-right p-3">
                                <li>
                                  <Link className="dropdown-item rounded-1" to="#">
                                    <i className="ti ti-trash me-2" />
                                    Permanent Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link className="dropdown-item rounded-1" to="#">
                                    <i className="ti ti-edit-circle me-2" />
                                    Restore File
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div
                        className="dataTables_info px-3"
                        id="DataTables_Table_0_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 - 5 of 5 entries
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div
                        className="dataTables_paginate paging_simple_numbers px-3"
                        id="DataTables_Table_0_paginate"
                      >
                        <ul className="pagination">
                          <li
                            className="paginate_button page-item previous disabled"
                            id="DataTables_Table_0_previous"
                          >
                            <Link
                              to="#"
                              aria-controls="DataTables_Table_0"
                              aria-disabled="true"
                              role="link"
                              data-dt-idx="previous"
                              tabIndex={-1}
                              className="page-link"
                            >
                              <i className="ti ti-chevron-left" />{" "}
                            </Link>
                          </li>
                          <li className="paginate_button page-item active">
                            <Link
                              to="#"
                              aria-controls="DataTables_Table_0"
                              role="link"
                              aria-current="page"
                              data-dt-idx={0}
                              tabIndex={0}
                              className="page-link"
                            >
                              1
                            </Link>
                          </li>
                          <li
                            className="paginate_button page-item next disabled"
                            id="DataTables_Table_0_next"
                          >
                            <Link
                              to="#"
                              aria-controls="DataTables_Table_0"
                              aria-disabled="true"
                              role="link"
                              data-dt-idx="next"
                              tabIndex={-1}
                              className="page-link"
                            >
                              <i className="ti ti-chevron-right" />
                            </Link>
                          </li>
                        </ul>
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

export default Documents;