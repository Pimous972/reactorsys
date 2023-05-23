import React from 'react';
import styles from './FlexH3Grow.module.css';
import PropTypes from 'prop-types'


const FlexH3Grow = (props) => { 
  
  return (
  
    <div className={styles.FlexH3Grow} data-testid="FlexH3Grow">
      {props.children}
    </div>
  )
};

FlexH3Grow.propTypes = {
  children: PropTypes.array.isRequired
};

FlexH3Grow.defaultProps = {};

export default FlexH3Grow;
