import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./css/text.css";

class Menu extends Component {
  render() {
    return (
      <div className="mainMenu">
        <NavLink
          className="linkHeading"
          id="abt"
          onMouseenter={(this.bgColor = "black")}
          to={"/me"}
        >
          about <span id="meTxt">me</span>
        </NavLink>
        <NavLink className="linkHeading" id="wrk" to={"/work"}>
          work & experience
        </NavLink>
        <NavLink className="linkHeading" id="edu" to={"/education"}>
          education
        </NavLink>
        <NavLink className="linkHeading" id="edu" to={"/merits"}>
          other merits
        </NavLink>
        <NavLink className="linkHeading" id="media" to={"/media"}>
          media
        </NavLink>
        <NavLink className="linkHeading" id="cont" to={"/contact"}>
          contact
        </NavLink>
      </div>
    );
  }
}

export default Menu;
