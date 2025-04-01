import React from "react";

const Input = (props) => {
    const {type="text", placeholder, value, onChange, size} = props;
    const defaultClass = "border rounded px-3 py-2 outline-none transition-all";
    const classes = {
        sizes: {
            small: "text-sm py-1 px-2",
            medium: "text-base py-2 px-3",
            large: "text-lg py-3 px-4"
        }
    };
    return (<input type={type} placeholder={placeholder} value={value} onChange={onChange} className={defaultClass + " " + classes.sizes[size]}></input>);
}
 
export default Input;