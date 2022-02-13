import React, { Component } from "react";
import "./css/infopage.css";
import "./css/media.css";

class Media extends Component {
  render() {
    return (
      <div className="mainContent mainMedia">
        <div id="mediaDiv">
          <iframe
            src="https://open.spotify.com/embed/playlist/6G2fuRZqoI5MKXFooHqTs9?theme=0"
            id="spotifyFrame"
          ></iframe>
          <span id="spotTxt">
            <b>SPOTIFY</b>
            <br></br>
            This is a selection of songs that I have worked on which have been
            published to Spotify. I have either performed, produced or mixed the
            songs. I am using Ableton Live as my main DAW, and the Waves-bundle,
            alongside other VSTs for mixing and producing. I am also well
            farmiliar with Analog Lab and similar VSTis used in audio
            production.
          </span>
        </div>
        <div id="mediaDiv">
          <span id="scText">
            <b>BEATS</b>
            <br></br>
            Here you can find a selection of my beats without vocals. The beats
            displayed in the widget on the left are produced entirely by me,
            using the DAW Ableton Live. The beats are not mixed or mastered to
            be published to streaming services as they are displayed here. To
            hear finished productions, please refer to the Spotify playlist
            referenced in the widget above.
          </span>
          <iframe
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1294500388&amp;color=%23b7ccc1&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
            id="soundcloudFrame"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Media;
