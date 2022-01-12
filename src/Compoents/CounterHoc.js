import React, { useState } from 'react'

const CounterHoc = () => {
    const[count,setCount] = useState(0)
    return (
        <div>
            <h1>Higher Compoenets</h1>
            <button onClick={()=>setCount(count+1)}>Update</button>
            <p>{count}</p>
        </div>
    )
}

export default CounterHoc
