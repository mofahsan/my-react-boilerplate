import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"



function Comp1(){
    const [state,setState]=useState('state 1')
    const dispatch = useDispatch()
    const select  = useSelector((state)=>state?.age)
    
    return(
        <div>
        <h1>This is comp1 {select}</h1>
    </div>
    )

}

export default Comp1