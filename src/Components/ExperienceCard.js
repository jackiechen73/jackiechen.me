import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './styles.css';

const ExperienceCard = (props) => {
  const { jobTitle, company, image, navigateTo } = props;

  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className="Experience-Card"
      animate={
        hovered
          ? { translateY: -5, boxShadow: '0px 0px 20px 2px grey' }
          : { translateY: 0, boxShadow: '0px 0px 5px 0px grey' }
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card className="Experience-Card-Main" as={Link} to={navigateTo}>
        <Card.Img className="Experience-Card-Image" variant="top" src={image} />
        <Card.Body className="Experience-Card-Body">
          <Card.Subtitle>{company}</Card.Subtitle>
          <Card.Title>{jobTitle}</Card.Title>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ExperienceCard;