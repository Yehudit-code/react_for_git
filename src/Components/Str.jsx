import { useState } from "react"

const Str = ()=>{
    const [str, setStr] = useState("")
    return(<>
    <button onClick={()=>{setStr("very good😍")}}>good🍰</button>
    <button onClick={()=>{setStr("you are great🤣")}}>great💕</button>
    <h1>{str}</h1>
</>)
}

export default Str