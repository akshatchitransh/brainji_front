import { Button } from "./components/button"
import { Shareicon } from "./icons/shareicon"
import { StartIcon } from "./icons/startIcon"


function App() {


  return (
    <><div className="flex ">  
     <div className="mr-10 "> <Button variant="secondary" text="Create"  size="md" startIcon={<StartIcon/>} /></div>
      <div> <Button variant="secondary" text="SHARE"  size="md" startIcon={<Shareicon/>} /></div></div>
  
 

    </>
  )
}

export default App
