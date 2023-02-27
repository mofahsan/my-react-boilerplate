import { useState } from "react"
 
 
 function Comp2(props){
    
    const [state,setState]=useState('state 2')
    const [input,setinput]=useState('')

    return(
        <div>
            <h1>This is comp2 {state}</h1>
            <h1 >{props.person.name} This is props data</h1>              {/* simple example of passing data from parent to child */}

            {/* example of changing parent component state by passing a function */}
            <input onChange={(e)=>setinput(e.target.value)} ></input>
            <button onClick={()=>props.childToParentState(input)}>Increment</button>
        </div>
    )

 }

 export default Comp2