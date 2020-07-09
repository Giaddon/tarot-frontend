import React from "react";
import "./About.css";
import $ from "jquery";

/** Displays description of the app.   */
 
function About() {

  function revealAbout() {
    $('.about-text').toggle("fast");
  }

  return (
    <div className="about" onClick={revealAbout}>
      <h4>?</h4>
      <p className="about-text">This app is a front-end for howlCode's <a href="https://github.com/howlCode/tarot_api" target="_blank" rel="noopener noreferrer">Tarot API</a>. 
      <br /><br />
      Made by <a href="http://grahamtrail.com" target="_blank" rel="noopener noreferrer">Graham Trail</a>.
      </p>
    </div>
  )
}

export default About;