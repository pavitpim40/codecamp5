const redux = require('redux')
//A

//D
const initialState = {
    counter : 0, 
} 

// 1.Reducer //C
const reducer = (state = initialState, action) =>{
    if(action.type === "ADD_COUNTER" ){
        return {...state, counter : state.counter + action.value}
    }
    if(action.type === "INCREASE_COUNTER"){
        return {...state, counter : state.counter + 1}
    }
    return state
}

// 2.Store //B
const store = redux.createStore(reducer);
console.log(store.getState());

// 3.Subscribe //F
store.subscribe(()=> {
    console.log("[Subscribe ]" , store.getState());
})


// 4.Action //E
store.dispatch({type : "INCREASE_COUNTER"})
console.log(store.getState());
store.dispatch({type : "ADD_COUNTER" , value :5,})
console.log(store.getState());

