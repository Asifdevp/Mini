import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Component/Form';
import Header from './Component/Header';
import TodoList from './Component/TodoList';

const App=()=> {

  const initialState = JSON.parse(localStorage.getItem("todo")) || [];

  
  const [input,setInput]= useState("")
  const [todos,setTodo] = useState(initialState)
  const [editTodo, setEditTodo]= useState(null);

 useEffect(()=>{
  localStorage.setItem("todo", JSON.stringify(todos))
 },[todos])
  

  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodo={setTodo}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList 
          todos={todos}
          setTodo={setTodo}
          setEditTodo={setEditTodo}
          />
        </div>
      </div>
      
    </div>
  );
}

export default App;
