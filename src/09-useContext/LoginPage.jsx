import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

    const usuario = useContext(UserContext);

    return (
        <>
        <h1>
        LoginPage
        </h1>

        <pre >
            {JSON.stringify(usuario, null, 3)}
        </pre>
        </>
    )
}
