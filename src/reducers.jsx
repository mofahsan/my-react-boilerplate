


const initial = {
    age:20
};



const myReducer=(state=initial,action)=>{
    const newState ={...state}

    if (action.type==='ADD'){
            newState.age+=1
            console.log(newState)
    }
    else if (action.type ==='SUBTRACT'){
        newState.age=newState.age-1
    }
    return newState
}

export default myReducer