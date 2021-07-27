import React from 'react'
import { UseCounter } from '../hooks/UseCounter'

export const CounterCustomHook = () => {

    const { counter, increment, decrement, reset } = UseCounter(100)

    return (
        <div className="container">
            <h1>Contador con HOOK: {counter}</h1>
            <hr />
            <button onClick={() => increment(2)} className="btn btn-primary btn-sm">+1</button>
            <button onClick={() => reset()} className="btn btn-danger btn-sm">Reset</button>
            <button onClick={() => decrement(2)} className="btn btn-warning btn-sm">-1</button>
        </div>
    )
}
