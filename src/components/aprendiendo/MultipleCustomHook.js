import React from 'react'
import { UseCounter } from '../hooks/UseCounter'
import { UseFetch } from '../hooks/UseFetch'

export const MultipleCustomHook = () => {

    const { counter, increment } = UseCounter(1)
    const { data, loading, error } = UseFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const { author, quote } = !!data && data[0]

    return (
        <div className="container">
            <h1>
                Aqui empezamos con nuestro CUSTOM HOOKS
            </h1>
            <br />
            <br />
            <h2>Breaking Bad QUOTES</h2>
            <hr />
            {
                loading
                    ? (
                        <div className="alert alert-info text-center">
                            Cargando...
                        </div>
                    )
                    : (

                        <figure>
                            <blockquote className="blockquote">
                                <p>{quote}</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                {author} en <cite title="Source Title">Breaking Bad</cite>
                            </figcaption>
                        </figure>
                    )
            }
            <button
                onClick={() => increment(1)}
                className="btn btn-primary btn-sm"
            >
                Siguiente QUOTE
            </button>
        </div>
    )
}
