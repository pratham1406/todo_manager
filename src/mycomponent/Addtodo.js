import React from 'react'
import './Addtodo.css'
import { useState } from 'react';




export default function Addtodo(props) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description cannot be empty")
        }
        else{
        props.addtodo(title,desc);
        setTitle("");
        setDesc("");
        }


    }
    
  return (
    <div className='container my-3 py-10'>
        <h3 className='text-center lead'><strong>Add Here</strong></h3>
        <form className="jai" onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" className="form-control" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <textarea className="form-control" placeholder="Description" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc"></textarea>
  </div>
 
  <button type="submit" className="btn btn-sm btn-success">Add</button>
</form>
        
    </div>
  )
}
