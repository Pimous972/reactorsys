import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const initialState ={};


const Header = (props) => { 
  
  const [state, setstate] = useState(initialState)

  useEffect(() => {
    return () => {
      console.log('Header mounted')
    };
  }, [])

  return (
  
    <div className={styles.Header} data-testid="Header">
      Header Component
    </div>
  )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
