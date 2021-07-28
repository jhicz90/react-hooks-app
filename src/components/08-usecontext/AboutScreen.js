import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const { user } = useContext(UserContext)

    console.log(user)

    return (
        <div>
            Soy el ABOUT
        </div>
    )
}
