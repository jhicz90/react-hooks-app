import React, { useEffect, useReducer } from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { TodoReducer } from './TodoReducer'

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender REACT',
//     done: false
// }]

const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender REACT',
    //     done: false
    // }]

    return JSON.parse(localStorage.getItem('tasks')) || []
}

export const TodoApp = () => {

    const [tasks, dispatch] = useReducer(TodoReducer, [], init)

    // console.log(desc)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const handleTaskAdd = (action) => {
        dispatch(action)
    }

    const handleDelete = (taskId) => {
        const action = {
            type: 'delete',
            payload: taskId
        }

        dispatch(action)
    }

    const handleToggle = (taskId) => {
        dispatch({
            type: 'toggle',
            payload: taskId
        })
    }

    return (
        <div className="container p-3">
            <h1>Todo APP</h1>
            <hr />
            <div className="row">
                <div className="col-2">
                    <h4>{tasks.length} Tarea{tasks.length > 1 ? 's' : ''}</h4>
                </div>
                <div className="col-10">
                    <TodoAdd
                        handleTaskAdd={handleTaskAdd}
                    />
                </div>
            </div>
            <br />
            <TodoList
                tasks={tasks}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
            />
        </div>
    )
}
