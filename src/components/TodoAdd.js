import React from 'react'
import { UseForm } from '../hooks/UseForm'

export const TodoAdd = ({ handleTaskAdd }) => {

    const [{ desc }, handleInputChange, reset] = UseForm({ desc: '' })

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

        handleTaskAdd(action)
        reset()
    }

    return (
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
    )
}
