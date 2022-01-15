import React from "react";

function Drop (props: any): JSX.Element {
    return <i className={"drop"}
        style={
            {
                width: props.size,
                left: props.posX,
                animationDelay: props.delay,
                animationDuration: props.duration
            }
        }
    />
}

export default Drop;