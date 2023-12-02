import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const { formState, username, email, password, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });
    
    return (
        <>
        <h1>Formulario con custom hook</h1>

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

        <input 
            type="password" 
            className="form-control mt-2" 
            placeholder="Constraseña"
            onChange={onInputChange}
            name="password"
            value = {password}
        />        

        <button onClick={onResetForm} className='btn btn-primary mt-2'> Borrar </button>

        </>

    )
}
