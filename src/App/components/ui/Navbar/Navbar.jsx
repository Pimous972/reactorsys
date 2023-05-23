import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import { Navbar as NavBar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const Navbar = (props) => {

    return (

        <div className={styles.Navbar} data-testid="Navbar">
            <NavBar bg="primary" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <NavBar.Brand href="#home">Navbar</NavBar.Brand>
                    </LinkContainer>
                    <Nav className="me-auto">
                        <LinkContainer to="/create">
                            <Nav.Link href="#home">Create</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/thumbnail">
                            <Nav.Link href="#features">Thumbnail</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/meme/1">
                            <Nav.Link href="#features">Meme</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </NavBar>
        </div>
    )
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;