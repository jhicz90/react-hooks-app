import React, { useLayoutEffect, useRef } from 'react'
import { UseCounter } from '../hooks/UseCounter'
import { UseFetch } from '../hooks/UseFetch'

export const LayoutEffect = () => {

    const { counter, increment } = UseCounter(1)
    const { data, loading, error } = UseFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const { author, quote } = !!data && data[0]

    const pTag = useRef()

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <div className="container">
            <h1>
                LayoutEffect
            </h1>
            <br />
            <br />
            <h2>Breaking Bad QUOTES</h2>
            <hr />
            <figure>
                <blockquote ref={pTag} className="blockquote">
                    <p>{quote}</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    {author} en <cite title="Source Title">Breaking Bad</cite>
                </figcaption>
            </figure>
            <button
                onClick={() => increment(1)}
                className="btn btn-primary btn-sm"
            >
                Siguiente QUOTE
            </button>
        </div>
    )
}
