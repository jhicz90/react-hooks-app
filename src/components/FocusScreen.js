import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef()


    const handleFocus = () => {
        // document.querySelector('input').focus()
        inputRef.current.focus()
    }

    return (
        <div className="container">
            <h1>Focus Screen</h1>
            <br />
            <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Su nombre"
            />
            <button
                onClick={handleFocus}
                className="btn btn-link mt-3">
                Focus
            </button>
        </div>
    )
}
