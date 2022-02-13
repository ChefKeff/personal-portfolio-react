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

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <Link to={"/"}>
            <div className="nameDiv">niklas norinder</div>
          </Link>
        </header>
        <div id="main">
          <Routes>
            <Route exact path="/" element={<Menu />} />
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
