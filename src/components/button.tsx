import type { ReactElement } from "react";



  interface Buttonprops{
    variant:"primary"|"secondary";
    size:"sm"|"md"|"lg";
    text?:string;
    startIcon?:any;
    endIcon?: ReactElement;
    onClick?:()=> void;
    fullWidth?:boolean;
    loading?:boolean
}
const variantchoice = {
    "primary":"bg-[#fcba03] ",
    "secondary":"bg-[#fcba03] ",
    
}
const defaultstyles = "rounded-md ";
const sizes = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};


export const Button = (props:Buttonprops)=>{
    return<button onClick = {props.onClick} disabled={props.loading}
  className={`flex ${variantchoice[props.variant]} ${defaultstyles} ${sizes[props.size]} cursor-pointer ${props.fullWidth? "w-full" : ""}`
  } 
>
 {props.startIcon?<div className="mr-2">{props.startIcon}</div>:null} {props.text}
</button>

}

