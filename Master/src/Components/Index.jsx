import React from "react";
import { Link } from "react-router-dom";
import TeamBox from "../Containers/TeamBox";

const Index = () => {
  return (
    <>
      {/* <!-- Carousel Start --> */}
      <div className="container-fluid p-0">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100"
                src={require("../Assets/img/carousel-1.jpg")}
                alt="Image"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Keep Your Teeth Healthy
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Take The Best Quality Dental Treatment
                  </h1>
                  <Link
                    to="/contact"
                    className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100"
                src={require("../Assets/img/carousel-2.jpg")}
                alt="Image"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Keep Your Teeth Healthy
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Take The Best Quality Dental Treatment
                  </h1>
                  <a
                    href="contact.html"
                    className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <!-- Carousel End --> */}

      {/* <!-- Banner Start --> */}
      <div className="container-fluid banner mb-5">
        <div className="container">
          <div className="row gx-0">
            <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
              <div
                className="bg-primary d-flex flex-column p-5"
                style={{ height: "300px" }}
              >
                <h3 className="text-white mb-3">Opening Hours</h3>
                <div className="d-flex justify-content-between text-white mb-3">
                  <h6 className="text-white mb-0">Mon - Fri</h6>
                  <p className="mb-0">8:00am - 9:00pm</p>
                </div>
                <div className="d-flex justify-content-between text-white mb-3">
                  <h6 className="text-white mb-0">Saturday</h6>
                  <p className="mb-0">8:00am - 7:00pm</p>
                </div>
                <div className="d-flex justify-content-between text-white mb-3">
                  <h6 className="text-white mb-0">Sunday</h6>
                  <p className="mb-0">8:00am - 5:00pm</p>
                </div>
                <Link className="btn btn-light" to="/appointment">
                  Appointment
                </Link>
              </div>
            </div>
            <div className="col-lg-6 wow zoomIn" data-wow-delay="0.6s">
              <div
                className="bg-secondary d-flex flex-column p-5"
                style={{ height: "300px" }}
              >
                <h3 className="text-white mb-3">Make Appointment</h3>
                <p className="text-white">
                  Ipsum erat ipsum dolor clita rebum no rebum dolores labore,
                  ipsum magna at eos et eos amet.
                </p>
                <h2 className="text-white mb-0">+91 9887456321</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Banner Start --> */}

      {/* <!-- About Start --> */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title mb-4">
                <h5 className="position-relative d-inline-block text-primary text-uppercase">
                  About Us
                </h5>
                <h1 className="display-5 mb-0">
                  The World's Best Dental Clinic That You Can Trust
                </h1>
              </div>
              <h4 className="text-body fst-italic mb-4">
                Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no
                lorem sit clita duo justo magna dolore
              </h4>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor eirmod magna dolore erat amet
              </p>
              <div className="row g-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                  <h5 className="mb-3">
                    <i className="fa fa-check-circle text-primary me-3"></i>
                    Award Winning
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check-circle text-primary me-3"></i>
                    Professional Staff
                  </h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                  <h5 className="mb-3">
                    <i className="fa fa-check-circle text-primary me-3"></i>24/7
                    Opened
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check-circle text-primary me-3"></i>Fair
                    Prices
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-5" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src={require("../Assets/img/about.jpg")}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Service Start --> */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5 mb-5">
            <div
              className="col-lg-5 wow zoomIn"
              data-wow-delay="0.3s"
              style={{ minHeight: "400px" }}
            >
              <div className="twentytwenty-container position-relative h-100 rounded overflow-hidden">
                <img
                  className="position-absolute w-100 h-100"
                  src={require("../Assets/img/before.jpg")}
                  style={{ objectFit: "cover" }}
                />
                <img
                  className="position-absolute w-100 h-100"
                  src={require("../Assets/img/after.jpg")}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="section-title mb-5">
                <h5 className="position-relative d-inline-block text-primary text-uppercase">
                  Our Services
                </h5>
                <h1 className="display-5 mb-0">
                  We Offer The Best Quality Dental Services
                </h1>
              </div>
              <div className="row g-5">
                <div
                  className="col-md-6 service-item wow zoomIn"
                  data-wow-delay="0.6s"
                >
                  <div className="rounded-top overflow-hidden">
                    <img
                      className="img-fluid"
                      src={require("../Assets/img/service-1.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Cosmetic Dentistry</h5>
                  </div>
                </div>
                <div
                  className="col-md-6 service-item wow zoomIn"
                  data-wow-delay="0.9s"
                >
                  <div className="rounded-top overflow-hidden">
                    <img
                      className="img-fluid"
                      src={require("../Assets/img/service-2.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Dental Implants</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-7">
              <div className="row g-5">
                <div
                  className="col-md-6 service-item wow zoomIn"
                  data-wow-delay="0.3s"
                >
                  <div className="rounded-top overflow-hidden">
                    <img
                      className="img-fluid"
                      src={require("../Assets/img/service-3.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Dental Bridges</h5>
                  </div>
                </div>
                <div
                  className="col-md-6 service-item wow zoomIn"
                  data-wow-delay="0.6s"
                >
                  <div className="rounded-top overflow-hidden">
                    <img
                      className="img-fluid"
                      src={require("../Assets/img/service-4.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Teeth Whitening</h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 service-item wow zoomIn"
              data-wow-delay="0.9s"
            >
              <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
                <h3 className="text-white mb-3">Make Appointment</h3>
                <p className="text-white mb-3">
                  Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor
                  est magna stet eirmod
                </p>
                <h2 className="text-white mb-0">+91 9887456321</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}

      
      
      
      
      {/* <!-- Team Start --> */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
              <div className="section-title bg-light rounded h-100 p-5">
                <h5 className="position-relative d-inline-block text-primary text-uppercase">
                  Our Dentist
                </h5>
                <h1 className="display-6 mb-4">
                  Meet Our Certified & Experienced Dentist
                </h1>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}
    </>
  );
};
export default Index;
