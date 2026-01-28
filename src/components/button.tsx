import type { ReactElement } from "react";



  interface Buttonprops{
    variant:"primary"|"secondary";
    size:"sm"|"md"|"lg";
    text?:string;
    startIcon?:any;
    endIcon?: ReactElement;
    onClick?:()=> void;
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
    return<button
  className={`flex ${variantchoice[props.variant]} ${defaultstyles} ${sizes[props.size]} cursor-pointer`
  }
onClick={props.onClick}>
 {props.startIcon?<div className="mr-2">{props.startIcon}</div>:null} {props.text}
</button>

}

