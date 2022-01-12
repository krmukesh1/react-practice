import axios from "axios";
// import {apikey} from "./movieApiKey"
    
const baseURL=`https://jsonplaceholder.typicode.com/posts`


export const getRequest = (path) => {
    const request = axios.get(`${baseURL}`);
    return request.then(({data}) => data);
}