import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Swal = require("sweetalert2");
const Register = () => {
  const navigate = useNavigate();

  const [FirstName, setFirstname] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [Gender, setGender] = React.useState("");
  const [Address, setAddress] = React.useState("");
  const [Number, setNumber] = React.useState("");

  const HandleSignup = (e) => {
    e.preventDefault();
    if (
      FirstName === "" ||
      Password === "" ||
      Gender === "" ||
      Email === "" ||
      Address  === "" ||
      Number === ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "Please Enter Valid Details",
        showConfirmButton: true,
      });
      return false;
    }
    const PostData = {
      FirstName: FirstName,
      Email: Email,
      Password: Password,
      Gender: Gender,
      Address: Address,
      Number: Number,
    };

    const SignUpURL = `http://localhost:5000/signup`;

    axios
      .post(SignUpURL, PostData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.success === true) {
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/login");
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
      <div class="container-fluid bg-primary py-5 hero-header mb-5">
        <div class="row py-3">
          <div class="col-12 text-center">
            <h1 class="display-3 text-white animated zoomIn">Register</h1>
            <Link to="/" class="h4 text-white">
              Home
            </Link>
            <i class="far fa-circle text-white px-2"></i>
            <Link to="/register" class="h4 text-white">
              Register
            </Link>
          </div>
        </div>
      </div>

      <div
        class="col-xl-4 col-lg-6 wow slideInUp me-auto ms-auto"
        data-wow-delay="0.3s"
      >
        <form onSubmit={HandleSignup}>
          <div class="row g-3">
            <div class="col-12">
              <input
                type="text"
                class="form-control border-0 bg-light px-4"
                placeholder="Your Name"
                style={{ height: "55px" }}
                value={FirstName}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div class="col-12">
              <input
                type="number"
                class="form-control border-0 bg-light px-4"
                placeholder="Your Contect Number"
                style={{ height: "55px" }}
                value={Number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div class="col-12">
              <input
                type="email"
                class="form-control border-0 bg-light px-4"
                placeholder="Your Email"
                style={{ height: "55px" }}
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="col-12">
              <input
                type="password"
                class="form-control border-0 bg-light px-4"
                placeholder="Your Password"
                style={{ height: "55px" }}
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="col-12">
              <label class="form-check-label" for="flexRadioDefault2">
                Gender{" "}
              </label>
              &emsp;&emsp;&emsp;
              <input 
              onChange={(e) => setGender(e.target.value)} type="radio" name="gender" value="male" />

              <label class="form-check-label" for="flexRadioDefault2">
                Male{" "}
              </label>
              &emsp;&emsp;
              <input 
              onChange={(e) => setGender(e.target.value)} type="radio" name="gender" value="Female" />

              <label class="form-check-label" for="flexRadioDefault2">
                Female
              </label>
            </div>
            <div class="col-12">
              <textarea
                class="form-control border-0 bg-light px-4 py-3"
                rows="3"
                placeholder="Address"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
            <span>
              Already have an Account <Link to="/login"> Login Now</Link>
            </span>
            <div class="col-12">
              <button class="btn btn-primary w-100 py-3" type="submit">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Register;
