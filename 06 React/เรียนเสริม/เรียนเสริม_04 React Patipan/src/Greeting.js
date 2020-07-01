import React from 'react'

// function UserGreeting(props){
//     return <h1>Welcome Pathiphan!</h1>
// }

// function GuestGreeting(props){
//     return <h1>Please sign up.</h1>
// }

// function Greeting(props){
//     const isLoggedIn = props.isLoggedIn;

//     if(isLoggedIn){
//         return <UserGreeting/>
//     }
//     return <GuestGreeting/>
// }
function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    let message;

    if(isLoggedIn){
        return message = <h1>Welcome Pathiphan!</h1>
        
    }
    return message = <h1>Please sign up.</h1>
}




export default Greeting