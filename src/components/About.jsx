import React from "react";
import ketan from '../assets/ketan.jpg';
import reena from '../assets/reena.jpg';

const About = () => {
  return (
    <div className="about-section" style={{ paddingTop: "5px" }}>
      <div className="container">
        <div className="doctor-section">
          <div className="doctor-images" style={{ display: "flex" }}>
            <div style={{ marginRight: "40px" }}>
              <img
                src={ketan}
                className=""
                alt=""
                style={{ maxWidth: "225px", maxHeight: "225px" }}
              />
              <h3 style={{ textAlign: "left" }}>Dr. Ketan Patel</h3>
              <h5 style={{ textAlign: "left" }}>(M.S Ophthalmic Surgeon)</h5>
            </div>
            <div>
              <img
                src={reena}
                className=""
                alt=""
                style={{ maxWidth: "225px", maxHeight: "225px" }}
              />
              <h3 style={{ textAlign: "left" }}>Dr. Reena Patel</h3>
              <h5 style={{ textAlign: "left" }}>(M.S Ophthalmic Surgeon)</h5>
            </div>
          </div>
          <div className="doctor-info" style={{ display: "flex", flexDirection: "column", marginTop: "20px"}}>
            <p>Dr. Ketan Patel is a Veteran M.S Ophthalmic Surgeon with 25 years of experience in Phacosurgery and Cataract Operations.</p>
            <div className="contact-details">
              <div className="contact-item">
                <h5>Address</h5>
                <p><strong>
                <a href="https://maps.app.goo.gl/P8FxNfQNDn1uttgi9" target="_blank" style={{ textDecoration: 'underline', color: 'inherit' }}>
                  C/O Mona Eye Hospital, 1st Floor Ankshira Apartment, Kharivav Road, Raopura, Vadodara - 390001
                </a>
                </strong></p>
              </div>
              <div className="contact-item">
                <h5>Timings</h5>
                <p><strong>Mon - Sat:<br/>12:30 pm - 2:30 pm<br />5:30 pm - 7:00 pm<br />Sun: Closed</strong></p>
              </div>
              <div className="contact-item">
                <h5>Phone Numbers</h5>
                <p>
                  <strong>Dr Ketan Patel : </strong>(9824030154) <br />
                  <strong>Dr Reena Patel : </strong>(9898485037) <br />
                  <strong>Mona Eye Hospital : </strong>(02652412748) <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
