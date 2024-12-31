import { useState } from "react"

const Data = () => {
    function set() {
        setFlag(!flag)
    }
    const [flag, setFlag] = useState(false)
    return (<>
        <button onClick={()=>{set()}}>click me</button>
        {flag ? <h1 style={{ color: 'lightblue', backgroundColor: 'yellow' }}>bring us home😉</h1> : <></>}
    </>)
}
export default Data