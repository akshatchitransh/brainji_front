import { Button } from "./components/button"
import { Card } from "./components/card"
import { CreateContentModal } from "./components/CreateContentModal"
import { Sidebar } from "./components/sidebar"
import { SidebarItem } from "./components/sidebaritem"
import { Shareicon } from "./icons/shareicon"
import { StartIcon } from "./icons/startIcon"
import { useState } from "react";
import { TwitterIcon } from "./icons/twittericon"
import { YoutubeIcon } from "./icons/YoutubeIcon"


function App() {
 const [modalOpen,setModalOpen] = useState(false)
 
     const  handleopen= ()=>{
setModalOpen(true)
    }

  return (
    
    <><div className="flex">
      <div><div className="mr-60"><Sidebar/>
      
        <SidebarItem icon={<TwitterIcon/>} text="Twitter"/>
         <SidebarItem icon={<YoutubeIcon/>} text="Youtube"/>
      </div>
      
      
      </div>
      
     
     <div> <div className="flex ">  
     <div className="mr-10 "> <Button variant="secondary" text="ADD CONTENT"  size="md" startIcon={<StartIcon/>} onClick={handleopen}/></div>
      <div> <Button variant="secondary" text="SHARE BRAIN"  size="md" startIcon={<Shareicon/>} /></div></div>
  

<div className="flex">

   <Card title="Shararat" link="https://youtu.be/YyepU5ztLf4?si=P6lSo845c4KTN_Oe" type="youtube" />
   <Card title="Ajj ki raat" link="https://youtu.be/roz9sXFkTuE?si=bp5gI4u8yIUqMBTh" type="youtube" />

 <Card title="Tweetbabes" link="https://x.com/Sonu_Singha_/status/2016084532441841800" type="Twitter" />
  <Card title="Ajj ki raat" link="https://youtu.be/bNJY2bwgt58?si=XJ3tjtrQME-J5nX_" type="youtube" />
</div>
 <CreateContentModal open={modalOpen} varchange = {setModalOpen}/>


<h5>Made by Akshat Chitransh</h5>
    </div>
    </div>
       
 

    </>
  )
}

export default App
