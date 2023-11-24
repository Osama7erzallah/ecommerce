import React from 'react'
import logo from './img/logo.png'
import { Link} from 'react-router-dom';

import "./Navbar.css"
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand nav_logo" href="#"><img src={logo} alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-5 ms-5">

            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categories</a>
            </li>


            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>


          </ul>
          
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <Link className="register_nav" to={`/register`} > register </Link>
            </li>
            <li className="nav-item ">
              <Link className="login_nav" to={`/login`} > login </Link>
            </li>
               
            
          </ul>

        </div>
      </div>
    </nav>
  )
}
