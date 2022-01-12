import { useDispatch, useSelector } from 'react-redux'

import { decrement, increment,incrementByAmount } from './counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const changeTextColor = useSelector((state) => state.theme.color)
    const dispatch = useDispatch()
    return (
        <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => {dispatch(increment())}}
          >
            Increment
          </button>
          <span style={{color:changeTextColor}}>Count:{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() =>{dispatch(decrement())} }
          >
            Decrement
          </button>
          <button
            aria-label="Decrement value"
            onClick={() =>{dispatch(incrementByAmount(10))} }
          >
            increment By 10
          </button>
        </div>
      </div>
    )
}

export default Counter
