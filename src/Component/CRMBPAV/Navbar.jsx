import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">All Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/allquotes">ALL Quotes</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/invoicecard">Invoice Card</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/paymentlink1">Payment Link1</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/paymentlinklist">Payment Link List</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/newinvoice">New Invoice</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
