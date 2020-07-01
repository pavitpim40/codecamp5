import React from 'react'
import Person from './Person'


function NameList(){

    const persons = [
        
        {
            id : 1,
            name: 'Patiphan',
            age : 19,
            skill : 'HTML'
        },
        
        {
            id : 2,
            name: 'Milerdev',
            age : 20,
            skill : 'CSS'
        },
        {
            id : 3,
            name: 'Ohm',
            age : 21,
            skill : 'JS'
        }
        
    ]
    const personList = persons.map( person => <Person key ={person.id} person = {person} />)
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList