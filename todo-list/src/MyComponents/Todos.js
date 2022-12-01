import React from 'react'
import {TodoItem} from "./TodoItem"

export const Todos = (props) => {
  let StyleFooter ={
    minHeight:"70vh",
    
    
  }
  return (
    <div className="container" style={StyleFooter}>
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length===0 ? "No Todos To Display":
      props.todos.map((todo)=>{
         return (
          
         <TodoItem todo = {todo} key={todo.SNo} onDelete={props.onDelete}/> 
         
         )
      }
      )}
      
    </div>
  )
}
