import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Profile from '../Assets/profile.png';
import CaseCom from '../Assets/casecom.png';
import TDW from '../Assets/tdw.png';
import IBM from '../Assets/ibm.png';
import ExperienceCard from './ExperienceCard';

import './styles.css'

const Home = () => {
  return (
    <Container className="Home">
      <Row className="Home-Profile-Section">
        <Col sm>
          <Image className="Home-Profile-Thumbnail" src={Profile} roundedCircle />
        </Col>
        <Col lg>
          <Row>
            <p>
              Hey! My name is Jackie and I am currently a third year Software Engineering Student at the University of Waterloo.
            </p>
              <p>
                Feel free to contact me and check out my experience and resume below!
            </p>
          </Row>
          <Row>
            <a
              className="Home-Profile-Contact"
              href="https://github.com/jackiechen73"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="Footer-Contact-Button-Icon"
                icon={["fab", "github"]}
                size="lg"
              />
            </a>
            <a
              className="Home-Profile-Contact"
              href="https://www.linkedin.com/in/jackiechen73/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="Footer-Contact-Button-Icon"
                icon={["fab", "linkedin"]}
                size="lg"
              />
            </a>
            <a
              className="Home-Profile-Contact"
              href="mailto:liujia.chen@uwaterloo.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="Footer-Contact-Button-Icon"
                icon="envelope"
                size="lg"
              />
            </a>
            <a
              className="Home-Profile-Contact"
              href="https://pdfhost.io/v/J1nooHHEo_Jackie_Chen_Resumepdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="Footer-Contact-Button-Icon"
                icon="file-alt"
                size="lg"
              />
            </a>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>
            Experience
          </h2>
        </Col>
      </Row>
      <Row className="Home-Experience-Section">
        <ExperienceCard
           jobTitle="Head of Engineering"
           company="CaseCom"
           image={CaseCom}
           navigateTo="/casecom"
        />
        <ExperienceCard
          jobTitle="Full Stack Engineer"
          company="ThinkData Works"
          image={TDW}
          navigateTo="/thinkdataworks"
        />
        <ExperienceCard
          jobTitle="Core Software Developer"
          company="IBM"
          image={IBM}
          navigateTo="/ibm"
        />
      </Row>
      
    </Container>
  )
}

export default Home;