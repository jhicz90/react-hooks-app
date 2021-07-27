import React, { useEffect } from 'react'
import { UseForm } from '../hooks/UseForm'

export const SimpleFormCustomHook = () => {

    // const [formState, setFormState] = useState({
    //     name: '',
    //     email: '',
    //     password: ''
    // })

    const { formValues, handleInputChange } = UseForm({
        name: '',
        email: '',
        password: ''
    })

    // const { name, email, password } = formState
    const { name, email, password } = formValues

    // const handleInputChange = ({ target }) => {
    //     setFormState({
    //         ...formState,
    //         [target.name]: target.value
    //     })
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues);
    }

    useEffect(() => {
        console.log('El correo cambio !!!')
    }, [email])

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Usando useEffect - Custom</h1>
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
                <div className="form-group mt-1">
                    <input
                        value={email}
                        onChange={handleInputChange}
                        className="form-control"
                        type="text"
                        name="email"
                        placeholder="Ingresa tu correo..."
                        autoComplete="off" />
                </div>
                <br />
                <div className="form-group">
                    <input
                        value={password}
                        onChange={handleInputChange}
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="********"
                        autoComplete="off" />
                </div>
                <button
                    className="btn btn-primary btn-sm"
                    type="submit"
                >
                    Guardar
                </button>
            </form>
        </div>
    )
}
