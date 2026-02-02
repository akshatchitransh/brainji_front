import { useRef } from "react"
import { Button } from "../components/button"
import { Input } from "../components/Input"
import { Backend_URI } from "../config";
import axios from "axios";

export const Signup = ()=>{
const usernameRef = useRef<HTMLInputElement | null>(null)
const passwordRef = useRef<HTMLInputElement | null>(null)


async function signup() {
    const username = usernameRef.current?.value
    const password = passwordRef.current?.value
    console.log("username",username)
   await axios.post(`${Backend_URI}/api/auth/signup`,{
         
            username,password
         
    })
    alert("signedup")
}


    return <div className="bg-gray-200 h-screen w-screen flex justify-center items-center">

        <div className="bg-white rounded border min-w-48">

<Input placeholder="Username" reference={usernameRef}/>
<Input placeholder="Password" reference={passwordRef}/>

<div className=" flex justify-center items-center">
<Button variant="primary" text="SIGNUP" size="sm" fullWidth= {true} loading ={false} onClick={signup}/>
</div>

        </div>

    </div>
}