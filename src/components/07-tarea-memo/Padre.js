import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

export const Padre = () => {

    const numeros = [2, 4, 6, 8, 10];
    const [nums, setNums] = useState(numeros)
    const [valor, setValor] = useState(0);

    // const incrementar = (num) => {
    //     setValor(valor + num)
    // }

    const incrementar = useCallback(
        (num) => {
            setValor(v => v + num)
        },
        [setValor],
    )


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: {valor} </p>

            <hr />

            {
                nums.map(n => (
                    <Hijo
                        key={n}
                        numero={n}
                        incrementar={incrementar}
                    />
                ))
            }
            <button
                onClick={() => {
                    setNums([...nums, nums.length + 9])
                }}
                className="btn btn-primary"
            >
                Agregar un contador
            </button>
            {/* <Hijo /> */}
        </div>
    )
}
