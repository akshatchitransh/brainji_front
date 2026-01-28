import { Button } from "./components/button"
import { Card } from "./components/card"
import { Shareicon } from "./icons/shareicon"
import { StartIcon } from "./icons/startIcon"


function App() {


  return (
    <><div className="flex ">  
     <div className="mr-10 "> <Button variant="secondary" text="ADD CONTENT"  size="md" startIcon={<StartIcon/>} /></div>
      <div> <Button variant="secondary" text="SHARE BRAIN"  size="md" startIcon={<Shareicon/>} /></div></div>
  

<div className="flex">
   <Card title="Shararat" link="https://youtu.be/YyepU5ztLf4?si=P6lSo845c4KTN_Oe" type="youtube" />
   <Card title="Ajj ki raat" link="https://youtu.be/roz9sXFkTuE?si=bp5gI4u8yIUqMBTh" type="youtube" />

 <Card title="Tweetbabes" link="https://x.com/Sonu_Singha_/status/2016084532441841800" type="Twitter" />
</div>



    </>
  )
}

export default App
