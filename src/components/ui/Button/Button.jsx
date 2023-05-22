import React from 'react';
import style from './Button.module.css';

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

export default Button;