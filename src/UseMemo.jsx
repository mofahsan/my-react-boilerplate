import { useState } from "react";

export default function UseMemo(){ // The problem is that each time number value changes OR dark theme value changes component rerender as state changes slow function will be triggered again and again causing delay we don't want to recompute dublenumber if we're not changing number value therefore we will cache value of slow function .
       const [number,setNumber] =  useState(0)
       const [dark,setDark] =  useState(false)
       const doubleNumber = slowFunction(number)
       const themeStyles = {
        backgroundColor : dark ? 'black' : 'white',
        color : dark ? 'white' : 'black'
       }

 return (
    <>
    <input type = 'number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
    <button onClick={()=> setDark(prevDark => !prevDark)} > Change Theme</button>
    <div style={themeStyles}>{doubleNumber}</div>
    </>
 )

}

function slowFunction(num){
    console.log('Calling slow function')
    for (let i = 0 ; i <= 1000000000 ; i++){}
    return num * 2
}