import React from 'react';
import style from './Button.module.css';
import PropTypes from 'prop-types';
interface I_ButtonProps{
    onButtonClick : Function ,
    style?: object ,
    children : string|React.ReactNode|Array<React.ReactNode|string>,
    bgColor?:string,
    type?:'button'|'submit'|'reset'

    
}

const Button:React.FC<I_ButtonProps> = (props) => {
   
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
    bgColor : PropTypes.string,
    style : PropTypes.object,
    type : PropTypes.oneOf(['button','submit','reset'])
}

Button.defaultProps ={
    bgColor:'lime',
    type:'button'
    
}

export default Button;