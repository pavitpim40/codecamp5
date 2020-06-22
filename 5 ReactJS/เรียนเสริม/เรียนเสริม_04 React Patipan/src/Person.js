import React from 'react'

function Person({person}) {
    return (
        <p> My name is {person.name} I'm {person.age} My skill {person.skill}</p>
    )
}
export default Person