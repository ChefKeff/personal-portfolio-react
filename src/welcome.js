import React, { Component } from "react";
import Header from "./header";

class Welcome extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="main">
          <div className="outerDiv">
            <div className="mainContent" id="welcomeCont">
              <div id="me"></div>
              <span>
                <p>About me</p>
                <div className="txt">
                  <span>
                    <br></br>Hello! My name is Niklas Norinder. <br></br>I am
                    currently studying my fourth year as a Sociotechnical
                    Systems Engineer at Uppsala University. Outside of my
                    studies I like to produce and create music, program, run and
                    hang out with my friends.Originally born and raised on the
                    Swedish west coast, in both Gothenburg and Halmstad, I
                    decided to spend a year abroad in Japan in high school to
                    broaden my horizons and try something new. The exchange had
                    a huge impact on me, furthering my communicative skills. In
                    2018 I moved to Uppsala to study engineering. I am currently
                    slated for another year abroad in Japan for fall 2022, this
                    upcoming exchange will be spent studying at the University
                    of Tokyo (if covid allows it, that is).&nbsp;
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
