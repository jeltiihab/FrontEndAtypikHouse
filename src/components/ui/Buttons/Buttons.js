import React from "react";

const AppButton = (props, rest) => {
    return (

            <button type="button" className={props.styleparam} onClick={props.onClick} {...rest} >
                {props.Content}
            </button>
    );
};

export default AppButton;