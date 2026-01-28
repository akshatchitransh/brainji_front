import { Shareicon } from "../icons/shareicon"
interface Cardprops{
    title:string,
    link:string,
    type:"youtube"|"Twitter"
}
export const Card= (props:Cardprops)=>{
    return <div className="bg-white rounded-md shadow-md border-gray-200 max-w-70 p-4 my-10 border text-sm">
        <div className="flex justify-between items-center">
            <div className="flex justify-center items-center p-4 ml-0">
                <div className="mr-2 text-gray-500 "> <Shareicon/></div>
           {props.title}
            </div>

            <div className="flex justify-center item-center ">
 <div className="pr-4 text-gray-500"> <a href={props.link} target ="_blank"><Shareicon/></a> </div>

 <div className=" text-gray-500"> <Shareicon/></div>
            </div>

            
        </div >
        {props.type=="youtube"&& <div className="width-full py-2" > <iframe width="240" height="130" src={props.link
  .replace("watch?v=", "embed/")
  .replace("youtu.be/", "www.youtube.com/embed/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div> }



        {props.type=="Twitter"&&  <div>

<blockquote className="twitter-tweet">
  <a href={props.link.replace("x.com","twitter.com")}>
  
  </a>
</blockquote>

</div> }
        
       

      
    </div>
}