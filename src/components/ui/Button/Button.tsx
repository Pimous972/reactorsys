import React, { useEffect, useState } from 'react';
import style from './Button.module.css';
import PropTypes from 'prop-types';


interface I_ButtonProps{
    onButtonClick : Function ,
    style?: object ,
    children : string|React.ReactNode|Array<React.ReactNode|string>,
    bgColor?:string,
    type?:'button'|'submit'|'reset'
    title?:string;
    // isClicked?:false,

    
}

const Button:React.FC<I_ButtonProps> = (props) => {
   
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        
        setTimeout(() => {
            setIsClicked(false);
        }, 200);

       // return () => { };
    }, [isClicked])

    return (
        <button 
            type={props.type}
            onClick={(evt)=>{
                setIsClicked(true)
                console.log(isClicked);
                
            }}  
            className={!isClicked?style.Button:style.Button + ' ' + style.clicked}
        >
                {props.children}
                {props.title}
                
        </button>
    );
}

Button.propTypes={
    children : PropTypes.any.isRequired,
    onButtonClick : PropTypes.func.isRequired,
    bgColor : PropTypes.string,
    style : PropTypes.object,
    type : PropTypes.oneOf(['button','submit','reset']),
    // isClicked :  PropTypes.bool.isRequired,
}

Button.defaultProps ={
    bgColor:'lime',
    type:'button',
    // isClicked : false
}

export default Button;