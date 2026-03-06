import Dashboard from "./pages/Dashboard"
import Features from "./pages/Features"
import { Homepage } from "./pages/Homepage"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { BrowserRouter,Route,Routes } from "react-router-dom"





function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element= {<Signup/>}></Route>
      <Route path="/signin" element= {<Signin/>}></Route>
      <Route path="/dashboard" element= {<Dashboard/>}></Route>
      <Route path="/features" element={<Features/>} />
      <Route path="/" element= {<Homepage/>}></Route>
    </Routes>

    </BrowserRouter>
    
   
  )
}

export default App
