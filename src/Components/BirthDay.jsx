import { useEffect, useState } from "react"

const BirthDay =()=>{
    const [age, setAge]= useState(0)
    const [name, setName]= useState("")

    useEffect(()=>{
    })
    return(<>
    <input onChange={(e)=>{setAge(e.target.value)}}/>
    <br/>
    <input onChange={(e)=>{setName(e.target.value)}}/>
    <br/>
    {age > 18 ? <h3>מעל גיל 18 {name}</h3>:<></>}
    <h2 style={{color:"pink"}}>happy birthday!! you are {age} years old</h2>
    </>)
}

export default BirthDay