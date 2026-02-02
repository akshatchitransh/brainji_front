import { Button } from "../components/button"
import { Input } from "../components/Input"

export const Signin = ()=>{
    return <div className="bg-gray-200 h-screen w-screen flex justify-center items-center">

        <div className="bg-white rounded border min-w-48">

<Input placeholder="Username"/>
<Input placeholder="Password"/>

<div className=" flex justify-center items-center">
<Button variant="primary" text="SIGNIN" size="sm" fullWidth= {true} loading ={true}/>
</div>

        </div>

    </div>
}