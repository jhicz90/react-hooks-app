import React, { useState } from 'react'
import { UseCounter } from '../hooks/UseCounter'
import { Small } from './Small'

export const Memorize = () => {

    const { counter, increment } = UseCounter(10)
    const [show, setShow] = useState(true)

    return (
        <div className="container">
            <h1>Memorize</h1>
            <br />
            <h3>Contador <Small value={counter} /></h3>
            <button
                onClick={() => { increment(1) }}
                className="btn btn-primary"
            >
                +1
            </button>
            <button
                onClick={() => { setShow(!show) }}
                className="btn btn-outline-primary"
            >Mostrar / Ocultar {JSON.stringify(show)}</button>
        </div>
    )
}
