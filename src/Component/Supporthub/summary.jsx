import React from 'react'
import { BsSquareHalf } from "react-icons/bs";

const summaryHeader = () => {
  return (
    <div className='bg-white p-4'>
        <div className='m-2 border-b-2 border-gray-200'>
        <BsSquareHalf />
        </div>
        <div className='d-flex justify-content-between'>
           <h4>Summary</h4>
           <button className='btn btn-primary'> ? </button>
        </div>
     

    </div>
  )
}

const Summary = () => {
  return (
    <div>
      <summaryHeader />
      <div>
        
      </div>
    </div>
  )
};

export default Summary;