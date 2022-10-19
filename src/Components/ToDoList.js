import React from "react";
import '../StyleSheet/ToDoList.css';
import TodoForm from "./ToDoForm";


function ToDoList(props) {
    return (
        <>
            <TodoForm />
            <div className='do-list-container'>
                Task list
            </div>
        </>
    );
}

export default ToDoList;