import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import ExperienceCard from './Components/ExperienceCard';
import Home from './Components/Home';
import Footer from './Components/Footer';
import WorkInProgress from './Components/WorkInProgress';

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt, faCircle } from "@fortawesome/free-solid-svg-icons";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(fab, faEnvelope, faFileAlt)
const App = () => {
  
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
          <Navbar.Brand href="/">Jackie Chen</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/users">Users</Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
          </Container>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/casecom">
            <WorkInProgress />
          </Route>
          <Route path="/thinkdataworks">
            <WorkInProgress />
          </Route>
          <Route path="/ibm">
            <WorkInProgress />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
