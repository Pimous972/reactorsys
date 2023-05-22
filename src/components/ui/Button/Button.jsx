import React from 'react';
import style from './Button.module.css';
import PropTypes from 'prop-types';

const Button = (props) => {
   
    return (
        <button 
            onClick={(evt)=>{
                props.onButtonClick('coucou');
            }}  
            className={style.Button}>
                {props.title}
        </button>
    );
}

Button.propTypes={
    children : PropTypes.any.isRequired,
    onButtonClick : PropTypes.func.isRequired,
    bgColor:PropTypes.string,
    style:PropTypes.object
}

export default Button;