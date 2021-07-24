import React from 'react'

export const TodoListItem = ({ task, handleToggle, handleDelete }) => {
    return (
        <li
            onClick={() => handleToggle(task.id)}
            className="list-group-item list-group-item-warning d-flex justify-content-between"
        >
            <div className={`ms-2 me-auto ${task.done && "text-decoration-line-through"}`}>
                {task.desc}
            </div>
            <button
                onClick={() => handleDelete(task.id)}
                className="btn btn-danger btn-sm"
            >Borrar</button>
        </li>
    )
}
