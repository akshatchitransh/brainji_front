import { Input } from "./Input";
import { CrossIcon } from "../icons/crossIcon";
import { Button } from "./button";

interface modalprops{
    open:boolean;
   varchange:(a:boolean)=>void
    
}


export const CreateContentModal = (props:modalprops)=>{

      const  handleclose = ()=>{
props.varchange(false)
    }
   
return <div>
    {props.open&&<div className="w-screen h-screen  bg-slate-950 opacity-60 fixed top-0 left-0 flex justify-center items-center ">
        <div  className="bg-amber-50 ">
           
           <div className="flex justify-end" onClick={handleclose}><button className=" cursor-pointer"><CrossIcon  /></button></div>
            <div>
                <Input placeholder ="type here" type="text" />
                <Input placeholder ="type here" type="text"/>
                <div className="flex justify-center">        <Button variant="primary" size="md" text="BUTTON" /></div>
        
            </div>
          
            </div>
          
        </div>}
</div>
}