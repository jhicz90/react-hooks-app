import React, { useEffect, useReducer } from 'react'
import { UseForm } from '../hooks/UseForm'
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
    const [{ desc }, handleInputChange, reset] = UseForm({ desc: '' })

    // console.log(desc)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const handleSubmit = (e) => {
        e.preventDefault()

        const newTask = {
            id: new Date().getTime(),
            desc,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTask
        }

        dispatch(action)
        reset()
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
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <input
                                name="desc"
                                type="text"
                                className="form-control"
                                placeholder="Nueva tarea..."
                                autoComplete="off"
                                onChange={handleInputChange}
                                value={desc} />
                            <button className="btn btn-outline-primary" type="submit">Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
            <br />
            <ul className="list-group list-group-numbered">
                {
                    tasks.map((task, i) => (
                        <li
                            key={task.id}
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
                    ))
                }
            </ul>
        </div>
    )
}
