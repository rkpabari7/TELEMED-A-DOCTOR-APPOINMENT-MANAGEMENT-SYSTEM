import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    window.location.assign("/")
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="m-0 text-primary">
            <i className="fa fa-tooth me-2"></i>DentCare
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/service" className="nav-item nav-link">
              Service
            </Link>

            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              
              <div className="dropdown-menu m-0">
                <Link to="/team" className="dropdown-item">
                  Our Dentist
                </Link>
                {localStorage.getItem('id') ? (<Link to="/resentappointment" className="dropdown-item">
                  Resent Appointment
                </Link>):('')}
                {localStorage.getItem('id') && localStorage.getItem('admin')!="1" ? (<Link to="/profile" className="dropdown-item">
              Profile
                </Link>):('')}
              
                {!localStorage.getItem('id') ? (
            <Link to="/login" className="dropdown-item">
              Login
            </Link>
          ) : (
          
          <Link onClick={logout} className="dropdown-item">
          Log Out
        </Link>
            
          
          )}              </div>
            </div>
            {localStorage.getItem('admin') !="1"?(<Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>):('')}
          </div>
          {localStorage.getItem('id') &&localStorage.getItem('admin')=="0" ? (<Link to="/appointment" className="btn btn-primary py-2 px-4 ms-3">
            Appointment
          </Link>):('')}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
