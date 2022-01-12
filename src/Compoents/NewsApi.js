import React, { useEffect, useState } from 'react'
import {getRequest} from "../services/apis/movieApi"



const NewsApi = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
     const fecthNews = async () =>{
        const response= await getRequest()
         setData(response)
         console.log(response)
         
        
     }
     fecthNews()
    }, [])
    return (
        <div>
            <h1>News Api Calling from Service Page</h1>
            
            {data.map((news) => (
      
            <div key={news.id}>
                <h1 id='home_heading' >{news.title}</h1>
            </div>
       
    ))}
        </div>
    )
}

export default NewsApi
