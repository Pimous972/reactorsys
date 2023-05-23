import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';

const initialState ={};


const MemeForm = (props) => { 
  
  const [state, setstate] = useState(initialState)

  useEffect(() => {
    return () => {
      console.log('MemeForm mounted')
    };
  }, [])

  return (
  
    <div className={styles.MemeForm} data-testid="MemeForm">
      MemeForm Component
    </div>
  )
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
