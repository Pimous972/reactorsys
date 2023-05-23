import React from 'react';
import styles from './TemplateName.module.css';
import PropTypes from 'prop-types'


const TemplateName = (props) => { 
  
  return (
  
    <div className={styles.TemplateName} data-testid="TemplateName">
      {props.children}
    </div>
  )
};

TemplateName.propTypes = {
  children: PropTypes.array.isRequired
};

TemplateName.defaultProps = {};

export default TemplateName;
