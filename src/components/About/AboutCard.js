import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I am <span className="purple">Harry Lee </span>
            from <span className="purple"> Ho Chi Minh City, Vietnam.</span>
            <br />
            <br />
            I am currently a senior at University of Information Techonology, Vietnam, majoring in <span className="purple"> Information Security</span>.
            <br />
            <br />
            Apart from coding, I also have a life!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(61, 113, 190)" }}>
            "Hard work pays off"
          </p>
          <footer className="blockquote-footer">Harry Lee</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
