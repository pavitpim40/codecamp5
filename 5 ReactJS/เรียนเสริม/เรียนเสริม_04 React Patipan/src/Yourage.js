import React from 'react'

function YourAge(props){
    const age = props.age

    return (
        <div>
            You are { age >= 18 ? 'old' : 'young'}
        </div>

    )
}

export default YourAge

