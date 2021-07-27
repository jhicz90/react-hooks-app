import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

    const [counter, setCounter] = useState(15)

    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    const increment = useCallback((num) => {
        setCounter(c => c + num)
    }, [setCounter])

    return (
        <div className="container">
            <h1>Usando CallbackHook</h1>
            <br />
            <h3>Contador {counter}</h3>
            <ShowIncrement increment={increment} />
        </div>
    )
}
