import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResentAppointmentTableData from "../Containers/ResentAppointmentTableData";
const ResentAppointment = () => {
  const [appointMentList, setAppointMentList] = useState([]);
  const [time, settime] = useState("");
  const [date, setdate] = useState("");
  const handleSubmit = () => {
    setAppointMentList([]);
    const formData = new FormData();
    formData.append("time", time);
    formData.append("date", date);
    const AddUserUrl = `http://localhost:5000/getappointment`;
    axios
      .post(AddUserUrl, formData, {
        headers: {

          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.success == true) {
          setAppointMentList(response.data.result)
        }
      });

  }
  const getDoctorFromList = () => {


    const formData = new FormData();
    formData.append("id", localStorage.getItem('id'));
    formData.append("admin", localStorage.getItem('admin'));
    const AddUserUrl = `http://localhost:5000/recent/appointment`;
    axios
      .post(AddUserUrl, formData, {
        headers: {

          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.success == true) {
          setAppointMentList(response.data.result)
        }
      });

  }
  useEffect(() => {
    getDoctorFromList();

  }, []);
  return (
    <>
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">
              Resent Appointment
            </h1>
            <Link to="/" className="h4 text-white">
              Home
            </Link>
            <i className="far fa-circle text-white px-2"></i>
            <Link to="/resentappointment" className="h4 text-white">
              Resent Appointment
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
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
          <div class="col-md-3 mb-3">
            <select

              onChange={(e) => settime(e.target.value)}
              style={{ height: "55px" }} className="form-select bg-light border-0 datetimepicker-input">
              <option value="">Select Any One</option>
              <option value="Morning">Morning</option>
              <option value="AfterNoon">After Noon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div class="col-md-1 mb-3">
            <button onClick={handleSubmit} className="btn btn-dark w-100 py-1 mt-2">Filter</button>
          </div>
        </div>
        <table className="table table-primary">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Number</th>
              <th scope="col">Docter Name</th>
              <th scope="col">Resion</th>
              <th scope="col">Time</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Payment Id</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>


            <ResentAppointmentTableData prod={appointMentList} />



          </tbody>
        </table>
      </div>
    </>
  );
};
export default ResentAppointment;
