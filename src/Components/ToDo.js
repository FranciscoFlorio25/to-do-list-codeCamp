import React from "react";
import '../StyleSheet/ToDo.css';
import {AiOutlineCloseCircle} from 'react-icons/ai';

function ToDo({id,text, completed,completeTask, deleteTask}){
    return (
        <div className={completed ? 'to-do-container completed': 'to-do-container' }>
            <div className='to-do-text'
            onClick={() => completeTask(id)}
            >
                {text}  
            </div>
            <div className='to-do-icon-container'
                onClick={() => deleteTask(id)}>
                <AiOutlineCloseCircle className='to-do-icon'/>
            </div>
        </div>
    );
}
export default ToDo;