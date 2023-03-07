import { useCallback, useState } from "react"
import List from "./List"


// the main difference between useMemo and useCallback is useMemo returns values while useCallBack returns a function


export default function UseCallback(){
    const [number,setNumber] = useState(1)
    const [dark,setDark] = useState(false)

    //problem :- without useCallback even when theme changes list useEffect was running consoling updating items because  component rerender and a different getItems function is created each time and passed causing list useEffect to run 
    const getItems=()=>{
        return [number , number + 1 , number + 2]
    }

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    return (
        <div style={theme}>
        <input type='number' value = {number} 
        onChange={e => setNumber(parseInt(e.target.value))}
        />
        <button onClick={()=>setDark(prevDark => !prevDark )} > Toggle theme</button>
        <List getItems={getItems} />
        </div>
    )
}