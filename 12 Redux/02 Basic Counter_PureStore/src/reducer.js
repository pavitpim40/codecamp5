const initialState = { //2
    count : 10,
}


const reducer = (state = initialState,action) => { //1
    switch (action.type){  //4
        case "INCREASE" : 
        return {...state, count : state.count+1}
        case "DECREASE" : 
        return {...state, count : state.count-1}
        case "RESET" : 
        return {...state, count : 0}
        default :
        return state
    }

}


export default reducer //3