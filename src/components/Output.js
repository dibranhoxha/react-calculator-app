import React from 'react'

const Output = (props) => {
    return (
        <div className="outputScreen">
            {props.data !== "" ? props.data : "0"}
        </div>
    )
}

export default Output