const {createStore} = require('redux')


const initialState = {
    age:21
}

const myReducer=(state=initialState,action)=>{
    const newState ={...state}

    if (action.type==='ADD'){
            newState.age+=1
    }
    else if (action.type ==='SUBTRACT'){
        newState.age=newState.age-1
    }
    return newState
}

const store = createStore(myReducer)

// store.dispatch({type:'ADD'});
store.dispatch({type:'SUBTRACT'});


console.log(store.getState())