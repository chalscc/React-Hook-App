import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const HomePage = () => {
    const {user, setUser} = useContext(UserContext);

    return (
        <>
        <h1>
        Home Page
        <small> {user?.name}</small>
        </h1>

        <pre >
            {JSON.stringify(user, null, 3)}
        </pre>
        <button
        className='btn btn-primary'
        onClick={() => setUser({
            id: 1234,
            name: 'Carles',
            email: ''
        }) }
        >
            Establecer Usuario
        </button>
        </>

    )
}
