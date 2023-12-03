import {useCallback, useEffect, useState} from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    /** 
        Tenemos que tener en cuenta que cuando se re-renderiza el componente padre, 
        se vuelve a crear la función incrementFather (apunta a una nueva dirección en memoria)
        por lo que el componente hijo ShowIncrement se vuelve a renderizar, 
        aunque no se haya modificado su estado. Para evitar esto, utilizamos el hook useCallback, 
        que nos permite memorizar la función incrementFather, 
        y solo se volverá a crear cuando cambien las dependencias que le pasamos como segundo argumento.
    */

    const incrementFather = useCallback(
      () => {
        setCounter(c => c + 1);
      },
      [],
    )

    useEffect(() => {
        incrementFather();
    }, [incrementFather])
    

  return (
    <>
    
        <h1>useCallback Hook: {counter}</h1>
        <hr />

        <ShowIncrement increment={incrementFather} />
    </>
  )
}
