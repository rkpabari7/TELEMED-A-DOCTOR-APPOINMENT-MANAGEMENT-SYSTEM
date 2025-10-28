import axios from "axios";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TeamBox from "../Containers/TeamBox";
import ManageApp from "./ManageApp";

const Team = () => {
  const [DoctorList,setDoctorList] = useState([]);
  const getDoctorList = () => {
    
    
    const formData = new FormData();
    const AddUserUrl = `http://localhost:5000/detail/doctor`;
    axios
      .post(AddUserUrl, formData, {
        headers: {

          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.success == true) {
          console.log(response.data.result);
          setDoctorList(response.data.result)
        }
      });

  }
  useEffect(() => {
    getDoctorList();
    
  }, []);
  return (
    <>
      <div class="container-fluid bg-primary py-5 hero-header mb-5">
        <div class="row py-3">
          <div class="col-12 text-center">
            <h1 class="display-3 text-white animated zoomIn">Dentist</h1>
            <Link to="/" class="h4 text-white">
              Home
            </Link>
            <i class="far fa-circle text-white px-2"></i>
            <Link to="/team" class="h4 text-white">
              Dentist
            </Link>
          </div>
        </div>
      </div>
      <div>
        
<ManageApp/>
    </div>
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
              <TeamBox prod={DoctorList}/>
           
            
          </div>
        </div>
      </div>
    </>
  );
};
export default Team;
