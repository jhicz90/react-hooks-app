import React, { memo } from 'react'

export const ShowIncrement = memo(({ increment }) => {

    console.log('me volvi a generar :(')

    return (
        <button
            onClick={() => { increment(5) }}
            className="btn btn-primary">
            +1
        </button>
    )
})
