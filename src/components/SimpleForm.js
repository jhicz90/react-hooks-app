import React, { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState

    useEffect(() => {
        console.log('hey!!!')
    }, [])

    useEffect(() => {
        console.log('Cambio el correo!!!')
    }, [email])

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <div className="container">
            <h1>Usando useEffect</h1>
            <hr />
            <div className="form-group">
                <input
                    value={name}
                    onChange={handleInputChange}
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Ingresa tu nombre..."
                    autoComplete="off" />
            </div>
            <br />
            <div className="form-group">
                <input
                    value={email}
                    onChange={handleInputChange}
                    className="form-control"
                    type="text"
                    name="email"
                    placeholder="Ingresa tu correo..."
                    autoComplete="off" />
            </div>
            {(name === '123') && <Message />}
        </div>
    )
}
