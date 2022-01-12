import React from 'react'
import { useSelector } from 'react-redux'
const Coin = () => {
  const count = useSelector((state) => state.counter.count)
  const changeTextColor = useSelector((state) => state.theme.color)
    return (
        <div>
          <span style={{color:changeTextColor}}>Coin: {count}</span>  
        </div>
    )
}
export default Coin
