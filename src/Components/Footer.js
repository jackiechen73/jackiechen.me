import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css'

const Footer = () => {
    return (
      <Container className="Footer">
        <Row>
          <Col className="Footer-Left">
            <Row>
              <h4>
                Contact Info
              </h4>
            </Row>
            <Row>
              <a
                className="Footer-Contact-Button"
                href="https://github.com/jackiechen73"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="Footer-Contact-Button-Icon"
                  icon={["fab", "github"]}
                  size="lg" 
                />
                jackiechen73
              </a>
              
            </Row>
            <Row>
              <a
                className="Footer-Contact-Button"
                href="https://www.linkedin.com/in/jackiechen73/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="Footer-Contact-Button-Icon"
                  icon={["fab", "linkedin"]}
                  size="lg"
                />
                jackiechen73
              </a>
              
            </Row>
            <Row>
              <a
                className="Footer-Contact-Button"
                href="mailto:liujia.chen@uwaterloo.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="Footer-Contact-Button-Icon"
                  icon="envelope"
                  size="lg"
                />
                liujia.chen@uwaterloo.ca
              </a>
              
            </Row>
            
          </Col>
          <Col className="Footer-Right">
            Built using ReactJS
          </Col>
        </Row>
      </Container>
    )
}

export default Footer;