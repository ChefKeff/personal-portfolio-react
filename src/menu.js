import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/text.scss";

class Menu extends Component {
  render() {
    return (
      <ul className="Words highlighted">
        <li className="Words-line background-slide">
          <Link className="linkHeading" to={"/me"}>
            about me
          </Link>
        </li>
        <li className="Words-line background-slide">
          <Link className="linkHeading" to={"/work"}>
            work
          </Link>
        </li>
        <li className="Words-line background-slide">
          <Link className="linkHeading" to={"/education"}>
            education
          </Link>
        </li>
        <li className="Words-line background-slide">
          <Link className="linkHeading" to={"/merits"}>
            other merits
          </Link>
        </li>
        <li className="Words-line background-slide">
          <Link className="linkHeading" to={"/media"}>
            media
          </Link>
        </li>
        <li className="Words-line background-slide">
          <Link className="linkHeading" to={"/contact"}>
            contact
          </Link>
        </li>
      </ul>
    );
  }
}

export default Menu;
