import { useState } from "react"
import Comp2 from "./Comp2"

function Comp1(){
    const [state,setState]=useState('state 1')
    
    const changeParentStateWithProps = (data)=>{
        setState(data)
    }

    return(
        <div>
        <h1>This is comp1 {state}</h1>
        <Comp2 person={{name:"ahsan"}} childToParentState={changeParentStateWithProps} />  {/*  here we passed our props data and our defined function with different name   */}
        
    </div>
    )

}

export default Comp1