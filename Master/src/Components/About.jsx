import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">About Us</h1>
            <Link to="/" className="h4 text-white">
              Home
            </Link>
            <i className="far fa-circle text-white px-2"></i>
            <Link to="/about" className="h4 text-white">
              About
            </Link>
          </div>
        </div>
      </div>

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
                    <i className="fa fa-check-circle text-primary me-3"></i>Award
                    Winning
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
    </>
  );
};
export default About;
