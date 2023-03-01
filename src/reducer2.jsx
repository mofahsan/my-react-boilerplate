const initial={
    name:"ahsan"
}



export default function reducer2 (state=initial,action){
            const newState={...state}

            if(action.type=='UPDATE'){
                newState.name="AQDAS"
            }
            return newState
}