import React, {useState} from "react";
import '../StyleSheet/ToDoList.css';
import TodoForm from "./ToDoForm";
import ToDo from './ToDo';

function ToDoList() {

    const [toDos, setToDos] = useState([]);

    const addToDo= toDo => {
        if(toDo.text.trim()){
            toDo.text = toDo.text.trim();
            const updatedToDo= [toDo, ...toDos];
            setToDos(updatedToDo);
        }
    }

    const deleteTask = id => {
        const updatedToDo = toDos.filter(toDo => toDo.id !== id);
        setToDos(updatedToDo);
    }

    const completeTask = id => {
        const updatedToDo = toDos.map(toDo =>{
            if(toDo.id === id){
                toDo.completed = !toDo.completed;
            }
            return toDo;
        });
        setToDos(updatedToDo);
    }
    return (
        <>
            <TodoForm  onSubmit={addToDo}/>
            <div className='do-list-container'>
                {
                    toDos.map((toDo) =>
                        <ToDo 
                            key={toDo.id}
                            id={toDo.id}
                            text= {toDo.text}
                            completed={toDo.completed}
                            deleteTask={deleteTask}
                            completeTask={completeTask}
                        />
                    )
                }
            </div>
        </>
    );
}

export default ToDoList;