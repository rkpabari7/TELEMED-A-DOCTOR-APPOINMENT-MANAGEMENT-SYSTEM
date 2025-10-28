import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Swal = require("sweetalert2");
const Login = () => {
  const navigate = useNavigate()

  // const [loginError, setLoginError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmitClick = (e) => {
    e.preventDefault();

    const userData = {
      Email: email,
      Password: password,
    };
    // console.log(userData);

    const LoginUrl = `http://localhost:5000/user_login`;
    axios
      .post(LoginUrl, JSON.stringify(userData), {
        headers: {
          Accept: "auth",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const login = response.data;
        if (login.success === true) {
          localStorage.clear();
          localStorage.setItem("email", login.result.Email);
          localStorage.setItem("userdetails",JSON.stringify(login.result));
          localStorage.setItem("id", login.result.id);
          localStorage.setItem("admin", login.result.admin);

          navigate("/")
          // store.set("token", login.token);
          // store.set("user", email);
          // store.set("role", login.result.role);
          // router.push("/employeedetail");
        }else{
          localStorage.clear();
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
            <h1 className="display-3 text-white animated zoomIn">Login</h1>
            <Link to="/" className="h4 text-white">
              Home
            </Link>
            <i className="far fa-circle text-white px-2"></i>
            <Link to="/login" className="h4 text-white">
              Login
            </Link>
          </div>
        </div>
      </div>

      <div
        className="col-xl-4 col-lg-6 wow slideInUp me-auto ms-auto"
        data-wow-delay="0.3s"
      >
        <form onSubmit={handleSubmitClick}>
          <div className="row g-3">
            <div className="col-12">
              <input
                type="email"
                className="form-control border-0 bg-light px-4"
                placeholder="Your Email"
                style={{ height: "55px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}

/>
            </div>
            <div className="col-12">
              <input
                type="password"
                className="form-control border-0 bg-light px-4"
                placeholder="Your Password"
                style={{ height: "55px" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                
              />
            </div>
            <span>
              Don,t have an Account <Link to="/register"> Register Now</Link>
            </span>
            <div className="col-12">
              <button className="btn btn-primary w-100 py-3" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
