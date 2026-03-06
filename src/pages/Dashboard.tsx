import { Button } from "../components/button"
import { Card } from "../components/card"
import { CreateContentModal } from "../components/CreateContentModal"
import { Sidebar } from "../components/sidebar"
import { useContent } from "../hooks/useContent"

import { Shareicon } from "../icons/shareicon"
import { StartIcon } from "../icons/startIcon"
import { useState } from "react";


export function Dashboard() {
 const [modalOpen,setModalOpen] = useState(false)
 const contents = useContent();
 
     const  handleopen= ()=>{
setModalOpen(true)
    }

  return (
    
    <><div className="flex">
      <div><div className="ml-50"><Sidebar/>
        </div>
      
      
      </div>
      
     
     <div> <div className="flex justify-end ">  
     <div className="mr-2 "> <Button variant="secondary" text="ADD CONTENT"  size="md" startIcon={<StartIcon/>} onClick={handleopen}/></div>
      <div> <Button variant="secondary" text="SHARE BRAIN"  size="md" startIcon={<Shareicon/>} /></div></div>
  

<div className="flex">

{
  contents.map(({type,link,title})=>
    <Card title={title} link={link} type={type} />

  )
}



</div>
 <CreateContentModal open={modalOpen} varchange = {setModalOpen}/>


<h5>Made by Akshat Chitransh</h5>
    </div>
    </div>
       
 

    </>
  )
}

export default Dashboard
