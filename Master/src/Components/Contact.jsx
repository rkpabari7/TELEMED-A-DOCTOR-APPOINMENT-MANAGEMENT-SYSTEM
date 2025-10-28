import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Swal = require("sweetalert2");
const Contact = () => {
  const [Name, setName] = React.useState("");
  const [Subject, setSubject] = React.useState("");
  const [Message, setMessage] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (
      Name === "" ||
      Subject === "" ||
      Message === "" ||
      Email === ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "Please Enter Valid Details",
        showConfirmButton: true,
      });
      return false;
    }
    // console.log(userData);
    const formData = new FormData();
    formData.append("Message", Message);
    formData.append("Number",Number);
    formData.append("Email", Email);
    formData.append("Name", Name);
    const AddUserUrl = `http://localhost:5000/add/contactus`;
    axios
      .post(AddUserUrl, formData, {
        headers: {
          Accept: "auth",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const login = response.data;
        if (login.success === true) {
          Swal.fire({
            icon: "success",
            title: "Request Sent  successfully",
            showConfirmButton: true,
          });
          window.location.href=window.location.href  
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: err.response.data.message,
          showConfirmButton: true,
        });
      });
  };
 
  return (
    <>
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">Contact Us</h1>
            <Link to="/" className="h4 text-white">
              Home
            </Link>
            <i className="far fa-circle text-white px-2"></i>
            <Link to="/contact" className="h4 text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-xl-4 col-lg-6 wow slideInUp"
              data-wow-delay="0.1s"
            >
              <div className="bg-light rounded h-100 p-5">
                <div className="section-title">
                  <h5 className="position-relative d-inline-block text-primary text-uppercase">
                    Contact Us
                  </h5>
                  <h1 className="display-6 mb-4">Feel Free To Contact Us</h1>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h5 className="mb-0">Our Office</h5>
                    <span>123 Street, Abc State, India</span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h5 className="mb-0">Email Us</h5>
                    <span>info@example.com</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h5 className="mb-0">Call Us</h5>
                    <span>+91 9887456321</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 wow slideInUp"
              data-wow-delay="0.3s"
            >
              <form onSubmit={handleSubmitClick}>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control border-0 bg-light px-4"
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
                    
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control border-0 bg-light px-4"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                    
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control border-0 bg-light px-4"
                      placeholder="Subject"
                      style={{ height: "55px" }}
                      value={Subject}
                      onChange={(e) => setSubject(e.target.value)}
                    
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control border-0 bg-light px-4 py-3"
                      rows="5"
                      placeholder="Message"
                      value={Message}
                      onChange={(e) => setMessage(e.target.value)}
                    
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="col-xl-4 col-lg-12 wow slideInUp"
              data-wow-delay="0.6s"
            >
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=india+(Your%20Business%20Name)&amp;t=p&amp;z=4&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                frameborder="0"
                style={{ minHeight: "400px", border: "0" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
