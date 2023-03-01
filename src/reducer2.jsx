const initialstate={
    name:"ahsan"
}



export default function reducer2 (state=initialstate,action){
            const newState={...initialstate}

            if(action.type=='UPDATE'){
                newState.name="AQDAS"
            }
            return newState
}