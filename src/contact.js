import React, { Component } from "react";
import CV from "./NiklasNorinderCV.pdf";
import "./css/contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="mainContent" id="mainContact">
        <span id="contactSpan">
          <p>contact</p>
          <br></br>
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
                <a href={CV} download="CV_Niklas_Norinder.pdf">
                  {" "}
                  Resumé{" "}
                </a>
              </li>
            </ul>
          </div>
          <div id="formDiv">
            <form
              id="contact-form"
              action="https://formsubmit.co/ce275b4bfa918a611123b510d3ab4b2d"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  name="email"
                  required
                />
                <div className="form-group">
                  <label htmlFor="name">Enquiry</label>
                  <input
                    type="text"
                    className="form-control"
                    name="enquiry"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  name="message"
                  required
                ></textarea>
              </div>
              <button id="submit" type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </span>
      </div>
    );
  }
}

export default Contact;
