import React from "react";
import '../StyleSheet/ToDoForm.css';

function TodoForm (props){

    return (
        <form className='to-do-form'>
            <input
                className = 'to-do-input'
                type = 'text'
                placeholder = 'What needs to be done?'
                name='text'
            />
            <button className="to-do-button">Add Task</button>
        </form>
    )
}

export default TodoForm;
