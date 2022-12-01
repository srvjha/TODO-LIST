import Header from "./MyComponents/Header";
// Do remember that the Header should have an capital letter starting otherwise 
// it will treat it as normal html tag.
import { Footer } from "./MyComponents/Footer";
// here the curly braces indicates that our export function is constant while in header it was default.
import { Todos } from "./MyComponents/Todos";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import { AddTodo } from "./MyComponents/AddTodo";
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }



  const onDelete = (todo) => {
    console.log("I am Clicking Delete For ", todo)

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));
  }
  // Deleting this way does not work in react
  // let index = todos.indexOf(todo)
  // todos.splice(index,1)

  const addTodo = (title, desc) => {
    console.log("hn bhai krle add tu bhi")
    let SNo;
    if (todos.length === 0) {
      SNo = 0;
    }
    else {
      SNo = todos[todos.length - 1].SNo + 1;
    }

    const myTodo = {
      SNo: SNo,
      Title: title,
      Desc: desc,
    }
    setTodos([...todos, myTodo]);

  }


  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])

  return (
    <>
      <Router>
        <Header Title="My Todos List" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;