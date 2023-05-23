import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import {Navbar as NavBar , Container, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Navbar = (props) => { 
  
  return (
  
    <div className={styles.Navbar} data-testid="Navbar">
       <NavBar bg="primary" variant="dark">
        <Container>
          <NavBar.Brand href="#home">Navbar</NavBar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Create</Nav.Link>
            <Nav.Link href="#features">Thumbnail</Nav.Link>            
          </Nav>
        </Container>
      </NavBar>
    </div>
  )
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
