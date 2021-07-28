import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    // const userlogged = {
    //     id: 32165165,
    //     name: 'Jose Hans',
    //     email: 'jseiba@gmail.com'
    // }

    const [user, setUser] = useState({})

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <AppRouter />
        </UserContext.Provider>
    )
}
