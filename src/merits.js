import React, { Component } from "react";
import "./css/infopage.css";
import "./css/lists.css";
import "./css/merits.css";

class Merits extends Component {
  render() {
    return (
      <div className="mainContent mainList">
        <div id="innerOtherDiv">
          <ul>
            <li className="rili">
              <span>
                <b>LANGUAGE </b>
                <br></br>
                Swedish - Native. <br></br>
                English - Professional (TOELF 112/120 January 2021) <br></br>
                Japanese - Conversational, not yet fluent. Aspirations to reach
                JPLT N1 level.
                <br></br>
                <br></br>
              </span>
            </li>
            <li className="rili">
              <span>
                <b>DEVELOPMENT </b> <br></br>
                <strong>Front end</strong>
                <br></br>
                <i>JavaScript, ReactJS, TypeScript, Vue, HTML, CSS</i> <br></br>
                <strong>Back end</strong>
                <br></br>
                <i>SQLServer, MySQL, NodeJS</i> <br></br>
                <strong>Other languages</strong> <br></br>
                <i>Python, R, Matlab, Java</i>
                <br></br>
                <br></br>
              </span>
            </li>

            <li className="leli">
              <span>
                <b>MUSIC PRODUCTION</b> <br></br>
                <strong>Software</strong>
                <br></br>
                <i>
                  Ableton Live, FL Studio, Native Instruments Traktor, UAD
                  Console, Melodyne
                </i>
                <br></br>
                <b>Hardware</b>
                <br></br>
                <i>UAD Hardware (Apollo Twin), Tascam racks, mixer knowledge</i>
                <br></br>
                <br></br>
              </span>
            </li>
            <li className="leli">
              <span>
                <b>VOLUNTEERING </b> <br></br>
                <strong>Engineers Without Borders Sweden</strong> <br></br>
                <i>
                  Active in the Uppsala managing group. Head of The Reflective
                  Engineer, managing a team of around 8 people.
                </i>
                <br></br>
                <strong>UTN - Faculty Student Union</strong>
                <br></br>
                <i>
                  Fadderkå. Responsible for the buddy-program for one of the
                  engineering programs at Uppsala University. Managing around 60
                  volunteers and 90 new students. In an event reaching more than
                  1200 people.
                </i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Merits;
