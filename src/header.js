import React, { Component } from "react";
import Menu from "./menu";
import { Squash as Hamburger } from "hamburger-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Browser,
} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header sticky transparentHeader" id="header">
        <div id="headerDiv">
          <div id="burgerWrap">
            <Hamburger
              onToggle={(toggled) => {
                if (toggled) {
                  if (
                    document
                      .getElementById("mainMenu")
                      .classList.contains("hideMenu")
                  ) {
                    document
                      .getElementById("mainMenu")
                      .classList.remove("hideMenu");
                    document
                      .getElementById("header")
                      .classList.remove("transparentHeader");
                    document
                      .getElementById("headerName")
                      .classList.remove("blackName");
                  }
                  document.getElementById("mainMenu").classList.add("showMenu");
                  document
                    .getElementById("header")
                    .classList.add("yellowHeader");
                  document
                    .getElementById("headerName")
                    .classList.add("blackName");
                  document.getElementById("burgerWrap").style.color = "black";
                  document.getElementById(
                    "burgerWrap"
                  ).style.transitionDuration = "0.5s";
                } else {
                  document
                    .getElementById("mainMenu")
                    .classList.remove("showMenu");
                  document.getElementById("mainMenu").classList.add("hideMenu");
                  document
                    .getElementById("header")
                    .classList.remove("yellowHeader");
                  document
                    .getElementById("headerName")
                    .classList.remove("blackName");
                  document
                    .getElementById("header")
                    .classList.add("transparentHeader");
                  document
                    .getElementById("headerName")
                    .classList.add("yellowName");
                  document.getElementById("burgerWrap").style.color = "white";
                  document.getElementById(
                    "burgerWrap"
                  ).style.transitionDuration = "0.5s";
                }
              }}
            />
          </div>
          <Link to={"/"}>
            <div id="headerName" className="nameDiv yellowName">
              niklas norinder
            </div>
          </Link>
        </div>
        <div id="mainMenu" className="hideMenu">
          <Routes>
            <Route exact path="/" element={<Menu />} />
            <Route exact path="/me" element={<Menu />} />
            <Route path="/work" element={<Menu />} />
            <Route path="/education" element={<Menu />} />
            <Route path="/merits" element={<Menu />} />
            <Route path="/media" element={<Menu />} />
            <Route path="/contact" element={<Menu />} />
          </Routes>
        </div>
      </header>
    );
  }
}

export default Header;
