import React, { Component } from "react";
import "./css/infopage.css";
import "./css/lists.css";

class Education extends Component {
  render() {
    return (
      <div className="mainList mainContent">
        <ul>
          <li>
            <span>
              <b>
                M.Sc. Sociotechnical Engineering<br></br>Uppsala University
              </b>
              <br></br>A master of science in engineering at Uppsala University.
              The Sociotechnical Systems Engineering program is quite unique, as
              it is one of the few programs that combines IT and tech with
              social studies. My studies are focused a lot on the cross-section
              between humans and tech.
              <br></br>
              <br></br>August 2018 - now
              <br></br>
              <br></br>
            </span>
          </li>

          <li>
            <span>
              <b>
                Natural Sciences<br></br>Kattegattgymnasiet
              </b>
              <br></br>Before starting at Uppsala University I attended
              Kattegattgymnasiet (Kattegatt High School) in my hometown of
              Halmstad and studied natural sciences. I was particularly fond of
              mathematics and physics. <br></br>
              <br></br>August 2013 - June 2017
              <br></br>
              <br></br>
            </span>
          </li>

          <li>
            <span>
              <b>
                Rotary Youth Exchange<br></br>皇學館高等学校
              </b>
              <br></br>
              In the midst of my high school career I decided to go on an
              exchange to Japan trough Rotary. I attended 皇學館高等学校
              (Kogakkan High School) in Ise city, Mie prefecture for one year
              between my second and third year of high school.
              <br></br>
              <br></br>
              August 2015 - June 2016
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Education;
