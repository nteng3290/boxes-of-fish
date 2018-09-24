import React from 'react';

const Input = (props, ref) => {
    return (
        <React.Fragment>
            <input type={props.type} placeholder={props.name} id={props.name} />
            {/* <input type={props.type} placeholder={props.name} id={props.name} ref={realDomInput} /> */}
            {
                props.text?
                <React.Fragment>
                    <span className="fill"></span>
                    <label htmlFor={props.name}>{props.text}</label>
                </React.Fragment>
                :
                null
            }
        </React.Fragment>
    )
}

export default Input;