import React from "react";
import '../App.css'

const TodoList = ({ todos, setTodo, setEditTodo }) => {

    const handleDelete=({id})=>{
        setTodo(todos.filter((todos)=>todos.id !== id));
    }

    

    const handleEdit=({id})=>{
        const findTodo = todos.find((todo)=> todo.id === id);
        setEditTodo(findTodo)
    }

  return (
    <div className="list-main">
      {
      todos.map((todo) => (
        <li className="todo-list" key={todo.id}>
          <input
            type='text'
            value={todo.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
          <button onClick={()=> handleEdit(todo)}>Edit</button>
          <button onClick={()=> handleDelete(todo)} >Delete</button>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
