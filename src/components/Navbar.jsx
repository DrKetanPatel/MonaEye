import React, { useState } from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [copied3, setCopied3] = useState(false);

  const copyToClipboard = (phoneNumber, setCopied) => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div style={{ textAlign: "center", width: "100%" }}>
          <span
            className="logo"
            style={{
              fontSize: "2em", // Increase this value to make the text larger
              display: "inline-block",
              width: "100%",
            }}
          >
            Mona Eye Hospital
          </span>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <button
                className="navMenu"
                onClick={() => copyToClipboard("9824030154", setCopied1)}
              >
                {copied1 ? "Copied!" : "(9824030154)"}
              </button>
            </li>
            <li>
              <button
                className="navMenu"
                onClick={() => copyToClipboard("9898485037", setCopied2)}
              >
                {copied2 ? "Copied!" : "(9898485037)"}
              </button>
            </li>
            <li>
              <button
                className="navMenu"
                onClick={() => copyToClipboard("02652412748", setCopied3)}
              >
                {copied3 ? "Copied!" : "(02652412748)"}
              </button>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/P8FxNfQNDn1uttgi9"
                target="_blank"
                rel="noreferrer"
                className="navMenu"
              >
                Google Maps Location
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
