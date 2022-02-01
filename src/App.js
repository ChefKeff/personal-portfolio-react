import * as language from "./language.js"
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Work from './work'
import Welcome from './welcome'

let textJson = language.setLang("se")
export{ textJson };

function App() {
  return (
    <Router>
    <div className="App">
      <header className="header">
        <Link to={"/"}>
        <div className="nameDiv">
          niklas norinder
        </div>
        </Link>
        <div className="langBtnDiv">
          <button className="langBtn">se</button>
          <button className="langBtn">eng</button>
          <button className="langBtn">日本語</button>
        </div>
      </header>
      <div id="main">
      <div className="sideMenuHolder">
        <div className="sideMenuList">
          <span><Link to={'/'}><button>me</button></Link></span>
          <span><Link to={'/work'}><button>work</button></Link></span>
          <span><Link to={'/education'}><button>edu</button></Link></span>
          <span><Link to={'/other'}><button>other</button></Link></span>
          <span><Link to={'/media'}><button>media</button></Link></span>
          <span><Link to={'/contact'}><button>contact</button></Link></span>
        </div>
      </div>
      <Routes>
        <Route exact path='/' element={<Welcome/>}/>
        <Route path='/work' element={<Work/>}/>
      </Routes>
      </div>
    <footer>
      <div id="footerDiv">
        <a href="https://www.linkedin.com/in/niklas-norinder-90805b16a/" className="footerLink">LinkedIn</a>
        <a href="https://github.com/ChefKeff" className="footerLink">GitHub</a>
        <a href="https://twitter.com/norinderniklas" className="footerLink">Twitter</a>
        <a href="https://instagram.com/clavibeats" className="footerLink">Instagram</a>
      </div>
    </footer>
    </div>
    </Router>
  );
}

export default App;
