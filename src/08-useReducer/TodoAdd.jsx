import React, { useState } from 'react'

export const TodoAdd = ({onNewTodo}) => {

    const [inputValue, setinputValue] = useState('')

    const onChangeInputValue = ({target}) => {
        setinputValue(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: new Date().getTime(),
            description: inputValue,
            done: false
        }
        onNewTodo( newTodo )
        setinputValue('')
    }

    return (
        <form>
            <input value={inputValue} onChange={onChangeInputValue} type='text' placeholder='¿Qué hay que hacer?' className='form-control'/>
            <button onClick={handleSubmit} type='submit' className='btn btn-outline-primary mt-1'>Agregar</button>
        </form>
    )
}
