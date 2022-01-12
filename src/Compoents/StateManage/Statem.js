import React, { useState } from 'react'

const Statem = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>State Management</h1>
            <button className='btn btn-primary' onClick={()=>{setCount(count+1)}}>+</button>
            <span>{count}</span>
            <button className='btn btn-primary' onClick={()=>{setCount(count-1)}}>-</button>
        </div>
    )
}

export default Statem
