import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import docs from "../../Assets/Projects/docs.png";
import dll from "../../Assets/Projects/dll.png";
import spam from "../../Assets/Projects/spam.png";
import logs from "../../Assets/Projects/logs.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docs}
              isBlog={false}
              title="Docs"
              description="Personal documentation website created by myself."
              ghLink="https://github.com/HarryLee02/docs"
              demoLink="https://docs.harrylee.id.vn/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dll}
              isBlog={false}
              title="DLL Sideloading Worm"
              description="A DLL Sideloading worm that can be used to sideload DLLs to legitimate processes."
              ghLink="https://github.com/HarryLee02/DLL-sideloading-Worm"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spam}
              isBlog={false}
              title="Vietnamese Spam Detection Model"
              description="A Vietnamese spam detection model built from scratch that can be used to detect spam in Vietnamese, achieving an accuracy of 98.4% by using custom head for Multihead Self-Attention."
              ghLink="https://github.com/HarryLee02/Vietnamese-spam-detection-model"
              demoLink="https://huggingface.co/spaces/HarryLee02/Vietnamese-spam-detection"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logs}
              isBlog={false}
              title="API Starter Pack"
              description="A comprehensive tool for processing and analyzing Zendesk help center documentation using OpenAI's API."
              ghLink="https://github.com/HarryLee02/API-starter-pack"
              demoLink="https://logs.harrylee.id.vn/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
