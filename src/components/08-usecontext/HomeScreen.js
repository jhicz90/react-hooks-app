import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    const { user } = useContext(UserContext)

    return (
        <div className="container">
            Soy el HOME
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </div>
    )
}
