import React from 'react'

const User = (props) => {
    const name = "krmukeshsingh51@gmail.com"
    return (
        <div>
            <h1>State Lifting (data pass from Child to Parent)</h1>
            <p >{props.data(name)} Hello</p>
            <button onClick={()=>props.data(name)}>GetData</button>
        </div>
    )
}

export default User
