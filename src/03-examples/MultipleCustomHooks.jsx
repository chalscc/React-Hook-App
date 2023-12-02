import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const url = 'https://fakestoreapi.com/products/1'
    const { data, isLoading, hasError } = useFetch(url)

    console.log(data, isLoading, hasError)

    return (
        <>    
            <h1>BreakingBad Quotes</h1>
            <hr/>
        </>
        
        
    )
}
