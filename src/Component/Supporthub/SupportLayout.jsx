
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './HelpDesk'

const SupportLayout = () => {
  return (
    <div className="page-wrapper ">
    <div className="d-flex p-3">
      <Sidebar  />
      {/* <div className="flex-grow-1 d-flex flex-column border border-dark-300"> */}
        <Outlet />
        {/* <TableHeader />
        <TicketTable /> */}
      </div>
    </div>
  // </div>
  )
}

export default SupportLayout