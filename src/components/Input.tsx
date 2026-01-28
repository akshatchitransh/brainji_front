interface Inputprops  {
    placeholder:string;
     type:string;
     
}

export const Input = (props:Inputprops)=>{
    return <div>
        <input placeholder = {props.placeholder} type = {props.type}></input>
    </div>
}