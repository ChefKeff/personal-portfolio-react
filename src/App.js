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
          <span><Link to={'/'}><button>{textJson.aboutTitle}</button></Link></span>
          <span><Link to={'/work'}><button>{textJson.workTitle}</button></Link></span>
          <span><Link to={'/education'}><button>{textJson.eduTitle}</button></Link></span>
          <span><Link to={'/other'}><button>{textJson.otherTitle}</button></Link></span>
          <span><Link to={'/media'}><button>{textJson.mediaTitle}</button></Link></span>
          <span><Link to={'/contact'}><button>{textJson.contactTitle}</button></Link></span>
        </div>
      </div>
      <Routes>
        <Route exact path='/' element={<Welcome/>}/>
        <Route path='/work' element={<Work/>}/>
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
