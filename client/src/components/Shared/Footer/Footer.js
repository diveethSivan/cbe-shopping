import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="quote">* DREAM * BELIEVE * ACHIEVE</div>
      <div className="gst-number">GSTIN : 33HHCPS4911N1ZY</div>
    </footer>
  );
};

export default React.memo(Footer);
