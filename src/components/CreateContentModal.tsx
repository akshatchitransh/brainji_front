import { Input } from "./Input";
import { CrossIcon } from "../icons/crossIcon";
import { Button } from "./button";
import { useRef, useState } from "react";
import { Backend_URI } from "../config";
import axios from "axios";

interface modalprops{
    open:boolean;
   varchange:(a:boolean)=>void
    
}
enum contentType {
    "Youtube" = "youtube",
    "Twitter" = "twitter"
}


export const CreateContentModal = (props:modalprops)=>{

      const  handleclose = ()=>{
props.varchange(false)

    }
    const [type,setType] = useState(contentType.Youtube)
    const titleref = useRef<HTMLInputElement |null>(null);
const roleref = useRef<HTMLInputElement |null>(null);

    async function addContent(){
const title = titleref.current?.value;
const link = roleref.current?.value;

await axios.post(`${Backend_URI}/api/auth/content` , {
link,
title,
type
},
{
    headers: {
        "Authorization":localStorage.getItem("token")
    }
})

 }
   
return ( <div>
    {props.open&&<div className="w-screen h-screen  bg-slate-950 opacity-60 fixed top-0 left-0 flex justify-center items-center ">
        <div  className="bg-amber-50 ">
           
           <div className="flex justify-end" onClick={handleclose}><button className=" cursor-pointer"><CrossIcon  /></button></div>
            <div>
                <Input reference = {titleref} placeholder ="title" type="text" />
                <Input reference = {roleref} placeholder ="role" type="text"/>
                <div className="flex justify-center">    
                   <div className="flex justify-center items-center  p-5">
                    <Button loading={false} text="Youtube" variant= {type===contentType.Youtube ? "secondary" :"primary"} size="md" onClick={()=>{
                        setType(contentType.Youtube)
                    }}>

                    </Button>
                    <Button  loading={false} text="Twitter" variant= {type===contentType.Twitter?"secondary":"primary"} size="md" onClick={()=>{
                        setType(contentType.Twitter) 
                    }}>

                    </Button>
                                       </div>
                        <Button variant="secondary"  loading={false} size="md" text="BUTTON" onClick={addContent}/></div>
        
            </div>
          
            </div>
          
        </div>}
</div>)
}