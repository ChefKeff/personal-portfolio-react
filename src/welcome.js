import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div>
      <div id="picOfMeDiv"></div>
        <div className="mainContent" id="welcomeCont">
          <h2> NIKLAS NORINDER </h2>
                            <p class = "smalltitle">Age</p>
                            <p class = "txt indent">   24</p>
                            <p class = "smalltitle">Location</p>
                            <p class = "txt indent">   Uppsala, Sweden</p>
                            <p class = "smalltitle">Current occupation</p>
                            <p class = "txt indent">   M.Sc student, Engineering, Uppsala University</p>
                            <p class = "smalltitle">Hello!</p>
                            <p class = "txt">My name is Niklas Norinder. I am currently studying my fourth year in
                            Sociotechnical Systems Engineering at Uppsala University. Outside of my studies I like to 
                            produce and create music, program, run and hang out with my friends.</p>
                            <p class = "txt"> Originally born and raised on the Swedish west coast, in both 
                            Gothenburg and Halmstad, I decided to spend a year abroad in Japan in high school to broaden my
                            horizons and try something new. The exchange had a huge impact on me, furthering my communicative skills.</p>
                            <p class = "txt">In 2018 I moved to Uppsala to study engineering. I am currently slated for another year abroad
                            in Japan in the spring of 2022, this time I will study at the University of Tokyo (if covid allows it, that is).</p>
        </div>
        </div>
    );
  }
}

export default Welcome;