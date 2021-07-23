import { useState } from 'react'

export const UseForm = (initialForm = {}) => {
    const [formValues, setFormValues] = useState(initialForm)

    const reset = () => {
        setFormValues(initialForm)
    }

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    return [formValues, handleInputChange, reset]
}
