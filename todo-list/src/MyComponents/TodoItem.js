import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  return (
    <>
    <div >
      <h4>{todo.Title}</h4>
      <p>{todo.Desc}</p>
      <button className="btn btn-sm btn-danger mb-3" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
    <hr />
    </>
  )
}
// Array Function :-
//{()=>{onDelete(todo)}} ---> This is used because we have to pass the function not to call the function .
// Call Function :-
// For Calling the Function we can simply write just this onClick={onDelete}.
