import React, { useState } from 'react'
// import Cookies from 'universal-cookie'
import { PlanningPage } from './components/PlanningPage'
import { LoginForm } from './components/LoginForm'
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = (props) => {

    const style = {
        minWidth: '100vw',
        minHeight: '100vh'
    }

    var user = undefined;
    var userstr = localStorage.getItem("user");
    if (userstr !== null) {
      user = JSON.parse(userstr);
    }
    
    const isAuthenticated = (user !== undefined)

    const [AuthState, setAuthState] = useState({
        isAuthenticated: isAuthenticated,
        isSpectator: isAuthenticated ? user.isSpectator : undefined,
        userName: isAuthenticated ? user.name : undefined
    })

    return (
        <div className="bg-light" style={style}>
            {AuthState.isAuthenticated ? (
                <PlanningPage setAuthState={setAuthState} />
            )
                :
                (
                    <LoginForm setAuthState={setAuthState} />
                )}
        </div>
    )
}