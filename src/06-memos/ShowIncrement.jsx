import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {

    console.log('Se llama otra vez el componente')

    return (
        <button
        className="btn btn-primary"
        onClick={increment}
        >Incrementar</button>
    )
})
