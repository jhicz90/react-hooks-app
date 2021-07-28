import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import { AboutScreen } from './AboutScreen'
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'

export const AppRouter = () => {
    return (
        <Router>
            <>
                <ul>
                    <li>
                        <Link to="/">App</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>

                <hr />
                <Switch>
                    <Route exact path="/">
                        <h1>Hola a todos</h1>
                    </Route>
                    <Route path="/about" component={AboutScreen} />
                    <Route path="/home" component={HomeScreen} />
                    <Route path="/login" component={LoginScreen} />
                </Switch>
            </>
        </Router>
    )
}
