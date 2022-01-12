import React, { useRef } from 'react'

const Refcomp = () => {
    const inputRef = useRef(null)
    function handleInput (){
        console.warn("Handle Input")
        inputRef.current.value = "1000"
        inputRef.current.focus()
        inputRef.current.style.color="red"
    }
    return (
        <div>
           <h1>UseRef Using for DOM Manipulation in React</h1>
           <input type="text" ref={inputRef}/> 
           <button onClick={handleInput}>Handle Input</button>
        </div>
    )
}

export default Refcomp
