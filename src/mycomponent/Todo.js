import React from 'react'

export default function todo({todo,btndelete}) {
  return (
    <div>
        
        <h6>{todo.sno} {todo.title}</h6>
        <p>{todo.desc}</p>
        <button className="btn btn-danger" onClick={()=>{btndelete(todo)}}>remove</button>
        <hr></hr>
    </div>
  )
}
