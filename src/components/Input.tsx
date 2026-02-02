interface Inputprops  {
    placeholder:string;
     type?:string;
     reference?:any;
     
}

export const Input = (props:Inputprops)=>{
    return <div>
        <input ref={props.reference} placeholder = {props.placeholder} type = {props.type}></input>
    </div>
}