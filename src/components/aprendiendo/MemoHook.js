import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../helpers/procesoPesado'
import { UseCounter } from '../hooks/UseCounter'

export const MemoHook = () => {

    const { counter, increment } = UseCounter(5000)
    const [show, setShow] = useState(true)

    const memoprocesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div className="container">
            <h1>MemoHook</h1>
            <br />
            <h3>Contador <small>{counter}</small></h3>
            <p>{memoprocesoPesado}</p>
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
