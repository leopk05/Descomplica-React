import React from "react";
import "./Button.css"
export const Button = (props) => {
    return (
        <button className="green-button">{props.children}</button>
    )
}

export default Button