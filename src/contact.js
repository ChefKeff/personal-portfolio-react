import React, { Component } from "react";
import "./css/infopage.css";
import "./css/contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="mainContent mainMedia" id="mainContact">
        <div id="contactListDiv">
          <ul id="contactListUl">
            <li>
              <a href="https://www.linkedin.com/in/niklas-norinder-90805b16a/">
                LinkedIn
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/clavibeats"> Instagram </a>
            </li>

            <li>
              <a href="https://github.com/ChefKeff"> GitHub </a>
            </li>

            <li>
              <a
                href="./NiklasNorinderCV21_22NEW.pdf"
                download="CV_Niklas_Norinder"
              >
                Resumé
              </a>
            </li>
          </ul>
        </div>
        <div id="formDiv">
          <form
            id="contactForm"
            method="post"
            action="https://formsubmit.co/ce275b4bfa918a611123b510d3ab4b2d"
          >
            <p class="formElement">
              <label id="nameLbl">Your name</label>
              <input
                type="text"
                size="48"
                name="name"
                value=""
                required=""
              ></input>
            </p>
            <p class="formElement">
              <label id="mailLbl">Your Email</label>
              <input
                type="email"
                title="Please enter a valid email address"
                size="48"
                name="email"
                value=""
                required=""
              ></input>
            </p>
            <p class="formElement">
              <label id="subjLbl">Subject</label>
              <input
                type="text"
                size="48"
                name="subject"
                value=""
                required=""
              ></input>
            </p>
            <p class="formElement">
              <label id="enqLbl">Enquiry</label>
              <textarea name="body" cols="48" rows="8" required=""></textarea>
            </p>
            <input
              id="submitBtn"
              type="submit"
              name="feedbackForm"
              class="formSubmitBtn"
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
