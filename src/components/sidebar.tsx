import { TwitterIcon } from "../icons/twittericon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SidebarItem } from "./sidebaritem"


export const Sidebar = ()=>{
    return <div className="h-screen bg-white border-r-2 border-gray-200 w-50  fixed top-0 left-0 my-2">MEMORY
    <div><SidebarItem icon={<TwitterIcon/>} text="Twitter"/>
         <SidebarItem icon={<YoutubeIcon/>} text="Youtube"/></div>
    </div>
}