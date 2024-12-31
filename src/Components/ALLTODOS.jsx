import { useReducer, useState } from "react"
import TODO from "./TODO"




const ALLTODOS = () => {
    const [name, setName] = useState("")
    const [id, setId] = useState(0)

    const choose = (state, action) => {
        switch (action.type){
        case "Delete":
           return state.filter(e)=>{

           }
          
        case "Add":
           
    }
    }
    const [task, dispatch] = useReducer(choose, [{ id: 1, name: "מחמאה" },
    { id: 2, name: "עידוד" }, { id: 3, name: "מראה שלך" }])

    const Delete = () => {
        dispatch({ type: "Delete", id: id })
    }
    const Add = () => {
        dispatch({ type: "Add", id: id, name: name })
    }
    return (
        <>
            <p>delete</p>
            <input onBlur={(e) => { setId(e.target.value) }}></input><br></br>
            <button onClick={Delete}>Delete</button>
            <p>add name</p>
            <input onBlur={(e) => { setName(e.target.value) }}></input><br></br>
            <p>add ID</p>
            <input onBlur={(e) => { setId(e.target.value) }}></input><br></br>
            <button onClick={Add}>Add</button><br></br>

            <TODO arr={task} />
        </>)
}
export default ALLTODOS