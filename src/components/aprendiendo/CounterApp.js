import React, { useState } from 'react'

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 0,
        counter2: 10,
        counter3: 20,
        counter4: 50,
        counter5: 100
    })

    const { counter1, counter5 } = counter

    return (
        <div className="container">
            <h1>Contador 1 - {counter1}</h1>
            <h1>Contador 2 - {counter5}</h1>
            <hr />
            <button
                onClick={() => { setCounter({ ...counter, counter1: counter1 + 1 }) }}
                className="btn btn-primary btn-sm"
            >+1</button>
            <button
                onClick={() => { setCounter({ ...counter, counter5: counter5 + 10 }) }}
                className="btn btn-primary btn-sm"
            >+1</button>
        </div>
    )
}
