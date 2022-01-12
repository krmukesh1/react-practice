import React from 'react'

const HocGreen = (props) => {
    return (
        <div>
            <h1>Higher order Components</h1>
            <p style={{backgroundColor:'green',width:100}} ><props.cmp /></p>
        </div>
    )
}

export default HocGreen
