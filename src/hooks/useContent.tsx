import axios from "axios";
import { useEffect, useState } from "react";
import { Backend_URI } from "../config";

export function useContent  (){
const [contents , setContents] = useState([]);

useEffect(()=>{
     axios.get(`${Backend_URI}/api/auth/content`,{
        headers: {
            "Authorization": localStorage.getItem("token")
        }
     })
    .then((response)=>{
        setContents(response.data.content)
    })
},[])

return contents;
}