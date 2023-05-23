import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const initialState ={};


const Footer = (props) => { 
  
  const [state, setstate] = useState(initialState)

  useEffect(() => {
    return () => {
      console.log('Footer mounted')
    };
  }, [])

  return (
  
    <div className={styles.Footer} data-testid="Footer">
      Footer Component
    </div>
  )
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
