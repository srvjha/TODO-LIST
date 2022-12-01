import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Desc Can't be Empty!!!");
    }
    else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }

  }
  return (
    <div className="container my-3">
      <h3>Add Todo</h3>
      <Form onSubmit={submit}>

        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Todo Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />

        </Form.Group>

        <Form.Group className="mb-3" controlId="desc">
          <Form.Label>Desc</Form.Label>
          <Form.Control type="text" placeholder="Enter Desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
        </Form.Group>

        <Button variant="success" type="submit" size="sm" >
          Add         </Button>
      </Form>
    </div>

  )
}
