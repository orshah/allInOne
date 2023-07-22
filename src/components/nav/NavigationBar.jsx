import React from "react";
import { Link } from "react-router-dom";
import "./navigationBar.style.css";

function nav() {
  return (
    <div className="navigation-bar__container">
      <Link to="/">
        <h2 className="navigation-bar__text">HOME</h2>
      </Link>
      <Link to="/checkoutform">
        <h2 className="navigation-bar__text">CHECK OUT</h2>
      </Link>
      <Link to="/counterapp">
        <h2 className="navigation-bar__text">COUNTER APP</h2>
      </Link>
      <Link to="/cssboxes">
        <h2 className="navigation-bar__text">CSS BOXES</h2>
      </Link>
      <Link to="/fetchdog">
        <h2 className="navigation-bar__text">FETCH DOG</h2>
      </Link>
      <Link to="/todoapp">
        <h2 className="navigation-bar__text">TO DO</h2>
      </Link>
      <Link to="/fetchapi">
        <h2 className="navigation-bar__text">FETCH API</h2>
      </Link>
    </div>
  );
}

export default nav;
