import React, { Component } from "react";
import Header from "./header";

class Merits extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="main">
          <div className="mainContent">
            <span>
              <p>other merits</p>
              <br></br>
              <b>LANGUAGE </b>
              Swedish - Native | English - Professional (TOELF 112/120 January
              2021) | Japanese - Conversational, not yet fluent. Aspirations to
              reach JPLT N1 level.
              <br></br>
              <b>DEVELOPMENT </b>
              <i>Front end </i>- JavaScript, ReactJS, TypeScript, Vue, HTML, CSS
              |<i> Back end </i>- SQLServer, MySQL, NodeJS |
              <i> Other languages </i>- Python, R, Matlab, Java |<br></br>
              <b>MUSIC PRODUCTION </b>
              <i>Software </i>- Ableton Live, FL Studio, Native Instruments
              Traktor, UAD Console, Melodyne |<i> Hardware </i>- UAD Hardware
              (Apollo Twin), Tascam racks, mixer knowledge |<br></br>
              <b>VOLUNTEERING </b> <br></br>
              <i>Engineers Without Borders Sweden</i> <br></br>
              Active in the Uppsala managing group. Head of The Reflective
              Engineer, managing a team of around 8 people.<br></br>
              <i>UTN - Faculty Student Union</i>
              <br></br>
              Fadderkå. Responsible for the buddy-program for one of the
              engineering programs at Uppsala University. Managing around 60
              volunteers and 90 new students. In an event reaching more than
              1200 people.
              <br></br>
              {/* <b>Scholarships</b>
              <br></br>I have recieved scholarships from Sweden-Japan
              foundation, Anna Whitlocks Minnesfond & Anna och Edwin Bergers
              stiftelse for my upcoming studies in Japan. Thank you for
              believing in me! :) */}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Merits;
