import axios from "axios";
import { useEffect, useState } from "react";
import { Backend_URI } from "../config";

interface Content {
  type: "youtube" | "Twitter"
  link: string
  title: string
}

export function useContent  (){
const [contents , setContents] =  useState<Content[]>([]);

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