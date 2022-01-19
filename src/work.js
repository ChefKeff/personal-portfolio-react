import React, { Component } from 'react';
import textJson from './App';

class Work extends Component {
  render() {
    return (
        <div className='mainContent'>
          <h2>Workman!</h2>
          <ul>
          <li>  
              <p class="smalltitle"> 
              <span class="indent"> IT INTERN - VASAKRONAN </span> </p>
              <p class="txt dbindent"> Developing an IoT solution for displaying indoor temperature, CO2, TVOC and Humidity, for internal use at Vasakronan. The project is written in 
              JavaScript and mainly TypeScript. Connecting several different IoT APIs on a single webpage. </p>
              <p class="txt dbindent"> March 2021 - August 2021 </p>
              <p class="it dbindent"> This project started as a bachelor's thesis, later developing into a full fledged internship. </p>                      
          </li>

          <li>
          <span>
          <p class="smalltitle">
          <span class="indent"> FREELANCE MUSIC PRODUCER</span></p>
          <p class="txt dbindent"> I run a one-man company doing some music production, mixing, mastering and DJing. 
          Since the start in 2018, I have accumulated over 6.000.000 streams on my music on services like Spotify and Apple Music. </p>
          <p class="it dbindent"> More information, as well as soundbites, can be found in the "media" section of this website. </p>
          </span>
          </li>

          <li>
              <span> 
              <p class="smalltitle"> 
              <span class="indent">BAGGAGE HANDLING - AVIATOR</span> </p>
              <p class="txt dbindent"> Managing the luggage for Aviator at Arlanda airport. </p>
              <p class="txt dbindent"> May 2019 - August 2019 </p>
              </span> 
          </li>

          <li>
              <span> 
              <p class="smalltitle"> 
              <span class="indent">SUBSTITUTE TEACHER - HALMSTAD KOMMUN</span> </p>
              <p class="txt dbindent"> Substituting for classes 1 through 5 (7 year to 11 year old students) mainly. </p>
              <p class="txt dbindent"> November 2017 - March 2018 </p>
              </span> 
          </li>

          <li>
              <span> 
              <p class="smalltitle"> 
              <span class="indent"> STORAGE - HÖGANÄS</span> </p>
              <p class="txt dbindent"> Responsible for keeping inventory and accepting deliveries at Höganäs Halmstadbruken. </p>
              <p class="txt dbindent"> June 2017 - August 2017 </p>
              </span> 
          </li>
          </ul>
        </div>
    );
  }
}

export default Work;