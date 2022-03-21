import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Browser,
} from "react-router-dom";
import "./css/App.css";
import Work from "./work";
import Welcome from "./welcome";
import Menu from "./menu";
import Education from "./education";
import Merits from "./merits";
import Media from "./media";
import Contact from "./contact";
import Splash from "./splash";
import { Squash as Hamburger } from "hamburger-react";

function App() {
  return (
    <Router>
      <div className="App">
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
                    document
                      .getElementById("mainMenu")
                      .classList.add("showMenu");
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
                    document
                      .getElementById("mainMenu")
                      .classList.add("hideMenu");
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
        <div id="main">
          <Routes>
            <Route exact path="/" element={<Splash />} />
            <Route exact path="/me" element={<Welcome />} />
            <Route path="/work" element={<Work />} />
            <Route path="/education" element={<Education />} />
            <Route path="/merits" element={<Merits />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <footer>
        <div id="footerDiv">
          <a
            href="https://www.linkedin.com/in/niklas-norinder-90805b16a/"
            className="footerLink"
          >
            LinkedIn
          </a>
          <a href="https://github.com/ChefKeff" className="footerLink">
            GitHub
          </a>
          <a href="https://twitter.com/norinderniklas" className="footerLink">
            Twitter
          </a>
          <a href="https://instagram.com/clavibeats" className="footerLink">
            Instagram
          </a>
        </div>
      </footer>
    </Router>
  );
}

export default App;
