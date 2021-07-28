import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext)

    return (
        <div>
            Soy el LOGIN
            <button
                onClick={() => {
                    setUser({
                        id: 32165165,
                        name: 'Jose Hans',
                        email: 'jseiba@gmail.com'
                    })
                }}
                className="btn btn-primary"
            >
                Login
            </button>
        </div>
    )
}
