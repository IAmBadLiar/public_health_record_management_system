import React from "react";
import Navbar from "../components/landingPage/Navbar";
import Vector from "../assets/img/landingPage/vector.svg";
import Login from "../components/landingPage/Login";
import Footer from "../components/landingPage/Footer";

import About from "../components/landingPage/About";
import Contact from "../components/landingPage/Contact";
import RegisterPatient from "../components/landingPage/RegisterPatient";

export default function LandingPage() {
  return (
    <div className="h-screen max-h-min flex flex-col">
      <Navbar></Navbar>

      <div className="body lg:flex px-16 w-full lg:h-5/6 ">
        <img src={Vector} alt="Graphics" className="lg:w-1/2 lg:my-auto lg:mx-auto mt-24" />
        <div className="lg:ml-auto lg:w-1/2 w-screen">
          <Login></Login>
        </div>
      </div>
      <div className="mt-auto relative bottom-0">
        <Footer></Footer>
      </div>
    </div>
  );
}
