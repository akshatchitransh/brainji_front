import type { ReactElement } from "react"


interface SideBarItem{
    icon:ReactElement;
    text:string;
}

export const SidebarItem = (props:SideBarItem)=>{
    return <div className="flex  items-center p-2 my-3">
        {props.icon}{props.text}
    </div>

}