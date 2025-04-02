import React from "react";

const Text = (props) => {
    const {children, size="medium", color="black"} = props;
    const sizes = {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg font-bold"
    };
    return (
        <p className={`${sizes[size]} text-${color}`}>{children}</p>
    );
}
 
export default Text;