// Write your code here
import './index.css'

import React from 'react'

const TodoItem = props => {
    const {todoDetails, deleteTodo} = props 
    const {id, title} = todoDetails
    const onDelete = (id) => {
         deleteTodo(id)
    }

    return (
        <li className="todo-container">
           <p className="para">{title}</p> 
           <button className="button" type="button" onClick={onDelete}>
              Delete
           </button> 
        </li>
    )
}

export default TodoItem

