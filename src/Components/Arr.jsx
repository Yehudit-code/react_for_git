const Arr = () => {
    const arr = ["צפת", "נהריה", "טבריה"]
    return (<>
        {arr.map((e, index) => {
            return <h1 style={{ color: 'red', backgroundColor: 'greenyellow' }}>{e}</h1>
        })}
    </>)
}
export default Arr

