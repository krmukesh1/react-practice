import React from 'react'

const HocRed = (props) => {
    return (
        <div>
            <h1>Higher order Components</h1>
            <p style={{backgroundColor:'red',width:100}} ><props.cmp /></p>
        </div>
    )
}

export default HocRed
