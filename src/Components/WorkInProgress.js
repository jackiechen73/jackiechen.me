import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './styles.css'
 
const WorkInProgress = () => {
  return (
    <Container className="WIP-Body">
      <h2 className="WIP-Message">
        Hey! This page isn't done yet. If you want to hear more about this from me, please contact me directly!
      </h2>
    </Container>
  )
}

export default WorkInProgress;