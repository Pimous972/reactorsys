import React from 'react';
import style from './Button.module.css';
import PropTypes from 'prop-types';

const Button = (props) => {
   
    return (
        <button 
            type={props.type}
            onClick={(evt)=>{
                props.onButtonClick('coucou');
            }}  
            className={style.Button}
        >
                {props.children}
        </button>
    );
}

Button.propTypes={
    children : PropTypes.any.isRequired,
    onButtonClick : PropTypes.func.isRequired,
    bgColor:PropTypes.string,
    style:PropTypes.object,
    type:PropTypes.oneOf(['reset','button','submit']).isRequired
}

Button.defaultProps ={
    bgColor:'lime',
    
}

export default Button;