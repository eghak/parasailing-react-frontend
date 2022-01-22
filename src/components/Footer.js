import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
  FaInstagramSquare
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">

        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <div>
              <p>123 South Shore Street</p>
              <h4>The Island State</h4>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              1-800-123-4567
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              parasailing@parasailing.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About Us</h4>
          <p>Established in 2000, PARASAILING offers unforgettable memories for adventures from around the world.</p>
          <div className="social">
            <FaFacebook
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaTwitter
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <FaInstagramSquare
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
