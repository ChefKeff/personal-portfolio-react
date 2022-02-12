import React, { Component } from "react";
import "./css/infopage.css";
import "./css/lists.css";

class Work extends Component {
  render() {
    return (
      <div className="mainContent mainList">
        <ul id="workUl">
          <li>
            <p>
              <span> IT INTERN - VASAKRONAN </span>{" "}
            </p>
            <p className="txt">
              {" "}
              Developing an IoT solution for displaying indoor temperature, CO2,
              TVOC and Humidity, for internal use at Vasakronan. The project is
              written in JavaScript and mainly TypeScript. Connecting several
              different IoT APIs on a single webpage.{" "}
            </p>
            <p> March 2021 - August 2021 </p>
            <p className="it">
              {" "}
              This project started as a bachelor's thesis, later developing into
              a full fledged internship.{" "}
            </p>
          </li>

          <li>
            <span>
              <p>
                <span> FREELANCE MUSIC PRODUCER</span>
              </p>
              <p className="txt">
                {" "}
                I run a one-man company doing some music production, mixing,
                mastering and DJing. Since the start in 2018, I have accumulated
                over 10.000.000 streams on my music on services like Spotify and
                Apple Music. More information, as well as soundbites, can be
                found in the "media" section of this website.{" "}
              </p>
            </span>
          </li>

          <li>
            <span>
              <p>
                <span class="indent">BAGGAGE HANDLING - AVIATOR</span>{" "}
              </p>
              <p className="txt">
                {" "}
                Managing the luggage for Aviator at Arlanda airport.{" "}
              </p>
              <p> May 2019 - August 2019 </p>
            </span>
          </li>

          <li>
            <span>
              <p>
                <span>SUBSTITUTE TEACHER - HALMSTAD KOMMUN</span>{" "}
              </p>
              <p className="txt">
                {" "}
                Substituting for classes 1 through 5 (7 year to 11 year old
                students) mainly.{" "}
              </p>
              <p> November 2017 - March 2018 </p>
            </span>
          </li>

          <li>
            <span>
              <p>
                <span> STORAGE - HÖGANÄS</span>{" "}
              </p>
              <p className="txt">
                {" "}
                Responsible for keeping inventory and accepting deliveries at
                Höganäs Halmstadbruken.{" "}
              </p>
              <p> June 2017 - August 2017 </p>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Work;
