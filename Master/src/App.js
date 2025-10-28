import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./Assets/css/bootstrap.min.css";
import "./Assets/css/style.css";

import Footer from "./Layouts/Footer";
import Navbar from "./Layouts/Navbar";

import Index from "./Components/Index";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Appointment from "./Components/Appointment";
import ResentAppointment from "./Components/ResentAppointment";
import Team from "./Components/Team";
import Service from "./Components/Service";
import TopBar from "./Layouts/TopBar";
import Profile from "./Components/Profile";

function App() {
  
  return (
    <>
      <Router>
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/appointment" exact element={<Appointment />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route
            path="/resentappointment"
            exact
            element={<ResentAppointment />}
          />
          <Route path="/team" exact element={<Team />} />
          <Route path="/service" exact element={<Service />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
