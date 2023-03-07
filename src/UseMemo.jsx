import { useState,useMemo, useEffect } from "react";

export default function UseMemo(){ // The problem is that each time number value changes OR dark theme value changes component rerender as state changes slow function will be triggered again and again causing delay we don't want to recompute dublenumber if we're not changing number value therefore we will cache value of slow function .
       const [number,setNumber] =  useState(0)
       const [dark,setDark] =  useState(false)
       const doubleNumber = useMemo(() => { // now when changing theme the cached value will be used from slowFunction instead of recalculation
        return slowFunction(number)
       },[number])
       
       
       const themeStyles = useMemo(()=>{
        return {
            backgroundColor : dark ? 'black' : 'white',
            color : dark ? 'white' : 'black'
           }
       },[dark]) // dark here since we only change themestyle when dark var is changed now useEffect will not work with themeStyles as dependency

       //now if we do useEffect here with themeStyles as dependency
       useEffect(()=>{
            console.log("theme styles changed")
       },[themeStyles])
       //problem :- this code runs even if we change number value because component rerender and according to js themeStyles and rerendered themeStyles are different therefore we will have to wrap theme styles in usememo as well

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