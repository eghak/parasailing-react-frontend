import React from "react";
import { Link } from "react-router-dom";
import "./Video.css";
import parasailingVideo from "../assets/parasailing.mp4"

function Video() {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={parasailingVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>THE ISLAND'S NO.1 PARASAILING</h1>
        <p>see the island's beauty from the sky!</p>
        <div>
          <Link to="/packages" className='btn'>Packages</Link>
          <Link to="/contact" className='btn btn-light'>contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Video;
