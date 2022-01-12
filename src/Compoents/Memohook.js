import React, { useState,useMemo } from 'react'

const Memohook = () => {
    const[count,setCount] = useState(0)
    const[item,setItem] = useState(1)
    const multiCountMemo = useMemo(function multiCount() {
        console.warn("multiCount")
        return count*5
        
    },[count])

    return (
        <div>
            <h1>UseMemo Hooks</h1>
            <p>Count:{count}</p>
            <p>Item:{item}</p>
            <p>{multiCountMemo}</p>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
            <button onClick={()=>setItem(item*10)}>Update Item</button>
        </div>
    )
}

export default Memohook
