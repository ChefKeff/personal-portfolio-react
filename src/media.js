import React, { Component } from "react";
import "./css/media.css";
import Header from "./header";

class Media extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="main">
          <div className="mainContent">
            <div id="mediaDiv">
              <span>
                <p>MEDIA</p>
                <br></br>
                <b>SPOTIFY</b>
                <br></br>
                This is a selection of songs that I have worked on which have
                been published to Spotify. I have either performed, produced or
                mixed the songs. I am using Ableton Live as my main DAW, and the
                Waves-bundle, alongside other VSTs for mixing and producing. I
                am also well farmiliar with Analog Lab and similar VSTis used in
                audio production.
                <iframe
                  src="https://open.spotify.com/embed/playlist/6G2fuRZqoI5MKXFooHqTs9?theme=0"
                  id="spotifyFrame"
                ></iframe>
                <br></br>
                <b>BEATS</b>
                <br></br>
                Here you can find a selection of my beats without vocals. The
                beats displayed in the widget on the left are produced entirely
                by me, using the DAW Ableton Live. The beats are not mixed or
                mastered to be published to streaming services as they are
                displayed here. To hear finished productions, please refer to
                the Spotify playlist referenced in the widget above.
                <iframe
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1294500388&amp;color=%23b7ccc1&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
                  id="soundcloudFrame"
                ></iframe>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Media;
