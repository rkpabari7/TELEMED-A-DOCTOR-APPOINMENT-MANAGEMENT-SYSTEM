import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResentAppointmentTableData from "../Containers/ResentAppointmentTableData";
const Swal = require("sweetalert2");

const Profile = () => {
  const [status, setstatus] = useState("");
  let userDetails = JSON.parse(localStorage.getItem("userdetails"));

  const handleSubmit = (e) => {
    setstatus(e.target.value);
    userDetails.status = e.target.value;
    localStorage.setItem("userdetails", JSON.stringify(userDetails));
    const formData = new FormData();
    formData.append("status", e.target.value);
    formData.append("id", localStorage.getItem("id"));

    const AddUserUrl = `http://localhost:5000/update/status`;
    axios
      .post(AddUserUrl, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.success == true) {
          Swal.fire({
            icon: "success",
            title: "Status Updated Successfully",
            showConfirmButton: true,
          });
          // window.location.href=window.location.href;
        }
      });
  };

  return (
    <>
      <div className="card col-4 ms-auto me-auto mt-5 mb-5 p-4 profilecard">
        <div className="mx-auto d-block">
          <img
            className="card-img-top imagecss"
            src={`http://localhost:5000/${userDetails.Image}`}
            alt="Card image "
          />
        </div>
        {localStorage.getItem("admin") == "2" ? (
          <div className="ms-auto me-auto mt-4">
            <select
              onChange={(e) => handleSubmit(e)}
              value={userDetails.status}
              // style={{ width: "30%" }}
              className="form-select bg-info text-white">
              <option value="Available">Available</option>
              <option value="UnAvailable">UnAvailable</option>
            </select>
          </div>
        ) : (
          ""
        )}
        <div className="card-body">
          <span className="card-title">
            <div className="row">
              <div className="col-md-5">
                <label className="text-info">Name :</label>&emsp;
                <span className="doctoredetail">{userDetails.FirstName}</span>
              </div>
              <div className="col-md-7">
                <label className="text-info">Email :</label>&emsp;
                <span className="doctoredetail">{userDetails.Email}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <label className="text-info">Gender :</label>&emsp;
                <span className="doctoredetail">{userDetails.Gender}</span>
              </div>
              <div className="col-md-7">
                <label className="text-info">Number :</label>&emsp;
                <span className="doctoredetail">{userDetails.Number}</span>
              </div>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};
export default Profile;
