import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useRazorpay from "react-razorpay";

const Swal = require("sweetalert2");

const Appointment = () => {
  const Razorpay = useRazorpay();

  const [DoctorList, setDoctorList] = useState([]);
  const [Specialist, setSpecialist] = useState("");
  const [DoctorId, setDoctorId] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Description, setDescription] = useState("");
  const [CustomerNumber, setCustomerNumber] = useState("");
  
  
  const getDoctorFromSpecialist = (e) => {
    e.preventDefault();
    setSpecialist(e.target.value);
    const formData = new FormData();
    formData.append("Specialist", e.target.value);
    const AddUserUrl = `http://localhost:5000/getDoctorFromSpecialist`;
    axios
      .post(AddUserUrl, formData, {
        headers: {

          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.success == true) {
          setDoctorList(response.data.result)
        }
      });

  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (
      Name === "" ||
      Description === "" ||
      CustomerNumber === "" ||
      Email === "" ||
      time  === "" ||
      date === ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "Please Enter Valid Details",
        showConfirmButton: true,
      });
      return false;
    }
    const formData = new FormData();
    formData.append("Specialist", Specialist);
    formData.append("Name", Name);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("Email", Email);
    formData.append("DoctorId", DoctorId);
    formData.append("description",Description);
    formData.append("CustomerNumber",CustomerNumber);
    formData.append("user_id", localStorage.getItem('id'));
    const AddUserUrl = `http://localhost:5000/add/appointment`;
    axios
      .post(AddUserUrl, formData, {
        headers: {

          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.success == true) {
        //  window.location.href=window.location.href;
        
        const options = {
          key: "rzp_test_qDwTmKnksUVsaC", // Enter the Key ID generated from the Dashboard
          amount: "20000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: Name,
          description: "Test Transaction",
          // order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
          handler: function (res) {
            const formData = {
              razorpay_payment_id:res.razorpay_payment_id,
              payment_status:"Success",
              id:response.data.result.insertId
            }
            const AddUserUrl = `http://localhost:5000/update/appointmentStatus`;
            axios
              .post(AddUserUrl, formData, {
                headers: {
                  Accept: "auth",
                  "Content-Type": "application/json",
                },
              })
              .then((response) => {
                window.location.href = "/resentappointment";
                // navigate("/recentbooking");
              });    
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
    
        const rzp1 = new Razorpay(options);
    
    
        rzp1.open();
        }else{
          Swal.fire({
            icon: "warning",
            title: response.data.message,
            showConfirmButton: true,
          });
        }
      }).catch((err) => {
          Swal.fire({
            icon: "warning",
            title: err.response.data.message,
            showConfirmButton: true,
          });
      });

  }
  return (
    <>
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">
              Appointment
            </h1>
            <Link to="/" className="h4 text-white">
              Home
            </Link>
            <i className="far fa-circle text-white px-2"></i>
            <Link to="/appointment" className="h4 text-white">
              Appointment
            </Link>
          </div>
        </div>
      </div>

      <div
        className="container-fluid bg-primary bg-appointment mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ marginTop: "90px" }}
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 py-5">
              <div className="py-5">
                <h1 className="display-5 text-white mb-4">
                  We Are A Certified and Award Winning Dental Clinic You Can
                  Trust
                </h1>
                <p className="text-white mb-0">
                  Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing
                  kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo
                  ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et
                  dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut
                  dolores magna sit. Sea dolore sanctus sed et. Takimata
                  takimata sanctus sed.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
                data-wow-delay="0.6s"
              >
                <h1 className="text-white mb-4">Make Appointment</h1>
                <form onSubmit={HandleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <select
                        style={{ height: "55px" }} className="form-select bg-light border-0" onChange={getDoctorFromSpecialist}>
                        <option value="">
                          Select Any One
                        </option>

                        <option value="General Dentist">
                          General Dentist
                        </option>

                        <option value="Orthodontist">
                          Orthodontist
                        </option>

                        <option value="Prosthodontist">
                          Prosthodontist
                        </option>


                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select bg-light border-0"
                        style={{ height: "55px" }}
                        value={DoctorId}
                        onChange={(e) => setDoctorId(e.target.value)}

                      ><option value="">Select Any One</option>
                        {

                          DoctorList.map((item, i) => {
                            return (

                              <option value={item.id}>{item.FirstName}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Your Name"
                        style={{ height: "55px" }}
                        value={Name}
                        onChange={(e) => setName(e.target.value)}

                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <textarea
                        className="form-control bg-light border-0"
                        placeholder="Description"
                        style={{ height: "55px" }}
                        value={Description}
                        onChange={(e) => setDescription(e.target.value)}

                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="number"
                        className="form-control bg-light border-0"
                        placeholder="Your Number"
                        style={{ height: "55px" }}
                        value={CustomerNumber}
                        onChange={(e) => setCustomerNumber(e.target.value)}

                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        placeholder="Your Email"
                        style={{ height: "55px" }}
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}

                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <div
                        className="date"
                        id="date1"
                        data-target-input="nearest"
                      >
                        <input
                          type="date"
                          className="form-control bg-light border-0 datetimepicker-input"
                          placeholder="Appointment Date"
                          data-target="#date1"
                          data-toggle="datetimepicker"
                          style={{ height: "55px" }}
                          value={date}
                          onChange={(e) => setdate(e.target.value)}

                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div
                        className="time"
                        id="time1"
                        data-target-input="nearest"
                      >
                        <select 
                          onChange={(e) => settime(e.target.value)}
                          style={{ height: "55px" }} className="form-control bg-light border-0 datetimepicker-input">
                          <option value="">Select Any One</option>
                          <option value="Morning">Morning</option>
                          <option value="AfterNoon">After Noon</option>
                          <option value="Evening">Evening</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-dark w-100 py-3" type="submit">
                        Make Appointment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default Appointment;
