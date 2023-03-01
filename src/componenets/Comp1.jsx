import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"



function Comp1(){
    const [state,setState]=useState('state 1')
    const dispatch = useDispatch()
    const select  = useSelector((state)=>state?.age?.age)
    const name  = useSelector((state)=>state?.name?.name)

    
    return(
        <div>
        <h1>This is comp1 {select}</h1>
        <h1>name = {name}</h1>
    </div>
    )

}

export default Comp1