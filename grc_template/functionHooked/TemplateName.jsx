import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css';

const initialState ={};


const TemplateName = (props) => { 
  
  const [state, setstate] = useState(initialState)

  useEffect(() => {
    return () => {
      console.log('TemplateName mounted')
    };
  }, [])

  return (
  
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </div>
  )
};

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
