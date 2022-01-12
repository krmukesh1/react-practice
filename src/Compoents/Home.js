import React, { useEffect, useState } from 'react'

const Home = (props) => {
    const[value,setValue] = useState("mukesh")

    useEffect(() => {
      alert(value)
    },[])
    const handleData = () =>{
        setValue("Brain Inventory")
    }
    return (
        <div>
            <h1>{props.data}</h1>
            <button onClick={handleData}>Update</button>
            <p>{value}</p>
            <h1>Increment an ddecrement using Redux</h1>
            <p>Redux Tutorial</p>
            <div className='quantity'>
                <a className='qunatity_minus'><span>-</span></a>
                <input name='quantity' type="number" className="quantity_input" value="0" />
                <a className='qunatity_plus'><span>+</span></a>
            </div>
        </div>
    )
}

export default Home
