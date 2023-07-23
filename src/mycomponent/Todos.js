import React from 'react'
import Todo from "./Todo"

export default function Todos(props) {
  let designnn={
    "backgroundColor":"rgba(15, 110, 15, 0.12)",
    
    "border-radius":"20px",
    "padding":"20px"

  }

  return (
    <>
    <h3 className="text-center ">Todo List</h3>
    <div className='container my-1' style={designnn}>
        

        { props.todos.length===0?"Nothing to display":
        
        props.todos.map((todo) =>{
          return ( <Todo todo={todo} key={todo.sno} btndelete={props.btndelete}/>)
       
        })}


        {/* <Todo todo={props.todos[0]}/> */}

    </div>
    </>
  )
}
