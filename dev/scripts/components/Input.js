import React from 'react';

const Button = (props) => {
    return (
        <React.Fragment>
            {props.text? 
                <React.Fragment>
                    <input type={props.type} placeholder={props.name} id={props.name} />
                    <label htmlFor={props.name}>{props.text}</label>
                </React.Fragment>
                :
                <input type={props.type} placeholder={props.name} id={props.name} />
            }
        </React.Fragment>
    )
}

export default Button;