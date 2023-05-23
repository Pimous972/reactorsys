import React, { useEffect, useState } from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';



interface I_ButtonProps{
    onButtonClick: Function
    style?:object
    bgColor?:string
    children:string|React.ReactNode|Array<React.ReactNode|string>
    type?:'button'|'reset'|'submit'
}

const Button:React.FC<I_ButtonProps> = (props) => {
   
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        
        setTimeout(() => {
            setIsClicked(false);
        }, 200);

       // return () => { };
    }, [isClicked])

    return <button type={props.type} onClick={(evt) => {
        setIsClicked(true);
        props.onButtonClick();
    }} className={!isClicked?styles.Button:styles.Button+' '+styles.clicked}
        style={{ ...props.style,backgroundColor: props.bgColor }}
    >{props.children}</button>
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
    children:'',
    onButtonClick: () =>{}
}

export default Button;