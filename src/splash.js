import React, { Component } from "react";
import Header from "./header";

class Splash extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="main">
          <div className="mainContent">
            <div id="nameDiv">
              <h1 id="niklas">NIKLAS </h1>{" "}
              <h1 id="norinder">
                {" "}
                <span>NORINDER</span> <br></br> <span>NORINDER</span>
                <br></br>{" "}
                <span
                  style={{
                    color: "rgb(255, 255, 140)",
                    textDecoration: "underline",
                  }}
                >
                  NORINDER
                </span>
                <br></br> <span>NORINDER</span>
                <br></br> <span>NORINDER</span>
                <br></br> <span>NORINDER</span>
                <br></br> <span>NORINDER</span>
                <br></br> <span>NORINDER</span>
                <br></br> <span>NORINDER</span>
                <br></br> <span>NORINDER</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
