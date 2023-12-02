import React from 'react'
import { useFetch } from '../hooks/useFetch'
import useCounter from '../hooks/useCounter'

export const MultipleCustomHooks = () => {

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
                ? (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                ) : (                    
                    
                        <blockquote className='blockquote text-end'>
                            <p className='mb-3'>{title}</p>
                            <footer className='blockquote-footer'> {description} </footer>
                        </blockquote>
                        
                )
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
