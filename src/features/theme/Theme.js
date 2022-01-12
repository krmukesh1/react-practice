import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {changeTextColor} from "../theme/themeSlice"
const Theme = () => {
    const [color, setColor] = useState("white")
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Theme Changer</h1>
            <input className='textbox' type="text" onChange={(e)=>{setColor(e.target.value)}}/>            
            <button className='button' onClick={()=>{dispatch(changeTextColor(color))}}>Change text Color</button>
            <h1>{}</h1>
        </div>
    )
}

export default Theme
