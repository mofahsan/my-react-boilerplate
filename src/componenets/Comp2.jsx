import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
 
 
 function Comp2(){
    
    const [state,setState]=useState('state 2')
    const dispatch = useDispatch()
    const select  = useSelector((state)=>state?.age)
    
    return(
        <div>
            <h1>This is comp2 {select}</h1>
            <button onClick={()=>dispatch({type:'ADD'})}>Increment</button>
        </div>
    )

 }

 export default Comp2