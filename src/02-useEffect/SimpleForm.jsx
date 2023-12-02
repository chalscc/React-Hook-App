import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'carles',
        email: 'carlescatalancalabuig@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;

        setFormState ({
            ...formState,
            [name]: value
        })
    };

    useEffect(() => {
        // console.log('Primera renderizacion!')
    }, [])

    useEffect(() => {
        // console.log('Cambio al formulario!')
    }, [formState])

    useEffect(() => {
        // console.log('Cambio al email!')
    }, [email])

    return (
        <>
        <h1>SimpleForm</h1>

        <hr />

        <input 
            type="text" 
            className="form-control" 
            placeholder="Username"
            name="username"
            onChange={onInputChange}
            value = {username}
        />



        <input 
            type="email" 
            className="form-control mt-2" 
            placeholder="...@gmail.com"
            onChange={onInputChange}
            name="email"
            value = {email}
        />

        { 
            (username === 'carles') && <Message />
        }
        </>
    )
}
