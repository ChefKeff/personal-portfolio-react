import React, { Component } from "react";
import "./css/infopage.css";
import "./css/lists.css";

class Merits extends Component {
  render() {
    return (
      <div className="mainContent mainList">
        <div id="innerOtherDiv">
          <ul>
            <li className="rili">
              <span>
                <p>
                  <span> LANGUAGE </span>{" "}
                </p>
                <p> Swedish </p>
                <p> Native. </p>
                <p> English </p>
                <p> Fluent. 112/120 on the TOEFL in January 2021. </p>
                <p> Japanese </p>
                <p>
                  {" "}
                  Conversational, not yet fluent. Aspirations to reach JPLT N1
                  level.{" "}
                </p>
              </span>
            </li>
            <li className="rili">
              <span>
                <p>
                  <span> DEVELOPMENT </span>{" "}
                </p>
                <p> Front end </p>
                <p> JavaScript, TypeScript, Vue </p>
                <p> HTML </p>
                <p> CSS </p>
                <p> Back end</p>
                <p> SQLServer, MySQL </p>
                <p> NodeJS </p>
                <p> Other languages</p>
                <p> Python </p>
                <p> R </p>
                <p> Matlab </p>
                <p> Java </p>
              </span>
            </li>
          </ul>

          <ul>
            <li className="leli">
              <span>
                <p>
                  <span> MUSIC PRODUCTION </span>{" "}
                </p>
                <p> Software </p>
                <p>
                  {" "}
                  Ableton Live, Native Instruments Traktor, UAD Console,
                  Melodyne{" "}
                </p>
                <p> Hardware </p>
                <p>
                  {" "}
                  UAD Hardware (Apollo Twin), Tascam racks, mixer knowledge{" "}
                </p>
              </span>
            </li>
            <li className="leli">
              <span>
                <p>
                  <span> VOLUNTEERING </span>{" "}
                </p>
                <p> Engineers Without Borders Sweden </p>
                <p>
                  {" "}
                  Active in the Uppsala managing group. Head of The Reflective
                  Engineer, managing a team of around 8 people.{" "}
                </p>
                <p> UTN - Faculty Student Union </p>
                <p>
                  {" "}
                  Fadderkå. Responsible for the buddy-program for one of the
                  engineering programs at Uppsala University.{" "}
                </p>
                <p>
                  {" "}
                  Managing around 60 volunteers and 90 new students. In an event
                  reaching more than 1200 people.{" "}
                </p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Merits;
