import React from "react";
import "./header.styles.css";

const Header = ({ size }) => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="title">
          <h2>Enye Customer Profiles</h2>
        </div>
        <div className="number">Number of Profiles : {size}</div>
      </div>
    </div>
  );
};

export default Header;
