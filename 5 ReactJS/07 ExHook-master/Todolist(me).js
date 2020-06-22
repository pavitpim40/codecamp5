import React , {useState} from 'react'


export const TodoList = () => {
    return (
        <div style={{display: "grid" , gridTemplateColumns: "300px 300px", justifyItems:"center",gap:"10px"}}>
            <div>
                <h3>TodoList</h3>
                <ul></ul>
                <div>
                    <input type = "text" value ="" onChange={()=> "a"} />
                    <button>add text</button>
                </div>
            </div>
            <div>
                <h3> Done </h3>
                <ul></ul>
            </div>
        </div>
    )

}