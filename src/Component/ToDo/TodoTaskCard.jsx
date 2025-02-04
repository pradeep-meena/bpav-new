
import React from 'react';
import { RxTextAlignLeft } from "react-icons/rx";
import { IoAttach } from "react-icons/io5";


const TaskCard = () => {
  return (
    <div className="card shadow-sm row-g-3">
      <div className="card-body">
        <h5 className="card-title">Complete New Website</h5>
        <p className="card-subtitle mb-2 text-muted">In Marketing Projects</p>

        <div className="mt-1">
          {/* Icon */}
          <RxTextAlignLeft />
          <IoAttach /> {"1"}
      
      <div className='d-flex justify-space-between mt-2'>
      <div
            className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center"
            style={{ width: '10px', height: '10px' }}
          >
            YO
          </div>

          {/* Date Range */}
          <div className="ms-3">
            <small className="text-muted">
              <i className="bi bi-calendar3"></i> 1 Jul - 4 Jul
            </small>
          </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
