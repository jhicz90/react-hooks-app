import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ tasks, handleToggle, handleDelete }) => {
    return (
        <ul className="list-group list-group-numbered">
            {
                tasks.map((task, i) => (
                    <TodoListItem
                        key={i}
                        task={task}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                ))
            }
        </ul>
    )
}
