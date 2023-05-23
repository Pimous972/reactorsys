import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';

const initialState ={};


const Navbar = (props) => { 
  
  const [state, setstate] = useState(initialState)

  useEffect(() => {
    return () => {
      console.log('Navbar mounted')
    };
  }, [])

  return (
  
    <div className={styles.Navbar} data-testid="Navbar">
      Navbar Component
    </div>
  )
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
