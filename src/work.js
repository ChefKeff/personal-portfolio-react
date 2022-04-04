import Hamburger from "hamburger-react";
import React, { Component } from "react";
import Header from "./header";

class Work extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="main">
          <div className="mainContent mainList">
            <span>
              <p>WORK & EXPERIENCE</p> <br></br>
              <b>Teaching Assistant (programming) - Uppsala University </b>
              Helping students with understanding and writing code in Python and
              Java. Part-time during my studies. <i>January 2022 - Present </i>
              <br></br>
              <b>It Intern - Vasakronan </b>
              Developing an IoT solution for displaying indoor temperature, CO2,
              TVOC and Humidity, for internal use at Vasakronan. The project is
              written in JavaScript and mainly TypeScript. Connecting several
              different IoT APIs on a single webpage.
              <i> March 2021 - August 2021 </i>
              <br></br>
              <b>Freelance Music Producer </b>I run a one-man company doing some
              music production, mixing, mastering and DJing. Since the start in
              2018, I have accumulated over 10.000.000 streams on my music on
              services like Spotify and Apple Music. More information, as well
              as soundbites, can be found in the "media" section of this
              website.
              <br></br>
              <b>Baggage Handling - Aviator </b>
              Managing the luggage for Aviator at Arlanda airport.
              <i> May 2019 - August 2019 </i>
              <br></br>
              <b>Substitute Teacher - Halmstad Kommun </b>
              Substituting for classes 1 through 5 (7 year to 11 year old
              students) mainly.
              <i>November 2017 - March 2018 </i>
              <br></br>
              <b>Storage - Höganäs </b>
              Responsible for keeping inventory and accepting deliveries at
              Höganäs Halmstadbruken.
              <i> June 2017 - August 2017</i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
