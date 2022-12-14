import React, {useState} from "react";
import '../StyleSheet/ToDoForm.css';
import {v4 as uuidv4} from 'uuid';

function TodoForm (props){

    const [input,setInput] = useState("");

    const handleChange = e =>{
        setInput(e.target.value);
    };
    const handleSend = e =>{
        e.preventDefault();
        
        const newToDo ={
           id: uuidv4(),
           text: input,
           completed: false
        }
        props.onSubmit(newToDo);
    };
    return (
        <form className='to-do-form'
        onSubmit={handleSend}>
            <input
                className = 'to-do-input'
                type = 'text'
                placeholder = 'What needs to be done?'
                name='text'
                onChange={handleChange}
            />
            <button className="to-do-button">Add Task</button>
        </form>
    )
}

export default TodoForm;
