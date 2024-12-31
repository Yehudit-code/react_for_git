import { useState } from "react"

const Count = () => {
    const [count, setCount] = useState(0)

    return (<>
        <button onClick={() => { setCount(count + 1) }}>count6️⃣ </button>
        {count == 6 ? <h4>הגעת ליעד, דרך קצרה שהיא ארוכה עד מאדדדד✌</h4> : <div>{count}</div>}
        {count == 7 ? setCount(0) : <></>}
    </>)
}
export default Count
