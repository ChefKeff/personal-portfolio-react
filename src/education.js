import React, { Component } from "react";
import "./css/infopage.css";
import "./css/lists.css";

class Education extends Component {
  render() {
    return (
      <div className="mainContent mainList">
        <ul>
          <li>
            <span>
              <p>
                <span>
                  {" "}
                  M.Sc. Sociotechnical Engineering - Uppsala University{" "}
                </span>{" "}
              </p>
              <p className="txt">
                {" "}
                A master of science in (civil) engineering at Uppsala
                University. The Sociotechnical Systems Engineering program is
                quite unique, as it is one of the few programs that combines IT
                and tech with social studies. My studies are focused a lot on
                the cross-section between humans and tech.{" "}
              </p>
              <p className="txt"> August 2018 - now </p>
            </span>
          </li>

          <li>
            <span>
              <p>
                <span> Natural Sciences - Kattegattgymnasiet</span>{" "}
              </p>
              <p className="txt">
                {" "}
                Before starting at Uppsala University I attended
                Kattegattgymnasiet (Kattegatt High School) in my hometown of
                Halmstad and studied natural sciences. I was particularly fond
                of mathematics and physics.
              </p>
              <p className="txt"> August 2013 - June 2017 </p>
            </span>
          </li>

          <li>
            <span>
              <p>
                <span> Rotary Youth Exchange - 皇學館高等学校</span>{" "}
              </p>
              <p className="txt">
                {" "}
                In the midst of my high school career I decided to go on an
                exchange to Japan trough Rotary. I attended 皇學館高等学校
                (Kogakkan High School) in Ise city, Mie prefecture for one year
                between my second and third year of high school.
              </p>
              <p className="txt"> August 2015 - June 2016 </p>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Education;
