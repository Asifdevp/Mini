import React, {useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import '../App.css';

const Form = ({input, setInput, todos, setTodo, editTodo, setEditTodo}) => {

const updateTodo=(title, id)=>{
    const newTodo=todos.map((todo)=>
        todo.id===id ? {title,id} :todo
    );
    setTodo(newTodo);
    setEditTodo("");
};

useEffect(()=>{
    if(editTodo){
        setInput(editTodo.title);
    }
    setInput("")
},[setInput,editTodo])

    const onInputChange=(event)=>{
         setInput(event.target.value)
    };

    const onFormSubmit =(event)=>{
        event.preventDefault();
if(!editTodo){
        setTodo([...todos, {id: uuidv4(), title: input}]);
        setInput("");
} else{
    updateTodo(input,editTodo.id, editTodo.completed)
}
    };

  return (
    <form onSubmit={onFormSubmit} className="form-comp">
        <input 
        type="text" 
        placeholder='Enter your wish...' 
        className='task-input'
        value={input}
        required
        onChange={onInputChange}
        />
        <button className='button-add'>{editTodo ? "OK" : "ADD"}</button>
        
    </form>
  )
}

export default Form