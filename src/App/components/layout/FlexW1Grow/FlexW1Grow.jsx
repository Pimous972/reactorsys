import React from 'react';
import styles from './FlexW1Grow.module.css';
import PropTypes from 'prop-types'


const FlexW1Grow = (props) => { 
  
  return (
  
    <div className={styles.FlexW1Grow} data-testid="FlexW1Grow">
      {props.children}
    </div>
  )
};

FlexW1Grow.propTypes = {
  children: PropTypes.array.isRequired
};

FlexW1Grow.defaultProps = {};

export default FlexW1Grow;
