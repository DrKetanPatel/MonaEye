import React, { useState, useEffect } from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container text-center footer-element">
        <p>&copy; 2024 DR KETAN PATEL </p>
        {/* <div>
          <a
            href="/"
            rel="nofollow"
            style={{ marginLeft: "50px", marginRight: "50px" }}
          >
            PRIVACY POLICY
          </a>
          <a
            href="/"
            rel="nofollow"
          >
            TERMS & CONDITIONS
          </a>
        </div> */}
      </div>
      <div className="footer-content">
        <p>This website offers an easy way to contact Dr Ketan Patel and Dr Reena Patel, Veteran Ophthalmic Surgeons in Vadodara, Gujarat, India. Reach out via their phone numbers for emergencies or any consultations. Thank You!</p>
      </div>
    </div>
  );
};
export default Footer;
