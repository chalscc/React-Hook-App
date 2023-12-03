import React from 'react'
import { useFetch, useCounter } from '../hooks'
import { Quote, LoadingQuote } from '../03-examples'

export const Layout = () => {

    const { counter, increment } = useCounter(1)

    const url = `https://fakestoreapi.com/products/${counter}`
    const { data, isLoading, hasError } = useFetch(url)
    const { title, description } = !!data && data


    return (
        <>    
            <h1>Mis productos</h1>
            <hr/>

            {
                isLoading  
                ?  <LoadingQuote />
                :  <Quote title={title} description={description}/>
            }
                <button 
                    className='btn btn-primary' 
                    onClick={() => increment()}
                    disabled={isLoading}
                >
                    Siguiente producto
                </button>
        </>
    )
}
