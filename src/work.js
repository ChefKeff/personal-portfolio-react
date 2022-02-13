import React, { Component } from "react";
import "./css/infopage.css";
import "./css/lists.css";

class Work extends Component {
  render() {
    return (
      <div className="mainContent mainList">
        <ul id="workUl">
          <li>
            <span>
              <b>
                Teaching Assistant (programming) <br></br>Uppsala University
              </b>
              <br></br>Helping students with understanding and writing code in
              Python and Java. Part-time during my studies.
              <br></br>
              <br></br>
              January 2022 - Present
              <br></br>
              <br></br>
            </span>
          </li>
          <li>
            <span>
              <b>
                It Intern <br></br>Vasakronan
              </b>
              <br></br>Developing an IoT solution for displaying indoor
              temperature, CO2, TVOC and Humidity, for internal use at
              Vasakronan. The project is written in JavaScript and mainly
              TypeScript. Connecting several different IoT APIs on a single
              webpage.
              <br></br>
              <br></br>
              March 2021 - August 2021
              <br></br>
              <br></br>
              <i>
                This project started as a bachelor's thesis, later developing
                into a full fledged internship.
              </i>
              <br></br>
              <br></br>
            </span>
          </li>

          <li>
            <span>
              <b>Freelance Music Producer</b>
              <br></br>I run a one-man company doing some music production,
              mixing, mastering and DJing. Since the start in 2018, I have
              accumulated over 10.000.000 streams on my music on services like
              Spotify and Apple Music. More information, as well as soundbites,
              can be found in the "media" section of this website. <br></br>
              <br></br>
            </span>
          </li>

          <li>
            <span>
              <b>
                Baggage Handling <br></br>Aviator
              </b>
              <br></br>
              Managing the luggage for Aviator at Arlanda airport. <br></br>
              <br></br>
              May 2019 - August 2019 <br></br>
              <br></br>
            </span>
          </li>

          <li>
            <span>
              <b>
                Substitute Teacher<br></br>Halmstad Kommun
              </b>
              <br></br>
              Substituting for classes 1 through 5 (7 year to 11 year old
              students) mainly.
              <br></br>
              <br></br>November 2017 - March 2018 <br></br>
              <br></br>
            </span>
          </li>

          <li>
            <span>
              <b>
                Storage<br></br>Höganäs
              </b>
              <br></br>
              Responsible for keeping inventory and accepting deliveries at
              Höganäs Halmstadbruken. <br></br>
              <br></br>June 2017 - August 2017
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Work;
