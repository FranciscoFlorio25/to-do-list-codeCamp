import React from "react";
import '../StyleSheet/ToDo.css';
import {AiOutlineCloseCircle} from 'react-icons/ai';

function ToDo({text}){
    return (
        <div className='to-do-container'>
            <div className='to-do-text'>
                {text}  
            </div>
            <div className='to-do-icon-container'>
                <AiOutlineCloseCircle className='to-do-icon'/>
            </div>
        </div>
    );
}
export default ToDo;