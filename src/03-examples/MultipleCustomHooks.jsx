import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const url = 'https://fakestoreapi.com/products/1'
    const { data, isLoading, hasError } = useFetch(url)

    console.log(data)

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
                    <>
                        <blockquote className='blockquote text-end'>
                            <p className='mb-3'>{title}</p>
                            <footer className='blockquote-footer'> {description} </footer>
                        </blockquote>
                        <button className='btn btn-primary'>
                            Siguiente producto
                        </button>
                    </>
                )
            }            

        </>
    )
}
