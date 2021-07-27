import React, { useState } from 'react'
import { MultipleCustomHook } from './MultipleCustomHook'

export const RealUseRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div className="container">
            <h1>Ejemplo de USEREF</h1>
            <br />
            {show && <MultipleCustomHook />}
            <button
                onClick={() => {
                    setShow(!show)
                }}
                className="btn btn-primary">
                Mostrar / Ocultar
            </button>
        </div>
    )
}
